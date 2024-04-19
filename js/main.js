//INTERNACIONALIZAÇÃO
if (navigator.language === 'en-US' && !window.location.href.includes('us')) {
  window.location.href += '/us'
}

//INICIANDO O SITE COM SCROLL TRAVADO
document.body.style.overflow = 'auto';

//PROGRESS BAR DO CURSO UNINTER
var hoje = Date.now() - Date.UTC(2022, 12)
var conclusaoCursoUninter = (hoje * 100) / (Date.UTC(2025, 6) - Date.UTC(2022, 12))

document.querySelector("#progress-bar-uninter").setAttribute("style", "width:" + conclusaoCursoUninter + "%; height: 20px")
document.querySelector('#progress-bar-uninter').append(Math.trunc(conclusaoCursoUninter) + '%')

const swiper = new Swiper(".projectSwiper", {
  effect: converflow,
  grabcursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect:{
    rotate: 50,
    strecth: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true
  },
  navigation:{
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
})

var bar = new ProgressBar.Circle(container, {
  strokeWidth: 5,
  easing: 'easeInOut',
  duration: 8400,
  color: '#eee',
  trailColor: '#212529',
  trailWidth: 5,
  svgStyle: null
});


const { gsap, imagesLoaded } = window;

//ADICIONANDO ATRIBUTOS CSS COM GSAP
if (conclusaoCursoUninter >= 100) {
  conclusaoCursoUninter = 100
  gsap.set(document.querySelector(".progress-bar"), {
    "border-top-right-radius": "5px",
    "border-bottom-right-radius": "5px"
  })
}

//ATIVAR SCROLL NOVAMENTE
function enableOverflow() {
  document.body.style.overflow = 'auto';
  gsap.to(".loader-background", {
    duration: 1,
    opacity: 0,
    onComplete: () => {
      document.querySelector(".loader-background").remove();
    }
  })
}