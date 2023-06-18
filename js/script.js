let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');
let header = document.querySelector('.header');
let navbarItem = document.querySelector('.nav-item');
console.log(navbar);
const url = window.location.pathname.split('/')[2];
navbar.classList.add('navtop');


menu.onclick = function(){
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
    navbarItem.classList.toggle('active');
};

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    if (window.scrollY > 5) {
      navbar.classList.add('spacing-navbar');
      navbar.classList.remove('navtop');
      navbar.classList.add('navscroll');
    } else {
      navbar.classList.remove('spacing-navbar');
      navbar.classList.add('navtop');
      navbar.classList.remove('navscroll');
    }
};

var swiper = new Swiper(".home-slider", {
    loop:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".reviews-slider", {
    loop:true,
    spaceBetween: 20,
    autoHeight:true,
    grabCursor:true,
    breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
});

let loadMoreBtn = document.querySelector('.item .load-more .btn');
let currentItem = 6;

loadMoreBtn.onclick = () =>{
  let boxes = [...document.querySelectorAll('.item .box-container .box')];
  for (var i = currentItem; i < currentItem + 3; i++){
    boxes[i].style.display = 'inline-block';
  };
  currentItem += 3;
  if(currentItem >= boxes.length){
    loadMoreBtn.style.display = 'none';
  }
}