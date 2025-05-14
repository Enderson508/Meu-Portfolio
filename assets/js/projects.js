// Dados dos Projetos
const projectsData = [
    {
        title: "E-commerce Platform",
        description: "Complete e-commerce solution with shopping cart, checkout and admin panel.",
        technologies: ["React", "Node.js", "MongoDB"],
        image: "assets/images/projects/ecommerce.jpg",
        link: "#",
        github: "#"
    },
    {
        title: "Social Network App",
        description: "Social application with posts, comments and friend system.",
        technologies: ["React", "Firebase", "Redux"],
        image: "assets/images/projects/social.jpg",
        link: "#",
        github: "#"
    },
    {
        title: "Portfolio Website",
        description: "Modern portfolio website with animations and responsive design.",
        technologies: ["HTML5", "CSS3", "JavaScript"],
        image: "assets/images/projects/portfolio.jpg",
        link: "#",
        github: "#"
    },
    {
        title: "Task Management App",
        description: "Productivity application for task management with drag and drop interface.",
        technologies: ["Vue.js", "Express", "PostgreSQL"],
        image: "assets/images/projects/taskapp.jpg",
        link: "#",
        github: "#"
    }
];

// Renderizar Projetos
function renderProjects() {
    const projectsSection = document.getElementById('projects');
    
    if (projectsSection) {
        // Criar título da seção
        const sectionTitle = document.createElement('h2');
        sectionTitle.className = 'section-title reveal';
        sectionTitle.textContent = 'My Projects';
        projectsSection.appendChild(sectionTitle);
        
        // Criar container dos projetos
        const projectsContainer = document.createElement('div');
        projectsContainer.className = 'projects-grid';
        
        // Adicionar cada projeto
        projectsData.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card reveal';
            
            projectCard.innerHTML = `
                <div class="project-image">
                    <img src="${project.image}" alt="${project.title}">
                    <div class="project-overlay">
                        <div class="project-links">
                            <a href="${project.link}" target="_blank" class="project-link">
                                <i class="fas fa-external-link-alt"></i>
                            </a>
                            <a href="${project.github}" target="_blank" class="project-link">
                                <i class="fab fa-github"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="project-info">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="project-tech">
                        ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
                    </div>
                </div>
            `;
            
            projectsContainer.appendChild(projectCard);
        });
        
        projectsSection.appendChild(projectsContainer);
        
        // Ativar animações de revelação
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });
        
        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    }
}

// Inicializar quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', renderProjects);