const burger = document.querySelector('.burger');

burger.addEventListener('click', (e) => {
  e.currentTarget.classList.toggle('burger--active');

});

document.addEventListener('DOMContentLoaded', function() {
    $('.burger').click(function(){
        $('.nav__list-mobile').toggleClass('nav__list-mobile-active');
    });
});