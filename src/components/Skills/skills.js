// src/components/Skills/skills.js
import './skills.css'

export function renderSkills() {
  const skills = [
    { name: 'HTML', src: './assets/iconos-skills/html-5.png' },
    { name: 'CSS', src: './assets/iconos-skills/css-3.png' },
    {
      name: 'JavaScript',
      src: './assets/iconos-skills/secuencia-de-comandos-de-java.png'
    },
    { name: 'React', src: './assets/iconos-skills/react-2.svg' },
    { name: 'Python', src: './assets/iconos-skills/piton.png' },
    {
      name: 'GitHub',
      src: './assets/iconos-skills/signo-de-github.png'
    }
  ]

  const sectionSkills = document.createElement('section')
  sectionSkills.classList.add('skills-section')
  sectionSkills.id = 'skills'

  sectionSkills.innerHTML = `
    <div id="skills-container" class="skills">
      <h3 class="skills-title">My Skills</h3>
      <div class="skills-card-container"></div>
    </div>
  `

  const skillsContainer = sectionSkills.querySelector('.skills-card-container')

  function SkillCard({ name, src }) {
    const elementCard = document.createElement('div')
    elementCard.classList.add('skill')
    elementCard.innerHTML = `
      <div class="skill-content">
        <img src="${src}" alt="${name}" class="skill-card" loading="lazy">
      </div>
    `
    return elementCard
  }

  skillsContainer.replaceChildren(...skills.map(SkillCard))

  return sectionSkills
}
