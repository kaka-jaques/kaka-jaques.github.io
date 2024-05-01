//INTERNACIONALIZAÇÃO
if (navigator.language === 'en-US' && !window.location.href.includes('us')) {
  window.location.href += '/us'
}

window.addEventListener('load', function () {
  const AllImages = document.querySelectorAll('img');

  function verificaLoadImg() {
    let imagensCarregadas = true;

    AllImages.forEach((img) => {
      if (!img.complete && !img.naturalHeight) {
        imagensCarregadas = false;
        return
      }
    })

    if (imagensCarregadas) {
      enableOverflow();
      swiper1.slideNext()
    }

  }

  AllImages.forEach((img) => {
    img.addEventListener('load', verificaLoadImg)
  })

  verificaLoadImg();
})

//INICIANDO O SITE COM SCROLL TRAVADO
document.body.style.overflow = 'hidden';

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
    delay: 6500
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

setInterval(function () {

  if (swiper1.animating == true && transitioning == false) {
    transitioning = true;
    bar.animate(0.0, {duration: 300});
    gsap.to(".project-title", {
      opacity: 0,
      duration: 0.5,
      y: -100,
      onComplete: () => {
        document.getElementById("project-title").innerHTML = "<h1 class='title'>" + projectTitle[swiper1.realIndex].title + "</h1><p class='description'>" + projectTitle[swiper1.realIndex].description + "</p>";
        bar.animate(1);
        gsap.to(".project-title", {
          opacity: 1,
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
const divCircle = document.querySelector('#container');
const divPrev = document.querySelector('.swiper-button-prev');
const divNext = document.querySelector('.swiper-button-next');

function atualizaPosicao() {
  mainPos = divSwiper.getBoundingClientRect();

  divTitle.style.left = (mainPos.left * 2.05) + window.scrollX + 'px';
  divTitle.style.top = mainPos.top + window.scrollY + 150 + 'px';
  divCircle.style.top = mainPos.top + window.scrollY + 220 + 'px';
  divPrev.style.top = mainPos.top + window.scrollY + 257 + 'px';
  divNext.style.top = mainPos.top + window.scrollY + 257 + 'px';

}

window.addEventListener('scroll', atualizaPosicao);
window.addEventListener('resize', atualizaPosicao);

atualizaPosicao();

var bar = new ProgressBar.Circle(container, {
  strokeWidth: 5,
  easing: 'easeInOut',
  duration: 7000,
  color: '#eee',
  svgStyle: null
});

bar.animate(1)

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

let c = 0;
function toggle() {
  c % 2 == 0 ? day() : night();
  c++;
}

function night() {
  document.querySelector(".cont_circle").className =
    "cont_circle cont_circle_noche";
    gsap.to('main',{
      duration: 1,
      backgroundColor: '#343a40'
    })
    gsap.to('.anim-text',{
      duration: 1,
      color: 'white'
    })
    gsap.to('.img-me',{
      duration: 1,
      boxShadow: '-7px 7px 7px #3685b9'
    })
    bar.path.setAttribute('stroke', 'white')
}

function day() {
  document.querySelector(".cont_circle").className =
    "cont_circle cont_circle_dia";
    gsap.to('main',{
      duration: 1,
      backgroundColor: '#e1e0e0'
    });
    gsap.to('.img-me',{
      duration: 1,
      boxShadow: '-10px 10px 7px #343a40'
    })
    gsap.to('.anim-text',{
      duration: 1,
      color: 'black'
    });

    bar.path.setAttribute('stroke', 'black')
}