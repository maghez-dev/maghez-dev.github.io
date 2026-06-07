// Navigation menu toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav__link');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Close menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Active link on scroll
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const link = document.querySelector(`.nav__link[href*="${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            link?.classList.add('active');
        } else {
            link?.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', scrollActive);

// Projects loading
const projectsGrid = document.getElementById('projectsGrid');

// Create project card HTML
function createProjectCard(project) {
    const linksHTML = Object.entries(project.links)
        .map(([type, url]) => {
            let label = type.charAt(0).toUpperCase() + type.slice(1);
            let icon = '🔗';
            
            if (type === 'demo') {
                icon = '▶️';
                label = 'Demo';
            } else if (type === 'github') {
                icon = '💻';
                label = 'GitHub';
            } else if (type === 'gitlab') {
                icon = '🦊';
                label = 'GitLab';
            } else if (type === 'website') {
                icon = '🌐';
                label = 'Website';
            }
            
            return `
                <a href="${url}" class="project__link" target="_blank" rel="noopener noreferrer">
                    <span>${icon}</span>
                    ${label}
                </a>
            `;
        })
        .join('');

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

// Project modal management
let currentProject = null;
let currentGalleryIndex = 0;

const modal = document.getElementById('projectModal');
const modalClose = document.getElementById('modalClose');
const modalOverlay = modal?.querySelector('.modal__overlay');
const galleryTrack = document.getElementById('galleryTrack');
const galleryIndicators = document.getElementById('galleryIndicators');
const galleryPrev = document.getElementById('galleryPrev');
const galleryNext = document.getElementById('galleryNext');
const modalTitle = document.getElementById('modalTitle');
const modalTech = document.getElementById('modalTech');
const modalDescription = document.getElementById('modalDescription');
const modalLinks = document.getElementById('modalLinks');

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

// Open project modal
function openProjectModal(project) {
    currentProject = project;
    currentGalleryIndex = 0;
    
    // Populate modal content
    if (modalTitle) modalTitle.textContent = project.title;
    
    // Tech tags
    if (modalTech) {
        modalTech.innerHTML = project.technologies
            .map(tech => `<span class="tech-tag">${tech}</span>`)
            .join('');
    }
    
    // Description
    if (modalDescription) {
        const description = project.detailedDescription || project.shortDescription;
        modalDescription.innerHTML = description.split('\n').map(p => `<p>${p}</p>`).join('');
    }
    
    // Links
    if (modalLinks) {
        modalLinks.innerHTML = Object.entries(project.links)
            .map(([type, url]) => {
                let label = type.charAt(0).toUpperCase() + type.slice(1);
                let icon = '🔗';
                
                if (type === 'demo') {
                    icon = '▶️';
                    label = 'Demo';
                } else if (type === 'github') {
                    icon = '💻';
                    label = 'GitHub';
                } else if (type === 'gitlab') {
                    icon = '🦊';
                    label = 'GitLab';
                } else if (type === 'website') {
                    icon = '🌐';
                    label = 'Website';
                }
                
                return `
                    <a href="${url}" class="modal__link" target="_blank" rel="noopener noreferrer">
                        <span>${icon}</span>
                        ${label}
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 8.667V12.667C12 13.0203 11.8595 13.3594 11.6095 13.6095C11.3594 13.8595 11.0203 14 10.667 14H3.333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.667V5.333C2 4.97971 2.14048 4.64057 2.39052 4.39052C2.64057 4.14048 2.97971 4 3.333 4H7.333M10 2H14M14 2V6M14 2L6.667 9.333" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </a>
                `;
            })
            .join('');
    }
    
    // Gallery
    if (project.gallery && project.gallery.length > 0) {
        loadGallery(project.gallery);
    }
    
    // Show modal
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

// Load gallery images
function loadGallery(gallery) {
    if (!galleryTrack || !galleryIndicators) return;
    
    // Load images
    galleryTrack.innerHTML = gallery
        .map((item, index) => {
            if (item.type === 'image') {
                return `
                    <div class="gallery__item ${index === 0 ? 'active' : ''}" data-type="image">
                        <img src="${item.url}" alt="Project screenshot ${index + 1}" loading="lazy">
                    </div>
                `;
            }
            if (item.type === 'video') {
                return `
                    <div class="gallery__item ${index === 0 ? 'active' : ''}" data-type="video">
                        <video controls preload="metadata">
                            <source src="${item.url}" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                    </div>
                `;
            }
            return '';
        })
        .join('');
    
    // Load indicators
    galleryIndicators.innerHTML = gallery
        .map((_, index) => `
            <button class="gallery__indicator ${index === 0 ? 'active' : ''}" data-index="${index}" aria-label="Go to image ${index + 1}"></button>
        `)
        .join('');
    
    // Add click listeners to indicators
    const indicators = galleryIndicators.querySelectorAll('.gallery__indicator');
    indicators.forEach(indicator => {
        indicator.addEventListener('click', () => {
            const index = parseInt(indicator.dataset.index);
            goToGalleryImage(index);
        });
    });
    
    // Show/hide navigation buttons
    updateGalleryNavigation();
}

// Navigate gallery
function goToGalleryImage(index) {
    if (!currentProject || !currentProject.gallery) return;
    
    const galleryLength = currentProject.gallery.length;
    currentGalleryIndex = (index + galleryLength) % galleryLength;
    
    // Update images
    const items = galleryTrack?.querySelectorAll('.gallery__item');
    items?.forEach((item, i) => {
        item.classList.toggle('active', i === currentGalleryIndex);
    });
    // Pause any video that is not the active slide
    items?.forEach((item, i) => {
        if (i !== currentGalleryIndex) {
            const video = item.querySelector('video');
            video?.pause();
        }
    });
    
    // Update indicators
    const indicators = galleryIndicators?.querySelectorAll('.gallery__indicator');
    indicators?.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === currentGalleryIndex);
    });
    
    updateGalleryNavigation();
}

// Update navigation buttons visibility
function updateGalleryNavigation() {
    if (!currentProject || !currentProject.gallery) return;
    
    const galleryLength = currentProject.gallery.length;
    
    if (galleryPrev && galleryNext) {
        if (galleryLength <= 1) {
            galleryPrev.style.display = 'none';
            galleryNext.style.display = 'none';
        } else {
            galleryPrev.style.display = 'flex';
            galleryNext.style.display = 'flex';
        }
    }
}

// Close modal
function closeProjectModal() {
    if (modal) {
        // Stop any playing video when closing modal
        const videos = modal.querySelectorAll('video');
        videos.forEach(video => video.pause());
        modal.classList.remove('active');
        document.body.style.overflow = '';
        currentProject = null;
        currentGalleryIndex = 0;
    }
}

// Event listeners for modal
if (modalClose) {
    modalClose.addEventListener('click', closeProjectModal);
}

if (modalOverlay) {
    modalOverlay.addEventListener('click', closeProjectModal);
}

// Gallery navigation
if (galleryPrev) {
    galleryPrev.addEventListener('click', () => {
        goToGalleryImage(currentGalleryIndex - 1);
    });
}

if (galleryNext) {
    galleryNext.addEventListener('click', () => {
        goToGalleryImage(currentGalleryIndex + 1);
    });
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (!modal?.classList.contains('active')) return;
    
    if (e.key === 'Escape') {
        closeProjectModal();
    } else if (e.key === 'ArrowLeft') {
        goToGalleryImage(currentGalleryIndex - 1);
    } else if (e.key === 'ArrowRight') {
        goToGalleryImage(currentGalleryIndex + 1);
    }
});

// Initialize projects on page load
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
});

// Smooth scroll for links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const headerOffset = 70;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Header shadow on scroll
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    }
});

// Intersection observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe sections for animation
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});
