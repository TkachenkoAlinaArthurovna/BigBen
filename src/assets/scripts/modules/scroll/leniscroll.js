import Lenis from '@studio-freight/lenis/dist/lenis.js';

const lenis = new Lenis({
  smoothWheel: true,
  duration: 1.2,
});

console.log(lenis);

function raf(time) {
  lenis.raf(time);

  requestAnimationFrame(raf);
}
if (/Mobi|Android|iPhone/i.test(navigator.userAgent) && window.innerWidth < 1024) {
  lenis.destroy();
  console.log('TEST');
}

requestAnimationFrame(raf);

export default lenis;
