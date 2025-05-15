import Swiper, { Navigation } from 'swiper';
Swiper.use([Navigation]);

const swiper = new Swiper('.swiper_parking', {
  direction: 'horizontal',
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-parking-next',
    prevEl: '.swiper-button-parking-prev',
  },
});
