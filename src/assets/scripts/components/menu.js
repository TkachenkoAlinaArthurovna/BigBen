const menu = document.querySelector('.header__menu');
const menuWrapper = document.querySelector('.header__menu-wrapper');
const menuItems = document.querySelectorAll('.header__menu-item');

if (menu) {
  menu.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuWrapper.classList.toggle('active');
  });
}

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    menu.classList.remove('active');
    menuWrapper.classList.remove('active');
  });
});
