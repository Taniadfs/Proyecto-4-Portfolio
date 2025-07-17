import { header } from './components/Header/header.js'

import { inicarHeaderToggle } from './components/Header/header.js'
import { aboutMe } from './components/AboutMe/abouteme.js'

import './style.css'

const headerElement = header()
document.body.prepend(headerElement)

const aboutMeElement = aboutMe()
document.body.appendChild(aboutMeElement)

inicarHeaderToggle()
