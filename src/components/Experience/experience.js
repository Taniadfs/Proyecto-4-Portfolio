import './experience.css'

export function experienceStudies() {
  const sectionExperienceStudies = document.createElement('section')
  sectionExperienceStudies.classList.add('experience-studies')
  sectionExperienceStudies.id = 'experience'
  sectionExperienceStudies.innerHTML = `
 
<div class="experience-studies_container">
<div class="experience-studies_header">
  <h2 class="experience-studies_title">Experience & Studies</h2>

  <div class="button-arrow">
  <button id="toggle-panel">Studies</button>  
  </div>
  </div>
  
<div id="experience-panel" class= "panel"> 
<p>
I'm currently focused on building my skills through hands-on projects and continuous learning.  
While I don’t have professional experience yet, I’m actively developing real projects to strengthen my portfolio and gain confidence as a developer.
</p>
</div>
  <div id="studies-panel" class="panel panel-hidden">
    <p>
      I'm currently studying a Full Stack Web Development course at <a href="https://www.hackio.com/developer" target="_blank">Rock the code</a>, where I learned HTML, CSS, JavaScript, Github, React and Python.
      Additionally, I have taken courses on Git and GitHub to enhance my version control skills.
    </p>
  </div>
</div>


<div id="skills-container" class="skills">
<h3 class="skills-title">My Skills</h3>
</div>`

  const toggleButton = sectionExperienceStudies.querySelector('#toggle-panel')
  const experiencePanel =
    sectionExperienceStudies.querySelector('#experience-panel')
  const studiesPanel = sectionExperienceStudies.querySelector('#studies-panel')
  toggleButton.addEventListener('click', () => {
    experiencePanel.classList.toggle('panel-hidden')
    studiesPanel.classList.toggle('panel-hidden')

    if (experiencePanel.classList.contains('panel-hidden')) {
      toggleButton.textContent = '← Experience'
    } else {
      toggleButton.textContent = 'Studies →'
    }
  })

  const skills = [
    { name: 'HTML', src: './assets/iconos-skills/html-5.png' },
    { name: 'CSS', src: './assets/iconos-skills/css-3.png' },
    {
      name: 'JavaScript',
      src: './assets/iconos-skills/secuencia-de-comandos-de-java.png'
    },
    { name: 'React', src: './assets/iconos-skills/react-2.svg' },
    { name: 'Python', src: './assets/iconos-skills/piton.png' },
    { name: 'GitHub', src: './assets/iconos-skills/signo-de-github.png' }
  ]

  const skillsContainer =
    sectionExperienceStudies.querySelector('#skills-container')
  skills.forEach((skill) => {
    const skillElement = document.createElement('div')
    skillElement.classList.add('skill')
    skillElement.innerHTML = `<img src="${skill.src}" alt="${skill.name}" class="skill-card">`
    skillsContainer.appendChild(skillElement)
  })

  return sectionExperienceStudies
}
