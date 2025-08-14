import './projects.css'

export function renderProjects() {
  const projectsSection = document.createElement('section')
  projectsSection.id = 'projects'
  projectsSection.classList.add('projects-section')

  projectsSection.innerHTML = `
<div class="projects-container">
  <h2 class="project-title">Projects</h2>
    <p class="projects-subtitle">Some things I’ve been cooking so far</p>
    <div class="projects-container-grid">
      <div class="project-item">
      <img src ="" alt="Project 1" class="project-image">
        <h3>Project 1</h3>
        <p class="project-description">Description of project 1.</p>
        <a hrf="#" class="project-button">View Project</a>
      </div>
      <div class="project-item">
      <img src ="" alt="Project 1" class="project-image">
        <h3>Project 2</h3>
        <p>Description of project 2.</p>
        <a hrf="#" class="project-button">View Project</a>
      </div>
      <div class="project-item">
      <img src ="" alt="Project 1" class="project-image">
        <h3>Project 3</h3>
        <p>Description of project 3.</p>
        <a hrf="#" class="project-button">View Project</a>
      </div>
    </div>
  </div>
  `

  return projectsSection
}
