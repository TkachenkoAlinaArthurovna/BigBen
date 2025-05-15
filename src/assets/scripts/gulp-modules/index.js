import googleMap from '../modules/map/map';
import '../modules/form';

googleMap();

document.querySelectorAll('[data-scroll-to]').forEach(button => {
  button.addEventListener('click', () => {
    const target = document.querySelector(button.getAttribute('data-scroll-to'));
    console.log(target);
    if (!target) return;
    setTimeout(() => {
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
      const offset = 100;

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
    }
  });

  menuItems.forEach(item => {
    item.classList.remove('active');
    if (item.getAttribute('data-scroll-to') === `#${currentSectionId}`) {
      item.classList.add('active');
    }
  });
});
