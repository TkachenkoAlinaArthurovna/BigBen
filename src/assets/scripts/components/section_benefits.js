import Swiper, { Navigation } from 'swiper';
Swiper.use([Navigation]);

if (document.querySelector('.index_page') || document.querySelector('.remarketing')) {
  const swiper_architectural_solution = new Swiper(
    '.swiper.swiper_benefits_architectural_solution',
    {
      direction: 'horizontal',
      slidesPerView: 1,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-benefits_architectural_solution-next',
        prevEl: '.swiper-button-benefits_architectural_solution-prev',
      },
    },
  );

  const swiper_ecosystem = new Swiper('.swiper.swiper_benefits_ecosystem', {
    direction: 'horizontal',
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-benefits_ecosystem-next',
      prevEl: '.swiper-button-benefits_ecosystem-prev',
    },
  });

  const swiper_security = new Swiper('.swiper.swiper_benefits_security', {
    direction: 'horizontal',
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-benefits_security-next',
      prevEl: '.swiper-button-benefits_security-prev',
    },
  });

  const swiper_energy_independence = new Swiper('.swiper.swiper_benefits_energy_independence', {
    direction: 'horizontal',
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-benefits_energy_independence-next',
      prevEl: '.swiper-button-benefits_energy_independence-prev',
    },
  });

  const buttons = document.querySelectorAll('.section_benefits__tabs_button');

  buttons.forEach(button =>
    button.addEventListener('click', () => {
      const id = button.id;

      document.querySelector('.section_benefits__tabs_button.active')?.classList.remove('active');
      document.querySelector('.section_benefits__content.active')?.classList.remove('active');

      button.classList.add('active');
      document
        .querySelector(`.section_benefits__content[data-info="${id}"]`)
        ?.classList.add('active');
    }),
  );
}
