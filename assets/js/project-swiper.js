// project slider //

const swiper = new Swiper('.project__container', {
  loop: true,
  grabCursor: true,
  spaceBetween: 30,
  

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

//   responsive break point
breakpoints: {
    0:{
        slidesPreView: 1
    },
    620:{
        slidesPreView: 2
    },
    1024:{
        slidesPreView: 3
    },
}
});

// project swiper grid layout

const projectcontainer = [document.querySelectorAll('.project__container')];
const prev_btn = [document.querySelectorAll('.button-prev')];
const next_btn = [document.querySelectorAll('.button-next')];

projectcontainer.forEach((item,i) =>{
  let containerDimentions = item.getBoundingReact();
  let containerwidth = containerDimentions.width;

  prev_btn[i].addEventListener('click', () =>{
    item.scrollLeft -= containerwidth;
  })

 next_btn[i].addEventListener('click', () =>{
    item.scrollRight += containerwidth;
  })
})