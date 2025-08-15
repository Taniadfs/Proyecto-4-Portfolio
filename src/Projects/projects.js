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
      <img src ="./assets/fotos projects/Landin page .png" alt="Project 1" class="project-image">
        <h3>Landing Page</h3>
        <p class="project-description">Landing page para la marca de joyas Jimmuses</p>
        <a href="https://spiffy-dango-5cc085.netlify.app/" target="_blank" rel="noopener noreferrer" class="project-button">View Project</a>
      </div>
      <div class="project-item">
      <img src ="./assets/fotos projects/WEB JIMMUSES.png" alt="Project 2" class="project-image">
        <h3>Web JIMMUSES</h3>
        <p class="project-description">Web para la marca de joyas Jimmuses</p>
        <a href="https://delightful-pony-695275.netlify.app/" target="_blank" rel="noopener noreferrer" class="project-button">View Project</a>
      </div>
      <div class="project-item">
      <img src ="./assets/fotos projects/Proyecto inpisterest.png" alt="Project 3" class="project-image">
        <h3>App Inspinterest</h3>
        <p class="project-description">Replica de una pagina App como Pinterest</p>
        <a href="https://inspinterest.netlify.app/" target="_blank" rel="noopener noreferrer" class="project-button">View Project</a>
      </div>
    </div>
  </div>
  `

  return projectsSection
}
