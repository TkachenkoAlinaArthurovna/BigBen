import { gsap, ScrollTrigger } from 'gsap/all';
import { initLoadedScreen } from './loadedScreen';

gsap.registerPlugin(ScrollTrigger);

const preloaderRef = document.querySelector('.preloader');

const preloader = {
  el: preloaderRef,
  subscribers: [],

  removeFirstTime() {
    if (this.el) {
      gsap.to(this.el, {
        scale: 1,
        opacity: 0,
        duration: 1,
        onComplete: () => {
          this.subscribers.forEach(fn => fn());
          this.el.remove();
        },
      });
    }
  },
  removeOtherTime() {
    if (this.el) {
      this.el.style.display = 'none'; // Ensure it's not visible
      this.el.remove(); // Remove the element from the DOM
    }
  },
  onRemove(fn) {
    this.subscribers.push(fn);
  },
};

const hasVisited = sessionStorage.getItem('hasVisited');
const left = document.querySelector('.animate-preloader-left');
const right = document.querySelector('.animate-preloader-right');
const preloaderCenter = document.querySelector('.preloader-center');

if (!hasVisited && left) {
  sessionStorage.setItem('hasVisited', 'true');

  // Ensure preloader is visible for the first time
  if (preloaderRef) {
    preloaderRef.style.display = 'flex';
  }

  const progressText = document.querySelector('.loader-text');
  let progress = 0;
  const updateProgress = () => {
    progress += 1;

    if (progressText) {
      progressText.textContent = `${progress}%`;
    }

    if (progress < 100) {
      requestAnimationFrame(updateProgress);
    }
    if (progress == 100) {
      gsap.fromTo(
        left,
        {
          left: '-40%',
        },
        {
          left: '-300%',
        },
      );
      gsap.fromTo(
        right,
        {
          right: '-40%',
        },
        {
          right: '-300%',
        },
      );
      gsap.fromTo(
        preloaderCenter,
        {
          opacity: 1,
        },
        {
          opacity: 0,
        },
      );
      initLoadedScreen();
    }
  };

  updateProgress();
  window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
      preloader.removeFirstTime();
      // initLoadedScreen();
    }, 3000);
  });
} else {
  preloader.removeOtherTime();
  initLoadedScreen();
}
