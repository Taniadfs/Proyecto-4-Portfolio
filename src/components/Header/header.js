import './header.css'

export function header() {
  const header = document.createElement('header')
  header.classList.add('header')
  header.innerHTML = `
  <div class="header-container">
  <div class="header-info">
  <h1>Tania D'Angelo</h1>
  <p>"Cooking things on internet"</p>
  </div>
  <nav>
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
