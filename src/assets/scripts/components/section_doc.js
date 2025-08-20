import Swiper, { Navigation } from 'swiper';
Swiper.use([Navigation]);

document.addEventListener('DOMContentLoaded', function() {
  if (document.querySelector('.index_page')) {
    const images = document.querySelectorAll('img[data-doc]');
    images.forEach(img => {
      const dataDoc = img.getAttribute('data-doc');
      if (dataDoc) {
        img.setAttribute('src', dataDoc);
      }
    });

    const swiper = new Swiper('.swiper_doc', {
      direction: 'horizontal',
      slidesPerView: 6,
      loop: false,
      spaceBetween: 30,
      navigation: {
        nextEl: '.swiper-button-doc-next',
        prevEl: '.swiper-button-doc-prev',
      },
      breakpoints: {
        1360: {
          slidesPerView: '6',
        },
        1024: {
          slidesPerView: '4',
        },
        768: {
          slidesPerView: '3',
        },
        0: {
          slidesPerView: '2',
        },
      },
    });

    const swiperPopUp = new Swiper('.swiper__pop-up_doc', {
      direction: 'horizontal',
      slidesPerView: 1,
      loop: false,
      spaceBetween: 30,
      navigation: {
        nextEl: '.swiper-button-pop-up_doc-next',
        prevEl: '.swiper-button-pop-up_doc-prev',
      },
    });

    document.querySelectorAll('.swiper-slide__wrapper').forEach(slide => {
      slide.addEventListener('click', e => {
        const index = slide.getAttribute('index');
        const popUp = document.querySelector('.pop-up-doc');
        if (popUp) {
          swiperPopUp.slideTo(index, 0);
          popUp.classList.add('active');
        }
      });
    });

    const popup = document.querySelector('.pop-up-doc');
    const closeBtn = document.querySelector('.pop-up-doc__close');

    closeBtn.addEventListener('click', () => {
      popup.classList.remove('active');
    });

    popup.addEventListener('click', e => {
      if (e.target === popup) {
        popup.classList.remove('active');
      }
    });
  }
});
