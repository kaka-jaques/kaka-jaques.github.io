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

var projectTitle = 
[
  {
    title: "Project X",
    description: "Descrição do Projeto X"
  },
  {
    title: "Project Y",
    description: "Descrição do Projeto Y"
  },
  {
    title: "Project Z",
    description: "Descrição do Projeto Z"
  },
  {
    title: "Project A",
    description: "Descrição do Projeto A"
  }
]

document.getElementById("project-title").innerHTML = "<h1 class='title'>" + projectTitle[0].title + "</h1><p class='description'>" + projectTitle[0].description + "</p>"

setInterval(function(){
  if(swiper1.animating == true){
    gsap.to(".project-title", {
      opacity:0,
      duration: 0.5,
      y: -100,
      onComplete: () => {
        document.getElementById("project-title").innerHTML = "<h1 class='title'>" + projectTitle[swiper1.realIndex].title + "</h1><p class='description'>" + projectTitle[swiper1.realIndex].description + "</p>"
        gsap.to(".project-title", {
          opacity:1,
          duration: 0.5,
          y: 0
        })
      }
    })
  }
}, 500)

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