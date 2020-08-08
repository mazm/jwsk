// All imports in this file will be compiled into vendors.js file.
//
// You can use any module syntax
$(document).ready(() => {
  $('.bxslider').bxSlider({
    controls: false,
    auto: true,
    pause: 5000,
  });
  // var burger = document.querySelector('.burger-container'),
  //     header = document.querySelector('.header');
  $('.burger-container').on('click', function() {
      $('.header').toggleClass('menu-opened');
  })
  // burger.onclick = function() {
  //   header.classList.toggle('menu-opened');
  // };
});
