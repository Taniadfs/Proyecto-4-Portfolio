import './experience.css'

export function experienceStudies() {
  const sectionExperienceStudies = document.createElement('section')
  sectionExperienceStudies.classList.add('experience-studies')
  sectionExperienceStudies.innerHTML = `
 
<div class="experience-studies_container">
  <h2 class="experience-studies_title">Experiencia y Estudios</h2>

  <div class="botones-toggle">
  <button id="btn-experience">Experiencia</button>  
  <button id="btn-estudios">Estudios</button>
  </div>
  

<div id="experience-panel" class="panel">
 </div>
<div id="estudios-panel" class= "panel panel-hidden"> </div>
</div>`

  const btnExperience =
    sectionExperienceStudies.querySelector('#btn-experience')
  const btnEstudios = sectionExperienceStudies.querySelector('#btn-estudios')
  const experiencePanel =
    sectionExperienceStudies.querySelector('#experience-panel')
  const estudiosPanel =
    sectionExperienceStudies.querySelector('#estudios-panel')

  btnExperience.addEventListener('click', () => {
    experiencePanel.classList.remove('panel-hidden')
    estudiosPanel.classList.add('panel-hidden')
  })

  btnEstudios.addEventListener('click', () => {
    estudiosPanel.classList.remove('panel-hidden')
    experiencePanel.classList.add('panel-hidden')
  })
  return sectionExperienceStudies
}
