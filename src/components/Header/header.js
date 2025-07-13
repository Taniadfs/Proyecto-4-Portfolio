export function header() {
  const header = document.createElement('header')
  header.classList.add('header')
  header.innerHTML = `
  <div class="header-container">
  <h1>Tania D'Angelo</h1>
  <nav>
  <ul>
 <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
  </ul>
  </nav>
  </div>`

  return header
}
