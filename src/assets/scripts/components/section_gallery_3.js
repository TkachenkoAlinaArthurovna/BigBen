import Swiper, { Navigation } from 'swiper';
Swiper.use([Navigation]);

const swiper_1 = new Swiper('.swiper_gallery_3_1', {
  direction: 'horizontal',
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-gallery_3_1-next',
    prevEl: '.swiper-button-gallery_3_1-prev',
  },
});

const swiper_2 = new Swiper('.swiper_gallery_3_2', {
  direction: 'horizontal',
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-gallery_3_2-next',
    prevEl: '.swiper-button-gallery_3_2-prev',
  },
});

const swiper_3 = new Swiper('.swiper_gallery_3_3', {
  direction: 'horizontal',
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-gallery_3_3-next',
    prevEl: '.swiper-button-gallery_3_3-prev',
  },
});

const swiper_4 = new Swiper('.swiper_gallery_3_4', {
  direction: 'horizontal',
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-gallery_3_4-next',
    prevEl: '.swiper-button-gallery_3_4-prev',
  },
});

const swiper_5 = new Swiper('.swiper_gallery_3_5', {
  direction: 'horizontal',
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-gallery_3_5-next',
    prevEl: '.swiper-button-gallery_3_5-prev',
  },
});

const swiper_6 = new Swiper('.swiper_gallery_3_6', {
  direction: 'horizontal',
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-gallery_3_6-next',
    prevEl: '.swiper-button-gallery_3_6-prev',
  },
});

const buttons = document.querySelectorAll('.section_gallery_3__tabs_button');

buttons.forEach(button =>
  button.addEventListener('click', () => {
    const id = button.id;

    document.querySelector('.section_gallery_3__tabs_button.active')?.classList.remove('active');
    document.querySelector('.section_gallery_3__content.active')?.classList.remove('active');

    button.classList.add('active');
    document
      .querySelector(`.section_gallery_3__content[data-info="${id}"]`)
      ?.classList.add('active');
  }),
);
