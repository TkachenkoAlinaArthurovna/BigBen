import Swiper, { Navigation } from 'swiper';
Swiper.use([Navigation]);

const swiper_energy_independence = new Swiper('.swiper.swiper_planning', {
  direction: 'horizontal',
  slidesPerView: 4,
  loop: false,
  spaceBetween: 60,
  navigation: {
    nextEl: '.swiper-button-planning-next',
    prevEl: '.swiper-button-planning-prev',
  },
  breakpoints: {
    1350: {
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
