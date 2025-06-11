import googleMap from '../modules/map/map';
import '../modules/form';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

googleMap();

document.querySelector('.popup').addEventListener('wheel', event => {
  event.stopImmediatePropagation();
});

document.querySelector('.popup_selection').addEventListener('wheel', event => {
  event.stopImmediatePropagation();
});
if (document.querySelector('.section_view')) {
  document.querySelector('.section_view').addEventListener('wheel', event => {
    event.stopImmediatePropagation();
  });
}

document.querySelectorAll('[data-scroll-to]').forEach(button => {
  button.addEventListener('click', () => {
    const target = document.querySelector(button.getAttribute('data-scroll-to'));

    if (!target) return;
    setTimeout(() => {
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;

      const offset = 90;

      window.scrollTo({
        top: targetPosition - offset,
        behavior: 'smooth',
      });
    }, 200);
  });
});

const OFFSET = 100;

const menuItems = document.querySelectorAll('li[data-scroll-to]');
const sections = Array.from(menuItems).map(item =>
  document.querySelector(item.getAttribute('data-scroll-to')),
);

window.addEventListener('scroll', () => {
  let currentSectionId = '';

  sections.forEach(section => {
    if (!section) return;

    const sectionTop = section.offsetTop - OFFSET;
    const sectionHeight = section.offsetHeight;

    if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
      currentSectionId = section.getAttribute('id');

      console.log(currentSectionId);
    }
  });

  menuItems.forEach(item => {
    item.classList.remove('active');
    if (item.getAttribute('data-scroll-to') === `#${currentSectionId}`) {
      item.classList.add('active');
    }
  });
});

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.section_title').forEach(title => {
  gsap.fromTo(
    title,
    {
      opacity: 0,
      y: 50,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: title,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    },
  );
});

// Плавное поочерёдное появление спанов при загрузке страницы
window.addEventListener('DOMContentLoaded', () => {
  gsap.from('.section_top__title.content span', {
    opacity: 0,
    y: 30,
    duration: 1,
    ease: 'power3.out',
    stagger: 0.2, // пауза между появлением спанов
    delay: 0.5, // задержка перед стартом всей анимации
  });
});
