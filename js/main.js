let desktopMenu = document.querySelector('.desktop-menu');
let menuLine = document.querySelector('.line');
var back = $("#back-to-top");
var displayWid = window.screen.width;

back.click(function() {
  $('html, body').animate({scrollTop:0}, 'slow');
});

$(document).ready(function(){
    setTimeout(function(){
        if(displayWid<1143){
            desktopMenu.style.display = "none";
            menuLine.style.display = "flex"
        }
    })    
}, 2000);
