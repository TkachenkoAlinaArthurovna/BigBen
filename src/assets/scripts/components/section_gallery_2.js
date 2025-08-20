import Swiper, { Navigation } from 'swiper';
Swiper.use([Navigation]);

if (document.querySelector('.index_page')) {
  const swiper = new Swiper('.swiper_gallery_2', {
    direction: 'horizontal',
    slidesPerView: 'auto',
    slidesPerGroup: 1,
    loop: false,
    spaceBetween: 60,
    navigation: {
      nextEl: '.swiper-button-gallery_2-next',
      prevEl: '.swiper-button-gallery_2-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 'auto',
      },
      0: {
        slidesPerView: '1',
      },
    },
  });
}
