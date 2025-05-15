import Swiper, { Navigation } from 'swiper';
Swiper.use([Navigation]);

const swiper = new Swiper('.swiper_construction_bottom', {
  direction: 'horizontal',
  slidesPerView: 3,
  loop: true,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-construction_bottom-next',
    prevEl: '.swiper-button-construction_bottom-prev',
  },
  breakpoints: {
    1360: {
      slidesPerView: '3',
    },
    1024: {
      slidesPerView: '3',
    },
    768: {
      slidesPerView: '2',
    },
    0: {
      slidesPerView: '1',
    },
  },
});
