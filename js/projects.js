/**
 * projects.js
 * -----------
 * Renders the project cards grid on the homepage from `projectsData`
 * (see projects-data.js) and wires up clicks to open the project modal
 * (implemented in modal.js).
 */

const projectsGrid = document.getElementById('projectsGrid');

/**
 * Returns the icon/label metadata for a given link type.
 * Centralized here so both the project card and the modal use the
 * exact same mapping (avoids duplicated logic).
 * @param {string} type - e.g. 'github', 'gitlab', 'website', 'demo'
 * @returns {{icon: string, label: string}}
 */
function getLinkMeta(type) {
    const defaultLabel = type.charAt(0).toUpperCase() + type.slice(1);

    const map = {
        demo: { icon: '▶️', label: 'Demo' },
        github: { icon: '💻', label: 'GitHub' },
        gitlab: { icon: '🦊', label: 'GitLab' },
        website: { icon: '🌐', label: 'Website' },
    };

    return map[type] || { icon: '🔗', label: defaultLabel };
}

/**
 * Builds the HTML markup for a project's link buttons.
 * @param {Record<string, string>} links
 * @param {string} linkClass - CSS class to apply to each <a> element
 * @returns {string}
 */
function renderLinks(links, linkClass) {
    return Object.entries(links)
        .map(([type, url]) => {
            const { icon, label } = getLinkMeta(type);
            return `
                <a href="${url}" class="${linkClass}" target="_blank" rel="noopener noreferrer">
                    <span>${icon}</span>
                    ${label}
                </a>
            `;
        })
        .join('');
}

// Create project card HTML
function createProjectCard(project) {
    const linksHTML = renderLinks(project.links, 'project__link');

    const techTagsHTML = project.technologies
        .map(tech => `<span class="tech-tag">${tech}</span>`)
        .join('');

    const thumbnail = project.projectThumbnail || (project.gallery?.find(item => item.type === 'image')?.url) || 'assets/images/projects/placeholder.jpg';

    return `
        <article class="project-card" data-project-id="${project.id}">
            <div class="project__image">
                <img src="${thumbnail}" alt="${project.title} thumbnail" loading="lazy">
            </div>
            <div class="project__content">
                <h3 class="project__title">${project.title}</h3>
                <p class="project__description">${project.shortDescription}</p>
                <div class="project__tech">
                    ${techTagsHTML}
                </div>
                <div class="project__links">
                    ${linksHTML}
                </div>
            </div>
            <div class="project__overlay">
                <span class="project__view-more">More details</span>
            </div>
        </article>
    `;
}

// Load projects on page load
function loadProjects() {
    if (projectsGrid && typeof projectsData !== 'undefined') {
        projectsGrid.innerHTML = projectsData
            .map(project => createProjectCard(project))
            .join('');

        // Add click event listeners to project cards
        addProjectCardListeners();
    }
}

// Add click listeners to project cards
function addProjectCardListeners() {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('click', (e) => {
            // Prevent opening modal if clicking on external links
            if (e.target.closest('.project__link')) {
                e.stopPropagation();
                return;
            }

            const projectId = parseInt(card.dataset.projectId);
            const project = projectsData.find(p => p.id === projectId);
            if (project) {
                openProjectModal(project);
            }
        });

        // Prevent links from opening modal
        const links = card.querySelectorAll('.project__link');
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.stopPropagation();
            });
        });
    });
}
