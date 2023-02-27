//INTERNACIONALIZAÇÃO
if(navigator.language === 'en-US' && !window.location.href.includes('us')){
  window.location.href += '/us'
}

//PROGRESS BAR DO CURSO UNINTER
var hoje = Date.now() - Date.UTC(2022,12)
var conclusaoCursoUninter = (hoje*100)/(Date.UTC(2025,6) - Date.UTC(2022,12))

document.querySelector("#progress-bar-uninter").setAttribute("style","width:"+conclusaoCursoUninter+"%; height: 20px")
document.querySelector('#progress-bar-uninter').append(Math.trunc(conclusaoCursoUninter)+'%')

//SINCRONIZAÇÃO DAS ANIMAÇÕES DE XP
var scrollXpItem1 = $("#xp-item1").offset().top + $(window).height();
var scrollXpItem2 = $('#xp-item2').offset().top +  $(window).height() + 200;
var scrollXpItem3 = $('#xp-item3').offset().top + $(window).height() + 400;
var scrollXpTrack1 = $('#xp-track1').offset().top + $(window).height() + 100;
var scrollXpTrack2 = $('#xp-track2').offset().top + $(window).height() + 300;

$(window).scroll(function(){
  if($(window).scrollTop() > (scrollXpItem1 - 200)){
    document.querySelector('#xp-item1').setAttribute('style','display: flex;')
    setTimeout(() => {
      document.querySelector('#xp-track1').setAttribute('style','display: flex;')
      setTimeout(() => {
        if($(window).scrollTop() > (scrollXpItem2 - 300) && $('#xp-track1').height() == 250){
          document.querySelector('#xp-item2').setAttribute('style','display: flex; margin-left: 30px')
          setTimeout(() => {
            document.querySelector('#xp-track2').setAttribute('style','display: flex;')
            setTimeout(() => {
              if($(window).scrollTop() > (scrollXpItem3 - 400) && $('#xp-track2').height() == 250){
                document.querySelector('#xp-item3').setAttribute('style','display: flex;')
              }
            }, 1900);
          }, 1900);
        }
      }, 1900);
    }, 1900);
  }
  if($(window).scrollTop() > (scrollXpItem2 - 300) && $('#xp-track1').height() == 250){
    document.querySelector('#xp-item2').setAttribute('style','display: flex; margin-left: 30px')
    setTimeout(() => {
      document.querySelector('#xp-track2').setAttribute('style','display: flex;')
      setTimeout(() => {
        if($(window).scrollTop() > (scrollXpItem3 - 400) && $('#xp-track2').height() == 250){
          document.querySelector('#xp-item3').setAttribute('style','display: flex;')
        }
      }, 1900);
    }, 1900);
  }
  if($(window).scrollTop() > (scrollXpItem3 - 400) && $('#xp-track2').height() == 250){
    document.querySelector('#xp-item3').setAttribute('style','display: flex;')
  }
})

// TIMER PARA PRÓXIMO CARD
function nextCardTimer() {
  var timerTimeout = setTimeout(() => {
    var timerBtnAnim = new Vivus('timer-btn', {
      type: 'sync', 
      duration: 4600, 
      start: 'autostart'
    });
    timerBtnAnim.stop().reset().play(1);
    swapCards("right")
    initTimer();
  }, 8500);
}


function nextCard(direction){
  // var timerBtnAnim = new Vivus('timer-btn', {
  //   type: 'sync', 
  //   duration: 4600, 
  //   start: 'autostart'
  // });
  // timerBtnAnim.stop().reset().play(1);
  swapCards(direction)
}
            
            const { gsap, imagesLoaded } = window;
            
            //ADICIONANDO ATRIBUTOS CSS COM GSAP
            if(conclusaoCursoUninter >= 100){
              conclusaoCursoUninter = 100
              gsap.set(document.querySelector(".progress-bar"),{
                "border-top-right-radius":"5px",
                "border-bottom-right-radius":"5px"
              })
            }

            const buttons = {
              prev: document.querySelector(".btn--left"),
              next: document.querySelector(".btn--right") 
            };
            
            const cardsContainerEl = document.querySelector(".cards__wrapper");
            
            const cardInfosContainerEl = document.querySelector(".info__wrapper");
            
            buttons.next.addEventListener("click", () => nextCard("right"));
            
            buttons.prev.addEventListener("click", () => nextCard("left"));
            
            function swapCards(direction) {
              const currentCardEl = cardsContainerEl.querySelector(".current--card");
              const previousCardEl = cardsContainerEl.querySelector(".previous--card");
              const nextCardEl = cardsContainerEl.querySelector(".next--card");
            
              changeInfo(direction);
              swapCardsClass();
            
              removeCardEvents(currentCardEl);
            
              function swapCardsClass() {
                currentCardEl.classList.remove("current--card");
                previousCardEl.classList.remove("previous--card");
                nextCardEl.classList.remove("next--card");
            
                currentCardEl.style.zIndex = "50";
            
                if (direction === "right") {
                  previousCardEl.style.zIndex = "20";
                  nextCardEl.style.zIndex = "30";
            
                  currentCardEl.classList.add("previous--card");
                  previousCardEl.classList.add("next--card");
                  nextCardEl.classList.add("current--card");
                } else if (direction === "left") {
                  previousCardEl.style.zIndex = "30";
                  nextCardEl.style.zIndex = "20";
            
                  currentCardEl.classList.add("next--card");
                  previousCardEl.classList.add("current--card");
                  nextCardEl.classList.add("previous--card");
            
                }
              }
            }
            
            function changeInfo(direction) {
              let currentInfoEl = cardInfosContainerEl.querySelector(".current--info");
              let previousInfoEl = cardInfosContainerEl.querySelector(".previous--info");
              let nextInfoEl = cardInfosContainerEl.querySelector(".next--info");
            
              gsap.timeline().
              to([buttons.prev, buttons.next], {
                duration: 0.2,
                opacity: 0.5,
                pointerEvents: "none" }).
            
              to(
              currentInfoEl.querySelectorAll(".text"),
              {
                duration: 0.4,
                stagger: 0.1,
                translateY: "-120px",
                opacity: 0 },
            
              "-=").
            
              call(() => {
                swapInfosClass(direction);
              }).
              call(() => initCardEvents()).
              fromTo(
              direction === "right" ?
              nextInfoEl.querySelectorAll(".text") :
              previousInfoEl.querySelectorAll(".text"),
              {
                opacity: 0,
                translateY: "40px" },
            
              {
                duration: 0.4,
                stagger: 0.1,
                translateY: "0px",
                opacity: 1 }).
            
            
              to([buttons.prev, buttons.next], {
                duration: 0.2,
                opacity: 1,
                pointerEvents: "all" });
            
            
              function swapInfosClass() {
                currentInfoEl.classList.remove("current--info");
                previousInfoEl.classList.remove("previous--info");
                nextInfoEl.classList.remove("next--info");
            
                if (direction === "right") {
                  currentInfoEl.classList.add("previous--info");
                  nextInfoEl.classList.add("current--info");
                  previousInfoEl.classList.add("next--info");
                } else if (direction === "left") {
                  currentInfoEl.classList.add("next--info");
                  nextInfoEl.classList.add("previous--info");
                  previousInfoEl.classList.add("current--info");
                }
              }
            }
            
            function updateCard(e) {
              const card = e.currentTarget;
              const box = card.getBoundingClientRect();
              const centerPosition = {
                x: box.left + box.width / 2,
                y: box.top + box.height / 2 };
            
              let angle = Math.atan2(e.pageX - centerPosition.x, 0) * (35 / Math.PI);
              gsap.set(card, {
                "--current-card-rotation-offset": `${angle}deg` });
            
              const currentInfoEl = cardInfosContainerEl.querySelector(".current--info");
              gsap.set(currentInfoEl, {
                rotateY: `${angle}deg` });
            
            }
            
            function resetCardTransforms(e) {
              const card = e.currentTarget;
              const currentInfoEl = cardInfosContainerEl.querySelector(".current--info");
              gsap.set(card, {
                "--current-card-rotation-offset": 0 });
            
              gsap.set(currentInfoEl, {
                rotateY: 0 });
            
            }
            
            function initCardEvents() {
              const currentCardEl = cardsContainerEl.querySelector(".current--card");
              currentCardEl.addEventListener("pointermove", updateCard);
              currentCardEl.addEventListener("pointerout", e => {
                resetCardTransforms(e);
              });
            }
            
            initCardEvents();
            
            function removeCardEvents(card) {
              card.removeEventListener("pointermove", updateCard);
            }
            
            function init() {
            
              let tl = gsap.timeline();
            
              tl.to(cardsContainerEl.children, {
                delay: 0.15,
                duration: 0.5,
                stagger: {
                  ease: "power4.inOut",
                  from: "right",
                  amount: 0.1 },
            
                "--card-translateY-offset": "0%" }).
            
              to(cardInfosContainerEl.querySelector(".current--info").querySelectorAll(".text"), {
                delay: 0.5,
                duration: 0.4,
                stagger: 0.1,
                opacity: 1,
                translateY: 0 }).
            
              to(
              [buttons.prev, buttons.next],
              {
                duration: 0.4,
                opacity: 1,
                pointerEvents: "all" },
            
              "-=0.4");
            
            }
            
            const waitForImages = () => {
              const images = [...document.querySelectorAll("img")];
              const totalImages = images.length;
              let loadedImages = 0;
              const loaderEl = document.querySelector(".loader span");
            
              gsap.set(cardsContainerEl.children, {
                "--card-translateY-offset": "100vh" });
            
              gsap.set(cardInfosContainerEl.querySelector(".current--info").querySelectorAll(".text"), {
                translateY: "40px",
                opacity: 0 });
            
              gsap.set([buttons.prev, buttons.next], {
                pointerEvents: "none",
                opacity: "0" });
            
            
              images.forEach(image => {
                imagesLoaded(image, instance => {
                  if (instance.isComplete) {
                    loadedImages++;
                    let loadProgress = loadedImages / totalImages;
            
                    gsap.to(loaderEl, {
                      duration: 1,
                      scaleX: loadProgress,
                      backgroundColor: `hsl(${loadProgress * 120}, 100%, 50%` });
            
            
                    if (totalImages == loadedImages) {
                      gsap.timeline().
                      to(".loading__wrapper", {
                        duration: 0.8,
                        opacity: 0,
                        pointerEvents: "none" }).
            
                      call(() => init());
                    }
                  }
                });
              });
            };
            
            waitForImages();

            //ABRIR LINK DOS PROJETOS CLICANDO NOS CARDS
            function openTab(link){
                window.open(link, '_blank')
            }

            function initTimer() {
              nextCardTimer();
            }

            initTimer();