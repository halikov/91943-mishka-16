var orderBtns = document.querySelector('.order-button');
var popup = document.querySelector('.popup');
var close = popup.querySelector('.close');

orderBtns.addEventListener('click', function(evt) {
  evt.preventDefault();
  popup.classList.toggle('popup--closed');
});

close.addEventListener('click', function(evt) {
  evt.preventDefault();
  popup.classList.add('popup--closed');

  window.addEventListener('keydown', function(evt) {
    if(evt.keycode === 27) {
      evt.preventDefault();
      popup.classList.add('popup--closed')
    }
  })
});
