import noUiSlider from 'nouislider';

const rangeSlider = document.getElementById('range-slider');

if (rangeSlider) {
  if (rangeSlider.noUiSlider) {
    console.warn('noUiSlider вже ініціалізовано на цьому елементі');
  } else {
    noUiSlider.create(rangeSlider, {
      start: [100000, 200000],
      connect: true,
      step: 1,
      range: {
        min: 100000,
        max: 200000,
      },
    });

    const input0 = document.getElementById('input-0');
    const input1 = document.getElementById('input-1');
    const inputs = [input0, input1];

    rangeSlider.noUiSlider.on('update', function(values, handle) {
      inputs[handle].value = Math.round(values[handle]);
    });

    const setRangeSlider = (i, value) => {
      let arr = [null, null];
      arr[i] = value;
      rangeSlider.noUiSlider.set(arr);
    };

    inputs.forEach((el, index) => {
      el.addEventListener('change', e => {
        setRangeSlider(index, e.currentTarget.value);
        console.log(e.currentTarget.value);
      });
    });
  }
}

document.querySelectorAll('[data-popup-selection="open"]').forEach(button => {
  button.addEventListener('click', () => {
    const popup = document.querySelector('.popup_selection');
    if (popup) {
      popup.classList.add('active');
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const popup = document.querySelector('.popup_selection');
  const closeBtn = document.querySelector('.popup_selection__close');
  const backBtn = document.querySelector('.popup_selection__back_to_flats ');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      popup.classList.remove('active');
    });
  }
  if (backBtn) {
    backBtn.addEventListener('click', () => {
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
});

document.addEventListener('DOMContentLoaded', function() {
  const checkboxGroups = [
    {
      wrapperSelector: '.popup_selection_item__wrapper_for_checkboxes1',
      resultInputId: 'rooms_all',
    },
    {
      wrapperSelector: '.popup_selection_item__wrapper_for_checkboxes2',
      resultInputId: 'features_all',
    },
  ];

  checkboxGroups.forEach(group => {
    const wrapper = document.querySelector(group.wrapperSelector);
    const resultInput = document.getElementById(group.resultInputId);

    if (!wrapper || !resultInput) return;

    const checkboxes = wrapper.querySelectorAll('input[type="checkbox"]');

    function updateSelectedIds() {
      const selectedIds = Array.from(checkboxes)
        .filter(cb => cb.checked)
        .map(cb => cb.id)
        .join(' ');

      resultInput.setAttribute('value', selectedIds);
    }

    checkboxes.forEach(cb => {
      cb.addEventListener('change', updateSelectedIds);
    });

    updateSelectedIds();
  });
});

function setupInputLimit(inputId, min, max) {
  const input = document.getElementById(inputId);

  if (input) {
    input.addEventListener('input', () => {
      let digits = input.value.replace(/\D/g, '');

      if (digits === '') {
        input.value = '';
        return;
      }

      let number = parseInt(digits, 10);

      if (number < min) {
        if (digits.length >= min.toString().length) {
          input.value = min;
        } else {
          input.value = digits;
        }
        return;
      }

      if (number > max) {
        input.value = max;
      } else {
        input.value = number;
      }
    });
  }
}

// Настройка двух полей
setupInputLimit('size-from', 36, 87);
setupInputLimit('size-to', 36, 87);

// Получаем элементы
const handleLower = document.querySelector('.noUi-handle-lower');
const handleUpper = document.querySelector('.noUi-handle-upper');
const input0 = document.getElementById('input-0');
const input1 = document.getElementById('input-1');

// Функция для обновления значения
function updateInput(element, targetInput) {
  const value = element.getAttribute('aria-valuenow');
  if (targetInput) {
    targetInput.setAttribute('value', value);
  }
}

// Настраиваем MutationObserver
const observerConfig = { attributes: true, attributeFilter: ['aria-valuenow'] };

// Callback для наблюдателя
const observerCallback = mutationsList => {
  mutationsList.forEach(mutation => {
    if (mutation.target === handleLower) {
      updateInput(handleLower, input0);
    } else if (mutation.target === handleUpper) {
      updateInput(handleUpper, input1);
    }
  });
};

// Создаем и запускаем наблюдателей
const observer = new MutationObserver(observerCallback);
observer.observe(handleLower, observerConfig);
observer.observe(handleUpper, observerConfig);
