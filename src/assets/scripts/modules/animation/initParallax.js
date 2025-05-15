import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
gsap.core.globals('ScrollTrigger', ScrollTrigger);

const initParallaxHero = () => {
  ScrollTrigger.refresh();
  const parallaxImages = document.querySelectorAll('[img-parallax-scale]');
  console.log(ScrollTrigger.getAll());

  parallaxImages.forEach(image => {
    const wrap = document.createElement('div');
    wrap.classList.add('parallax-container');
    wrap.style.height = '100%';
    image.parentElement.prepend(wrap);
    const scale = image.dataset.scale || 1;
    const time = image.dataset.time || 1;
    gsap.set(image, { willChange: 'transform', scale: 1 });
    wrap.prepend(image);

    const speed = image.dataset.speed;
    const number = window.innerWidth > 1350 ? 10 : window.innerWidth > 480 ? 5 : 2;

    gsap
      .timeline({
        ease: 'none',
        scrollTrigger: {
          trigger: image,
          scrub: 3,
          // markers: true,
          start: `top center+=${time}`,
          end: 'bottom top',
        },
      })
      .fromTo(
        image,
        {
          y: () => 0,
        },
        {
          y: () => `${number * (1 - speed)}%`,
          ease: 'sine.inOut',
          scale: scale,
        },
      );
  });
};

const imageParallax = document.querySelectorAll('[img-parallax-scale]');

if (imageParallax) {
  initParallaxHero();
}

window.addEventListener('resize', () => {
  // ScrollTrigger.refresh();
});
