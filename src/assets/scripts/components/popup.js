document.querySelectorAll('[data-popup="open"]').forEach(button => {
  button.addEventListener('click', () => {
    const popup = document.querySelector('.popup');
    if (popup) {
      popup.classList.add('active');
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const popup = document.querySelector('.popup');
  const closeBtn = document.querySelector('.popup__close');

  closeBtn.addEventListener('click', () => {
    popup.classList.remove('active');
  });

  popup.addEventListener('click', e => {
    if (e.target === popup) {
      popup.classList.remove('active');
    }
  });
});
