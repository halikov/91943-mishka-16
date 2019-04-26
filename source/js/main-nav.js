var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--no-js');

navToggle.addEventListener('click', function(evt) {
  evt.preventDefault();
  navMain.classList.toggle('main-nav--closed');
});
