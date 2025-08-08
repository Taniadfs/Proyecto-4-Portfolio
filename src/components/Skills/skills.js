import './skills.css'

export function renderSkills() {
  const skills = [
    { name: 'HTML', src: './assets/iconos-skills/html-5.png', level: 90 },
    { name: 'CSS', src: './assets/iconos-skills/css-3.png', level: 80 },
    {
      name: 'JavaScript',
      src: './assets/iconos-skills/secuencia-de-comandos-de-java.png',
      level: 70
    },
    { name: 'React', src: './assets/iconos-skills/react-2.svg', level: 50 },
    { name: 'Python', src: './assets/iconos-skills/piton.png', level: 50 },
    {
      name: 'GitHub',
      src: './assets/iconos-skills/signo-de-github.png',
      level: 80
    }
  ]

  const sectionSkills = document.createElement('section')
  sectionSkills.classList.add('skills-section')

  sectionSkills.innerHTML = `
  <div id="skills-container" class="skills">
<h3 class="skills-title">My Skills</h3>
<div class="skills-card-container">
  </div>
</div>`

  const skillsContainer = sectionSkills.querySelector('.skills-card-container')
  skills.forEach((skill) => {
    const skillElement = document.createElement('div')
    skillElement.classList.add('skill')
    skillElement.innerHTML = `
    <div class="skill-content">
    <img src="${skill.src}" alt="${skill.name}" class="skill-card">
    <div class="level-bar">
    <div class="level-bar-fill" data-level=" ${skill.level}">
    <span class="level-text">${skill.level}</span>
    </div>
    </div>
    </div>`
    skillsContainer.appendChild(skillElement)
  })

  return sectionSkills
}
