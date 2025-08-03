import './header.css'

export function header() {
  const header = document.createElement('header')
  header.classList.add('header')
  header.id = 'home'
  header.innerHTML = `
  <div class="header-container">
  <div class="header-info">
  <h1>Tania D'Angelo</h1>
    <p>"Cooking things on internet"</p>

  </div>
  <button class="hamburger" aria-label="Open menu">
      ☰
    </button>
  <nav class="nav-menu">
  <ul>
         <li><a href= "#home">Home</a></li>
        <li><a href= "#aboutme">About me</a></li>
        <li><a href= "#experience">Experience/Studies</a></li>
       <li><a href= "#skills">Skills</a></li>
       <li><a href= "#projects">Projects</a></li>
       <li><a href= "#contact">Contact</a></li>
  </ul>
  </nav>  
  </div>`

  return header
}
export function inicarHeaderToggle() {
  const hamburger = document.querySelector('.hamburger')
  const navMenu = document.querySelector('.nav-menu')

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active')
    hamburger.setAttribute(
      'aria-label',
      navMenu.classList.contains('active') ? 'Close menu' : 'Open menu'
    )
  })

  document.addEventListener('click', (event) => {
    if (!navMenu.contains(event.target) && !hamburger.contains(event.target)) {
      navMenu.classList.remove('active')
      hamburger.setAttribute('aria-label', 'Open menu')
    }
  })
}
