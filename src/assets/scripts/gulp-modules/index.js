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
if (document.getElementById('lazyIframe')) {
  document.getElementById('lazyIframe').addEventListener('wheel', event => {
    event.stopImmediatePropagation();
  });
}

document.querySelectorAll('[data-scroll-to]').forEach(button => {
  button.addEventListener('click', e => {
    e.preventDefault(); // блокує стандартний перехід
    const selector = button.getAttribute('data-scroll-to');
    const target = document.querySelector(button.getAttribute('data-scroll-to'));

    // if (!target) return;
    if (!target) {
      // Якщо елемента немає, переходимо на головну з параметром
      // Але замість # — додаємо спеціальний query-параметр, щоб уникнути різкого скролу
      window.location.href = '/?scrollTo=' + selector.replace('#', '');
      console.log('test');
    } else {
      smoothScrollTo(target);
    }
  });
});

window.addEventListener('load', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const scrollToId = urlParams.get('scrollTo');

  if (scrollToId) {
    const target = document.querySelector('#' + scrollToId);
    if (target) {
      setTimeout(() => {
        smoothScrollTo(target);

        // Убираем параметр scrollTo из URL после скролла
        urlParams.delete('scrollTo');
        const newUrl =
          window.location.pathname + (urlParams.toString() ? '?' + urlParams.toString() : '');
        window.history.replaceState(null, '', newUrl);
      }, 200);
    }
  }
});

function smoothScrollTo(element) {
  const offset = 90;
  const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;

  window.scrollTo({
    top: targetPosition - offset,
    behavior: 'smooth',
  });
}

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

const vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});
