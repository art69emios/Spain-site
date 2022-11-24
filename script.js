new WOW().init();


let fleXboxLinkArticles = document.querySelector('.flex-box__link-articles')
let fleXboxLinksInvesting = document.querySelector('.flex-box__links-investing')
let arrow = document.querySelector('.articles-arrow')

fleXboxLinkArticles.addEventListener('click', function(){
   arrow.style.transition = 'all .3s ease'
fleXboxLinksInvesting.classList.toggle('active')

if(fleXboxLinksInvesting.classList.contains('active')){
   arrow.style.transform = 'rotate(-180deg)'
}else{
   arrow.style.transform = 'rotate(0deg)'
}
})




$(document).ready(function(){
   $('.menu__icon').click(function(event){
      $('.menu__icon, .header-block__flex-box').toggleClass('active')
   })
})

let cookie = document.querySelector('.cookie')
let cookieBtn = document.querySelector('.cookie-btn')

cookieBtn.addEventListener('click', function(){
   if(cookieBtn){
      cookie.style.display = 'none  '
   }
})

VANTA.BIRDS({
   el: ".main-content",
   mouseControls: true,
   touchControls: true,
   gyroControls: false,
   scale: 1.00,
   scaleMobile: 1.00,
   backgroundColor: 0xffffff,
   color1: 0x0,
   color2: 0x0,
   birdSize: 0.50,
   wingSpan: 32.00,
   speedLimit: 9.00,
   separation: 35.00,
   alignment: 58.00,
   cohesion: 34.00
 })
 
 
VANTA.BIRDS({
   el: ".offers-for-investors__udemy",
   mouseControls: true,
   touchControls: true,
   gyroControls: false,
   scale: 1.00,
   scaleMobile: 1.00,
   backgroundColor: 0xffffff,
   color1: 0x0,
   color2: 0x0,
   birdSize: 0.50,
   wingSpan: 32.00,
   speedLimit: 9.00,
   separation: 35.00,
   alignment: 58.00,
   cohesion: 34.00
 })

 VANTA.BIRDS({
   el: ".offers-for-investors__coursera",
   mouseControls: true,
   touchControls: true,
   gyroControls: false,
   scale: 1.00,
   scaleMobile: 1.00,
   backgroundColor: 0xffffff,
   color1: 0x0,
   color2: 0x0,
   birdSize: 0.50,
   wingSpan: 32.00,
   speedLimit: 9.00,
   separation: 35.00,
   alignment: 58.00,
   cohesion: 34.00
 })

 VANTA.BIRDS({
   el: ".online-real-estate-investing",
   mouseControls: true,
   touchControls: true,
   gyroControls: false,
   scale: 1.00,
   scaleMobile: 1.00,
   backgroundColor: 0xffffff,
   color1: 0x0,
   color2: 0x0,
   birdSize: 0.50,
   wingSpan: 32.00,
   speedLimit: 9.00,
   separation: 35.00,
   alignment: 58.00,
   cohesion: 34.00
 })