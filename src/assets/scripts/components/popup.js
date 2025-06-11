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
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      popup.classList.remove('active');
    });
  }

  if (popup) {
    popup.addEventListener('click', e => {
      if (e.target === popup) {
        popup.classList.remove('active');
      }
    });
  }

  const textarea = document.getElementById('order_call_message');
  if (textarea) {
    textarea.setAttribute('value', '');
    textarea.addEventListener('input', () => {
      textarea.setAttribute('value', textarea.value);
    });
  }

  const textareaFooter = document.getElementById('footer-form-textarea');
  if (textareaFooter) {
    textareaFooter.setAttribute('value', '');
    textareaFooter.addEventListener('input', () => {
      textareaFooter.setAttribute('value', textareaFooter.value);
    });
  }

  const itemsValue = document.querySelectorAll('.item-value');
  itemsValue.forEach(item => {
    item.setAttribute('value', '');
    item.addEventListener('input', () => {
      item.setAttribute('value', item.value);
    });
  });

  const checkboxes = document.querySelectorAll('.item-value-checkbox');
  checkboxes.forEach(checkbox => {
    checkbox.setAttribute('value-checked', checkbox.checked ? 'true' : 'false');
    checkbox.addEventListener('change', () => {
      checkbox.setAttribute('value-checked', checkbox.checked ? 'true' : 'false');
    });
  });

  const selectElement = document.getElementById('for-who');
  const selectElementInput = document.getElementById('for_who_input');
  selectElement.setAttribute('value', selectElement.value);
  selectElementInput.setAttribute('value', selectElement.value);
  selectElement.addEventListener('change', () => {
    selectElement.setAttribute('value', selectElement.value);
  });
  selectElement.addEventListener('change', () => {
    selectElementInput.setAttribute('value', selectElement.value);
  });
});
