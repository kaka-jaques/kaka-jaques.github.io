let desktopMenu = document.querySelector('.desktop-menu');
let menuLine = document.querySelector('#mobile-menu');
var back = $("#back-to-top");
var displayWid = window.screen.width;

back.click(function() {
  $('html, body').animate({scrollTop:0}, 'slow');
});

$(document).ready(function(){
    setTimeout(function(){
        if(displayWid<1294){
            desktopMenu.style.display = "none";
            menuLine.style.display = "block"
        }else{
            desktopMenu.style.display = "flex";
            menuLine.style.display = "none"
        }
    })    
}, 2000);
