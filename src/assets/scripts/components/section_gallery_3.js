import Swiper, { Navigation } from 'swiper';
Swiper.use([Navigation]);
import gsap from 'gsap';
import axios from 'axios';

if (document.querySelector('.index_page') || document.querySelector('.remarketing')) {
  let galleryImages = {}; // Буде наповнений з JSON

  // let galleryImages = {
  //   galleies: [
  //     {
  //       name: 'territory',
  //       gallery: [
  //         { img: '../../assets/images/gallery_3/1.png' },
  //         { img: '../../assets/images/gallery_3/1.png' },
  //         { img: '../../assets/images/gallery_3/1.png' },
  //         { img: '../../assets/images/gallery_3/1.png' },
  //       ],
  //     },
  //     {
  //       name: 'fun',
  //       gallery: [
  //         { img: '../../assets/images/gallery_3/2.png' },
  //         { img: '../../assets/images/gallery_3/1.png' },
  //         { img: '../../assets/images/gallery_3/1.png' },
  //         { img: '../../assets/images/gallery_3/1.png' },
  //       ],
  //     },
  //     {
  //       name: 'hall',
  //       gallery: [
  //         { img: '../../assets/images/gallery_3/1.png' },
  //         { img: '../../assets/images/gallery_3/1.png' },
  //         { img: '../../assets/images/gallery_3/1.png' },
  //         { img: '../../assets/images/gallery_3/1.png' },
  //       ],
  //     },
  //     {
  //       name: 'parking',
  //       gallery: [
  //         { img: '../../assets/images/gallery_3/1.png' },
  //         { img: '../../assets/images/gallery_3/1.png' },
  //         { img: '../../assets/images/gallery_3/1.png' },
  //         { img: '../../assets/images/gallery_3/1.png' },
  //       ],
  //     },
  //     {
  //       name: 'basement',
  //       gallery: [
  //         { img: '../../assets/images/gallery_3/1.png' },
  //         { img: '../../assets/images/gallery_3/1.png' },
  //         { img: '../../assets/images/gallery_3/1.png' },
  //         { img: '../../assets/images/gallery_3/1.png' },
  //       ],
  //     },
  //   ],
  // };

  // if (document.querySelector('.index_page')) {

  const swiperGallery = new Swiper('.swiper_gallery_3_1', {
    direction: 'horizontal',
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-gallery_3_1-next',
      prevEl: '.swiper-button-gallery_3_1-prev',
    },
  });

  // Отримання зображень з бекенду
  async function fetchGalleryImages() {
    const formData = new FormData();
    formData.append('action', 'gallery');

    try {
      const response = await axios.post('/wp-admin/admin-ajax.php', formData);
      const galleries = response.data || [];
      // const galleries = galleryImages.galleies || [];

      //Перетворити у формат { territory: [img1, img2], ... }

      galleries.forEach(group => {
        const categoryName = group.name;
        const imageUrls = group.gallery.map(item => item.img);
        galleryImages[categoryName] = imageUrls;
      });
      loadGallery('location'); // Початкове завантаження
    } catch (error) {
      console.error('Помилка при завантаженні галереї:', error);
    }
  }

  // Відображення слайдів за категорією
  function loadGallery(category) {
    const wrapper = document.querySelector('.swiper_gallery_3_1 .swiper-wrapper');
    wrapper.innerHTML = '';

    const wrapperDesktop = document.querySelector('.section_gallery_3__content .gallery');
    wrapperDesktop.innerHTML = '';

    if (galleryImages[category]) {
      if (window.innerWidth <= 1024) {
        galleryImages[category].forEach((src, index) => {
          const slide = document.createElement('div');
          slide.classList.add('swiper-slide');
          gsap.from(slide, { opacity: 0, yPercent: 20, delay: index * 0.05 });

          const img = document.createElement('img');
          img.src = src;
          img.alt = category;

          slide.appendChild(img);
          wrapper.appendChild(slide);
        });
      } else {
        galleryImages[category].forEach((src, index) => {
          const slide = document.createElement('div');
          slide.classList.add('gallery-item');

          gsap.from(slide, { opacity: 0, yPercent: 20, delay: index * 0.05 });

          const img = document.createElement('img');
          img.src = src;
          img.alt = category;

          slide.appendChild(img);
          wrapperDesktop.appendChild(slide);
        });
      }

      swiperGallery.update();
      swiperGallery.slideTo(0);
    }
  }

  // Обробка кліків на контролери
  document
    .querySelectorAll('.section_gallery_3__tabs_buttons .section_gallery_3__tabs_button')
    .forEach(btn => {
      btn.addEventListener('click', () => {
        const category = btn.dataset.id;

        document
          .querySelectorAll('.section_gallery_3__tabs_buttons .section_gallery_3__tabs_button')
          .forEach(el => {
            el.classList.remove('active');
          });
        btn.classList.add('active');

        loadGallery(category);
      });
    });

  // Перший запуск
  fetchGalleryImages();

  window.addEventListener('resize', () => {
    loadGallery('location');
  });
}
