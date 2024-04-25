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
    title: "Sistema TMS",
    description: "Projeto de apresentação desenvolvido para o Curso Entra21 da Proway. O sistema tem as funcionalidades de login com base na função, cotação e gerenciamento de fretes com localizações reais (Stacks: Java, SQL, Angular)",
    link: "https://github.com/kaka-jaques/Project_TMS_Fullstack_Entra21"
  },
  {
    title: "Money Conversor App",
    description: "Aplicativo Android de conversão de moedas (US$ x R$) com atualização da moeda em tempo real. (Stacks: Java - Android)",
    link: "https://github.com/kaka-jaques/moneyconversor_app_udemy_course"
  },
  {
    title: "Projeto SCCH",
    description: "(Em Desenvolvimento)Projeto extensionista do Curso de Análise e Desenvolvimento de Sistemas da UNINTER. O sistema tem como base informar as melhoras peças com custo x benefício para o cliente dependendo de sua necessidade. (Stacks: Java, SQL, Angular)",
    link: "https://github.com/kaka-jaques/UNINTER_SCCH_Project"
  },
  {
    title: "Automatizer Backup",
    description: "Automação para realizar backup em rede ou localmente dos arquivos no PC desejado. (Stacks: Batchfile)",
    link: "https://github.com/kaka-jaques/automatizer-backup"
  },
  {
    title: "Nadalini Website",
    description: "Website desenvolvido para a empresa Nadalini Representações com API própria E aplicativo para gerenciar lançamento de promoções no site. (Stacks: Java, SQL, Angular, HTML, CSS, JavaScript, DevOps)",
    link: "https://nadalini.com.br"
  },
  {
    title: "GM Autocenter Website",
    description: "Website desenvolvido para a empresa GM Autocenter apenas para fins informativos. (Stacks: HTML, CSS, JavaScript, DevOps)",
    link: "https://gmautocenter.com.br"
  },
  {
    title: "Prediletus Website",
    description: "(Em negociação) Website informativo em negociação para a empresa Prediletus. (Stacks: HTML, CSS, JavaScript, DevOps)",
    link: "https://prediletus.com.br"
  }
]

document.getElementById('project-title').addEventListener('click', () => {
  window.open(projectTitle[swiper1.realIndex].link, '_blank')
})

document.getElementById("project-title").innerHTML = "<div class='title'><h1>" + projectTitle[0].title + "</h1></div><div class='description'><p>" + projectTitle[0].description + "</p></div>"

let transitioning = false;

setInterval(function(){

  if(swiper1.animating == true && transitioning == false){
    transitioning = true;
    gsap.to(".project-title", {
      opacity:0,
      duration: 0.5,
      y: -100,
      onComplete: () => {
        document.getElementById("project-title").innerHTML = "<h1 class='title'>" + projectTitle[swiper1.realIndex].title + "</h1><p class='description'>" + projectTitle[swiper1.realIndex].description + "</p>"
        gsap.to(".project-title", {
          opacity:1,
          duration: 0.5,
          y: 0,
          onComplete: () => {
            transitioning = false
          }
        })
      }
    })
  }
}, 200)

const divSwiper = document.querySelector('.projectSwiper');
const divTitle = document.querySelector('.project-title');

function atualizaPosicao() {
  mainPos = divSwiper.getBoundingClientRect();

  divTitle.style.left = (mainPos.left*2.05)+window.scrollX + 'px';
  divTitle.style.top = mainPos.top+window.scrollY+150 + 'px';

}

window.addEventListener('scroll', atualizaPosicao);
window.addEventListener('resize', atualizaPosicao);

atualizaPosicao();

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