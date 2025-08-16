import './projects.css'

export function renderProjects() {
  const projectsSection = document.createElement('section')
  projectsSection.id = 'projects'
  projectsSection.className = 'projects-section'

  projectsSection.innerHTML = `
    <div class="projects-container">
      <h2 class="project-title">Projects</h2>
      <p class="projects-subtitle">Some things I’ve been cooking so far</p>
      <div class="projects-container-grid" id="projects-grid"></div>
    </div>
  `

  function ProjectCard({ title, img, alt = title, description, url }) {
    const card = document.createElement('article')
    card.className = 'project-item'
    card.innerHTML = `
    <img class="project-image" src="${img}" alt="${alt}" loading="lazy">
    <h3 class="project-name">${title}</h3>
    <p class="project-description">${description}</p>
    <a class="project-button" href="${url}" target="_blank" rel="noopener noreferrer">
      View Project
    </a>
  `
    return card
  }

  const PROJECTS = [
    {
      title: 'Web JIMMUSES',
      img: '/assets/fotos projects/Landin page .png',
      description: 'Página web para Jimmuses.',
      url: 'https://spiffy-dango-5cc085.netlify.app/'
    },
    {
      title: 'Tienda de filtros',
      img: '/assets/fotos projects/WEB JIMMUSES.png',
      description: 'Tienda de filtros para Jimmuses',
      url: 'https://delightful-pony-695275.netlify.app/'
    },
    {
      title: 'App Inspinterest',
      img: '/assets/fotos projects/Proyecto inpisterest.png',
      description: 'Réplica de una página tipo Pinterest',
      url: 'https://inspinterest.netlify.app/'
    }
  ]

  const grid = projectsSection.querySelector('#projects-grid')
  grid.replaceChildren(...PROJECTS.map(ProjectCard))

  return projectsSection
}
