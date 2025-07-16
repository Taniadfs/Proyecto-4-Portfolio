import './aboutme.css'

export function aboutMe() {
  const aboutMe = document.createElement('section')
  aboutMe.classList.add('about-me')
  aboutMe.innerHTML = `
  <div class="about-me-container">
  <div class="about-me-info">
    <h2>About Me</h2>

    <p>Hi, I'm Tania D'Angelo — a web developer and designer driven by creativity and curiosity. I love crafting intuitive, engaging digital experiences that not only look great but feel seamless to use. Always eager to explore new technologies, I’m on a continuous journey of learning and growth in the ever-evolving world of web development.</p>

    <p>In my free time, you'll find me surfing or staying active. I'm also passionate about books and cooking — and above all, about romanticizing everything I do. I'm always seeking new challenges that help me grow both personally and professionally.</p>
    <p>Feel free to connect with me on social media or check out my projects on GitHub!</p>
  </div>
 <div class="about-me-img">
    <img src="/assets/foto-perfil-about-me.png" alt="Tania D'Angelo" class="profile-image">
        </div>

  </div>`

  return aboutMe
}
