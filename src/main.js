import { header } from './components/Header/header.js'

import { inicarHeaderToggle } from './components/Header/header.js'
import { aboutMe } from './components/AboutMe/abouteme.js'
import { experienceStudies } from './components/Experience/experience.js'
import { renderSkills } from './components/Skills/skills.js'
import { renderProjects } from './Projects/projects.js'
import { renderFooter } from './components/Footer/footer.js'

import './style.css'

const headerElement = header()
document.body.prepend(headerElement)

const aboutMeElement = aboutMe()
document.body.appendChild(aboutMeElement)

inicarHeaderToggle()

const experienceSection = experienceStudies()
document.body.appendChild(experienceSection)

const skillsSection = renderSkills()
document.body.appendChild(skillsSection)

const projectsSection = renderProjects()
document.body.appendChild(projectsSection)

const footerElement = renderFooter()
document.body.appendChild(footerElement)
