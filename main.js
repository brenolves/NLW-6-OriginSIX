// Abre e fecha o menu quando clicar no icone: hamburguer e x //
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

// Quando clicar em um item do menu, esconder o menu. //
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

// Mudar o header da página quando der scroll //
const header = document.querySelector('#header')
const logo = document.querySelector('#header a.logo')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    // Scroll é maior que a altura do header
    header.classList.add('scroll')
    logo.classList.add('logo-alt')
    backToTopButton.classList.add('show')
    //links.classList.add('scroll')
  } else {
    // Menor que a altura do header
    header.classList.remove('scroll')
    logo.classList.remove('logo-alt')
    backToTopButton.classList.remove('show')
    //links.classList.remove('scroll')
  }
}

// Testimonials Carousel Slider Swiper //

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

// ScrollReveal - Mostrar elementos ao dar scroll na página. //
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `
  #home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links,
  footer .brand, footer .social
  `,
  { interval: 100 }
)

// Botão para voltar pro topo //
const backToTopButton = document.querySelector('.back-to-top')

function BackToTop() {
  const home = document.querySelector('#home')
  const homeHeight = home.offsetHeight

  if (window.scrollY >= homeHeight) {
    // Scroll é maior que a altura da home
    backToTopButton.classList.add('show')
  } else {
    // Menor que a altura da home
    backToTopButton.classList.remove('show')
  }
}

// Active menu referring to the current section //
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

// When Scrolling //
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  BackToTop()
  activateMenuAtCurrentSection()
})
