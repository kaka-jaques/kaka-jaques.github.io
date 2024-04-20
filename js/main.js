//INTERNACIONALIZAÇÃO
if (navigator.language === 'en-US' && !window.location.href.includes('us')) {
  window.location.href += '/us'
}

//INICIANDO O SITE COM SCROLL TRAVADO
document.body.style.overflow = 'auto';

//PROGRESS BAR DO CURSO UNINTER
var hoje = Date.now() - Date.UTC(2022, 12)
var conclusaoCursoUninter = (hoje * 100) / (Date.UTC(2025, 6) - Date.UTC(2022, 12))

var swiper1 = new Swiper(".projectSwiper", {
  effect: "coverflow",
      grabCursor: true,
      loop: true,
      centeredSlides: true,
      slidesPerView: "3",
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      autoplay: {
        delay: 4000
      },
      speed: 900,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
})

// var bar = new ProgressBar.Circle(container, {
//   strokeWidth: 5,
//   easing: 'easeInOut',
//   duration: 8400,
//   color: '#eee',
//   trailColor: '#212529',
//   trailWidth: 5,
//   svgStyle: null
// });

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