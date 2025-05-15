import Swiper, { Navigation } from 'swiper';
Swiper.use([Navigation]);

const swiper = new Swiper('.swiper_gallery', {
  direction: 'horizontal',
  slidesPerView: 4,
  loop: true,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-gallery-next',
    prevEl: '.swiper-button-gallery-prev',
  },
  breakpoints: {
    1360: {
      slidesPerView: '4',
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
