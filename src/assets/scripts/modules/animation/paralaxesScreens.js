const transformationValues = type => {
  switch (type) {
    case 'tablet':
      return {
        from: {
          y: -100,
        },
        to: {
          y: 100,
        },
      };
    case 'mobile':
      return {
        from: {
          y: -50,
        },
        to: {
          y: 50,
        },
      };

    default:
      return {
        from: {},
        to: {},
      };
  }
};

export function paralaxesScreens(deviceType = 'desktop', gsap) {
  document.querySelectorAll('.paralax-screen').forEach(el => {
    gsap
      .timeline({
        defaults: {
          force3D: true,
          ease: 'none',
        },
        scrollTrigger: {
          trigger: el,
          scrub: true,
        },
      })
      .fromTo(
        el.querySelector('.paralax-screen-wrapper-transform'),
        {
          y: -50,
          ...transformationValues(deviceType).from,
        },
        {
          y: 50,
          ...transformationValues(deviceType).to,
        },
      )
      .fromTo(
        el.querySelector('.paralax-screen-wrapper-scale'),
        {
          scale: 1.2,
        },
        {
          scale: 1,
        },
        '<',
      );
  });
}

export function paralaxesScreensCustom(
  selector,
  transformValues = { yFrom: -50, yTo: 50, scale: 1.2 },
  gsap,
  deviceType = 'desktop',
) {
  document.querySelectorAll(selector).forEach(el => {
    gsap
      .timeline({
        defaults: {
          force3D: true,
          ease: 'none',
        },
        scrollTrigger: {
          trigger: el,
          scrub: true,
        },
      })
      .fromTo(
        el.querySelector('.paralax-screen-wrapper-transform'),
        {
          y: transformValues.yFrom,
          ...transformationValues(deviceType).from,
        },
        {
          y: transformValues.yTo,
          ...transformationValues(deviceType).to,
        },
      )
      .fromTo(
        el.querySelector('.paralax-screen-wrapper-scale'),
        {
          scale: transformValues.scale,
        },
        {
          scale: 1,
        },
        '<',
      );
  });
}
