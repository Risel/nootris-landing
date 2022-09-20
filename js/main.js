const navbar = document.querySelector('.header__navigation')
const burger = document.querySelector('.header__burger')

burger.addEventListener('click', function (){
  navbar.classList.toggle('active')
  burger.classList.toggle('active')
})