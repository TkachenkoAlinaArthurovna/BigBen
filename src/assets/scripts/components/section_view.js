import Swiper, { Navigation } from 'swiper';
Swiper.use([Navigation]);

const swiper = new Swiper('.swiper_view', {
  direction: 'horizontal',
  slidesPerView: 2,
  loop: true,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-view-next',
    prevEl: '.swiper-button-view-prev',
  },
  breakpoints: {
    1024: {
      slidesPerView: '2',
    },
    0: {
      slidesPerView: '1',
    },
  },
});
