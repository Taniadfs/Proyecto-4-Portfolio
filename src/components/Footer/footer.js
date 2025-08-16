import './footer.css'

export function renderFooter() {
  const footer = document.createElement('footer')
  footer.className = 'site-footer'
  footer.id = 'contact'

  const wrap = document.createElement('div')
  wrap.className = 'footer-container'

  const title = document.createElement('h3')
  title.className = 'footer-title'
  title.textContent = 'Contact me'

  const btn = document.createElement('a')
  btn.className = 'contact-cta'
  btn.setAttribute('aria-label', 'Send email to Tania D’Angelo')

  const TO = 't.dangelofonfria@gmail.com'
  const SUBJECT = encodeURIComponent('Hi Tania — project inquiry')
  const BODY = encodeURIComponent(
    `Hi Tania,

I’d love to talk to you about a project.

Thanks,`
  )

  btn.href = `mailto:${TO}?subject=${SUBJECT}&body=${BODY}`
  btn.textContent = 'Email me'

  const credit = document.createElement('small')
  credit.className = 'footer-credit'
  credit.textContent = `© ${new Date().getFullYear()} Tania D’Angelo`

  wrap.append(title, btn, credit)
  footer.append(wrap)
  return footer
}
