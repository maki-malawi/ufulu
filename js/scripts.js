document.addEventListener('DOMContentLoaded', function () {
  bulmaCarousel.attach('#slider', {
    slidesToScroll: 1,
    slidesToShow: 3,
    infinite: true,
  });
  let burger = document.querySelector('.burger');
  let navbar = document.querySelector('.navbar-menu');
  burger.addEventListener('click', () => {
    burger.classList.toggle('is-active');
    navbar.classList.toggle('is-active');
  });
});

document.getElementById("year").innerHTML = new Date().getFullYear();
document.querySelector('a#open-modal').addEventListener('click', function(event) {
  event.preventDefault();
  var modal = document.querySelector('.modal');  // assuming you have only 1
  var html = document.querySelector('html');
  modal.classList.add('is-active');
  html.classList.add('is-clipped');

  modal.querySelector('.modal-background').addEventListener('click', function(e) {
    e.preventDefault();
    modal.classList.remove('is-active');
    html.classList.remove('is-clipped');
  });
  modal.querySelector('.modal-close').addEventListener('click', function(e) {
    e.preventDefault();
    modal.classList.remove('is-active');
    html.classList.remove('is-clipped');
  });
});