/**
 * markdown.js
 * -----------
 * Minimal, dependency-free markdown-like renderer used to turn the
 * `detailedDescription` field of a project (see projects-data.js) into
 * safe, styled HTML for the project modal.
 *
 * Supported syntax (line-based, processed top to bottom):
 *
 *   ## Heading            -> <h3>Heading</h3>
 *   - list item            -> <ul><li>list item</li></ul>
 *   1. list item           -> <ol><li>list item</li></ol>
 *   **bold**                -> <strong>bold</strong>
 *   *italic*                 -> <em>italic</em>
 *   `code`                   -> <code>code</code>
 *   [label](url)             -> <a href="url" target="_blank" rel="noopener noreferrer">label</a>
 *   (blank line)              -> paragraph break
 *   any other line           -> merged into the current <p>
 *
 * All raw text is HTML-escaped before any markdown token is applied,
 * so user-authored project descriptions can never inject arbitrary HTML.
 */

/**
 * Escapes HTML special characters in a string.
 * @param {string} str
 * @returns {string}
 */
function escapeHtml(str) {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

/**
 * Applies inline markdown formatting (bold, italic, code, links) to an
 * already HTML-escaped line of text.
 * @param {string} escapedLine
 * @returns {string}
 */
function renderInlineMarkdown(escapedLine) {
    let text = escapedLine;

    // Links: [label](url)
    text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match, label, url) => {
        return `<a href="${url}" target="_blank" rel="noopener noreferrer">${label}</a>`;
    });

    // Bold: **text**
    text = text.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');

    // Italic: *text* (avoid matching leftover ** from bold already replaced)
    text = text.replace(/\*([^*]+)\*/g, '<em>$1</em>');

    // Inline code: `code`
    text = text.replace(/`([^`]+)`/g, '<code>$1</code>');

    return text;
}

/**
 * Converts a project description string (plain text with the lightweight
 * markdown syntax documented above) into HTML markup.
 * @param {string} rawText
 * @returns {string} HTML string
 */
function renderMarkdown(rawText) {
    if (!rawText) return '';

    const lines = String(rawText).split('\n');

    const htmlParts = [];
    let listBuffer = [];
    let listType = null; // 'ul' | 'ol'
    let paragraphBuffer = [];

    function flushParagraph() {
        if (paragraphBuffer.length > 0) {
            htmlParts.push(`<p>${paragraphBuffer.join(' ')}</p>`);
            paragraphBuffer = [];
        }
    }

    function flushList() {
        if (listBuffer.length > 0 && listType) {
            const items = listBuffer.map(item => `<li>${item}</li>`).join('');
            htmlParts.push(`<${listType}>${items}</${listType}>`);
            listBuffer = [];
            listType = null;
        }
    }

    lines.forEach(rawLine => {
        const line = rawLine.trim();

        // Blank line: paragraph/list break
        if (line === '') {
            flushParagraph();
            flushList();
            return;
        }

        const escaped = escapeHtml(line);

        // Heading: ## Title
        const headingMatch = line.match(/^##\s+(.*)$/);
        if (headingMatch) {
            flushParagraph();
            flushList();
            htmlParts.push(`<h3>${renderInlineMarkdown(escapeHtml(headingMatch[1]))}</h3>`);
            return;
        }

        // Unordered list item: - item
        const ulMatch = line.match(/^-\s+(.*)$/);
        if (ulMatch) {
            flushParagraph();
            if (listType !== 'ul') {
                flushList();
                listType = 'ul';
            }
            listBuffer.push(renderInlineMarkdown(escapeHtml(ulMatch[1])));
            return;
        }

        // Ordered list item: 1. item
        const olMatch = line.match(/^\d+\.\s+(.*)$/);
        if (olMatch) {
            flushParagraph();
            if (listType !== 'ol') {
                flushList();
                listType = 'ol';
            }
            listBuffer.push(renderInlineMarkdown(escapeHtml(olMatch[1])));
            return;
        }

        // Regular text line: accumulate into current paragraph
        flushList();
        paragraphBuffer.push(renderInlineMarkdown(escaped));
    });

    flushParagraph();
    flushList();

    return htmlParts.join('');
}
