import { gsap, ScrollTrigger } from 'gsap/all';
import { initParallaxHeroBlock } from './parallaxOnLoad';
import { initParallaxHero } from './parallaxOnLoad';

gsap.registerPlugin(ScrollTrigger);

export function initLoadedScreen() {
  const letsTalkWrapper = document.querySelector('.lets_talk_wrapper');
  const pulsatingCircle = document.querySelector('.pulsating-circle_text');

  gsap.fromTo(
    '.header',
    { top: '-100vh' },
    {
      top: 0,
      ease: 'linear',
    },
  );
  if (document.querySelector('.cookies')) {
    // gsap.fromTo(
    //   '.cookies',
    //   { opacity: 0 },
    //   {
    //     opacity: 1,
    //   },
    // );
    // gsap.fromTo(
    //   '.cookies__wrapper',
    //   { bottom: '-100vh' },
    //   {
    //     bottom: 0,
    //   },
    // );
  }
  if (document.querySelector('.title_top_home')) {
    gsap.fromTo(
      '.title_top_home',
      { top: '-100vh' },
      {
        top: 0,
      },
    );
  }
  if (document.querySelector('.title_top')) {
    gsap.fromTo(
      '.title_top',
      { top: '-100vh' },
      {
        top: 0,
      },
    );
  }
  if (document.querySelector('.breadcrumbs')) {
    gsap.fromTo(
      '.breadcrumbs',
      {
        top: '-100vh',
      },
      {
        top: 0,
      },
    );
  }
  if (document.querySelector('.content_top')) {
    gsap.fromTo(
      '.content_top',
      { bottom: '-100vh' },
      {
        bottom: 0,
      },
    );
  }
  if (document.querySelector('.home_top_image__wrapper')) {
    gsap.fromTo(
      '.home_top_image__wrapper',
      { bottom: '-100vh' },
      {
        bottom: 0,
      },
    );
  }

  if (document.querySelector('.video_top__wrapper_video')) {
    gsap.fromTo(
      '.video_top__wrapper_video',
      { opacity: '0', scale: '1.5' },
      {
        opacity: 1,
        scale: 1,
      },
    );
  }
  if (document.querySelector('.contact_us_page')) {
    gsap.fromTo(
      '.contact',
      { bottom: '-100vh' },
      {
        bottom: 0,
      },
    );
  }
  if (document.querySelector('.construction_second_section')) {
    gsap.fromTo(
      '.construction_second_section',
      { bottom: '-100vh' },
      {
        bottom: 0,
      },
    );
  }
  if (document.querySelector('.renovation_second_section')) {
    gsap.fromTo(
      '.renovation_second_section',
      { bottom: '-100vh' },
      {
        bottom: 0,
      },
    );
  }
  if (document.querySelector('.design_second_section')) {
    if (document.querySelector('.design_second_section')) {
      gsap.fromTo(
        '.design_second_section',
        { bottom: '-100vh' },
        {
          bottom: 0,
        },
      );
    }
  }
  if (document.querySelector('.investment_second_section')) {
    gsap.fromTo(
      '.investment_second_section',
      { bottom: '-100vh' },
      {
        bottom: 0,
      },
    );
  }
  if (document.querySelector('.about_us_page')) {
    gsap.fromTo(
      '.second_section__wrapper',
      { bottom: '-100vh' },
      {
        bottom: 0,
      },
    );
  }
  if (document.querySelector('.projects_tabs')) {
    gsap.fromTo(
      '.projects_tabs',
      { bottom: '-100vh' },
      {
        bottom: 0,
      },
    );
  }
  if (document.querySelector('.project_top_section__wrapper')) {
    gsap.fromTo(
      '.project_top_section__wrapper',
      { bottom: '-100vh' },
      {
        bottom: 0,
      },
    );

    gsap.fromTo(
      '.project_top_section__img_wrapper_second',
      { scale: '1.2', opacity: 0 },
      {
        scale: 1,
        opacity: 1,
      },
    );
    if (window.innerWidth <= 1024) {
      gsap.fromTo(
        '.top_video',
        { y: '-200vh' },
        {
          y: '0',
        },
      );
      gsap.fromTo(
        '.scroll',
        { bottom: '-100vh' },
        {
          bottom: '8px',
        },
      );
      gsap.fromTo(
        '.project_top_section__scroll',
        { bottom: '-100vh' },
        {
          bottom: '60px',
        },
      );
    }
  }
  if (document.querySelector('.blogs_section__wrapper')) {
    gsap.fromTo(
      '.blogs_section__wrapper',
      { bottom: '-100vh' },
      {
        bottom: 0,
      },
    );
  }
  if (document.querySelector('.blog_info')) {
    gsap.fromTo(
      '.blog_info',
      { bottom: '-100vh' },
      {
        bottom: 0,
      },
    );
  }
  if (pulsatingCircle) {
    setTimeout(() => {
      const arrowSvg = document.querySelector('.lets_talk_arrow_svg');
      arrowSvg.classList.add('white');

      const pulsatingCircleText = document.querySelector('.pulsating-circle_text');
      const rect = pulsatingCircleText.getBoundingClientRect();
      const wrapperRect = letsTalkWrapper.getBoundingClientRect();

      letsTalkWrapper.style.bottom = `${window.innerHeight - rect.bottom - wrapperRect.height}px`;
      letsTalkWrapper.style.right = `${window.innerWidth -
        rect.right -
        wrapperRect.width +
        rect.width / 2 -
        20}px`;
    }, 1000);
  }
  if (!pulsatingCircle) {
    const arrowSvg = document.querySelector('.lets_talk_arrow_svg');
    arrowSvg.classList.add('white');

    letsTalkWrapper.style.bottom = `${'max(40px, 2.08vw)'}`;
    letsTalkWrapper.style.right = `${'max(40px, 2.08vw)'}`;
  }
}
