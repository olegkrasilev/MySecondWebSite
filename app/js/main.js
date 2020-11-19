(function() {
  'use strict';
})();




// 
$(function () {

  $('input, select').styler();

});


//  BurgerMenu CodePen
(function () {
  var body = document.body;
  var burgerMenu = document.getElementsByClassName('b-menu')[0];
  var burgerContain = document.getElementsByClassName('b-container')[0];
  var burgerNav = document.getElementsByClassName('b-nav')[0];

  burgerMenu.addEventListener('click', function toggleClasses() {
    [body, burgerContain, burgerNav].forEach(function (el) {
      el.classList.toggle('open');
    });
  }, false);
})();

//  Подключаем Mixitup
$(function () {


  var mixer = mixitup('.catalog__items');

});

