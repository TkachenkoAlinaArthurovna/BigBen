import Swiper, { Navigation } from 'swiper';
Swiper.use([Navigation]);

if (document.querySelector('.apartments')) {
  const swiper = new Swiper('.section_second_apartments__swiper', {
    direction: 'horizontal',
    slidesPerView: 'auto',
    loop: false,
    spaceBetween: 40,
    navigation: {
      nextEl: '.section_second_apartments-next',
      prevEl: '.section_second_apartments-prev',
    },
    breakpoints: {
      0: {
        spaceBetween: 16,
      },
      1024: {
        spaceBetween: 40,
      },
    },
    on: {
      init: () => {
        equalizeSwiperSlideHeights();
      },
      resize: () => {
        equalizeSwiperSlideHeights();
      },
    },
  });
  function equalizeSwiperSlideHeights() {
    const slides = document.querySelectorAll('.section_second_apartments__swiper .swiper-slide');
    const slidesWrapper = document.querySelector(
      '.section_second_apartments__swiper .swiper-wrapper',
    );

    slides.forEach(slide => {
      slide.style.height = slidesWrapper.offsetHeight + 'px';
    });
  }
}
