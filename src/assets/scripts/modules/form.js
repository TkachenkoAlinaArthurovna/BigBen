import i18next from 'i18next';
import { gsap } from 'gsap';
import * as yup from 'yup';
// eslint-disable-next-line import/no-extraneous-depende
import FormMonster from '../../../pug/components/form/form';
import SexyInput from '../../../pug/components/input/input';
import { useState } from './helpers/helpers';

/*
 * form handlers start
 */

const lang = document.documentElement.getAttribute('lang');

const text_success =
  lang == 'uk'
    ? "Дякуємо! Ми зв'яжемося з вами найближчим часом. Гарного дня! 🌿"
    : 'Thank you! We will get in touch with you shortly. Have a great day! 🌿';

const forms = ['[data-form="contact-form"]', '[data-form="call_back-form"]'];

const formSelection = ['[data-form="call_back-form_selection"]'];

function resetInputs() {
  const slider = document.querySelector('.filters-price__slider');
  if (slider && slider.noUiSlider) {
    slider.noUiSlider.set([100000, 200000]);
  }
  document.querySelectorAll('input.reset, textarea.reset, select.reset').forEach(el => {
    if (el.type === 'checkbox' || el.type === 'radio') {
      el.checked = false;
    } else if (el.tagName === 'SELECT') {
      el.selectedIndex = 0;
    } else {
      el.value = '';
    }
  });
}

forms.forEach(form => {
  const $form = document.querySelector(form);

  if ($form) {
    /* eslint-disable */
    new FormMonster({
      /* eslint-enable */
      elements: {
        $form,
        successAction: () => {
          $form.insertAdjacentHTML(
            'beforeend',
            `
              <div class="success-pop-up" data-success>
                <div class="success-pop-up__wrapper">
                  <div class="success-pop-up__close" onclick="this.closest('[data-success]').remove();" >
                    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.25 29.75L29.75 12.25" stroke="#2B2B2B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M29.75 29.75L12.25 12.25" stroke="#2B2B2B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <img src="${window.location.origin}/wp-content/themes/3d/assets/images/cat.png" alt="cat"/>
                  <div class="success-pop-up__text"> ${text_success}
                  </div>
                  <!--<button data-form-popup-close type="button" onclick="this.closest('[data-success]').remove();" class="contact__form_button btn_blue button-30 button-30--blue">
                    <span>На головну</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none">
                        <g clip-path="url(#clip0_212_13335)">
                        <mask id="mask0_212_13335" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="9" height="9">
                            <path d="M8.5 0.5H0.5V8.5H8.5V0.5Z" fill="white"/>
                        </mask>
                        <g mask="url(#mask0_212_13335)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 1.96134L1.86767 0.5H8.5V7.07613L6.98725 8.5V5.24331C6.98725 4.45061 6.99512 3.73248 7.01152 3.08825L1.69829 8.35152L0.645315 7.19973L5.95853 1.93671C5.32915 1.95329 4.62304 1.96134 3.84045 1.96134H0.5Z" fill="#2B2B2B"/>
                        </g>
                        </g>
                        <defs>
                        <clipPath id="clip0_212_13335">
                            <rect width="8" height="8" fill="white" transform="translate(0.5 0.5)"/>
                        </clipPath>
                        </defs>
                    </svg>
                  </button>-->
                </div>
              </div>
            `,
          );

          setTimeout(() => {
            resetInputs();
            $form.querySelector('[data-success]').remove();
          }, 6000);
        },
        $btnSubmit: $form.querySelector('[data-btn-submit]'),
        fields: {
          name: {
            inputWrapper: new SexyInput({
              animation: 'none',
              $field: $form.querySelector('[data-field-name]'),
            }),
            rule: yup
              .string()
              .required(i18next.t('required'))
              .trim(),
            defaultMessage: i18next.t('name'),
            valid: false,
            error: [],
          },
          phone: {
            inputWrapper: new SexyInput({
              animation: 'none',
              $field: $form.querySelector('[data-field-phone]'),
              typeInput: 'phone',
            }),
            rule: yup
              .string()
              .required(i18next.t('required'))
              .min(17, i18next.t('field_too_short', { cnt: 17 - 5 })),

            defaultMessage: i18next.t('phone'),
            valid: false,
            error: [],
          },
          method: {
            inputWrapper: new SexyInput({
              animation: 'none',
              $field: $form.querySelector('[data-field-method]'),
            }),
            rule: yup
              .string()
              .required(i18next.t('required'))
              .trim(),
            defaultMessage: i18next.t('name'),
            valid: false,
            error: [],
          },
        },
      },
    });
  }
});

formSelection.forEach(form => {
  const $form = document.querySelector(form);

  if ($form) {
    /* eslint-disable */
    new FormMonster({
      /* eslint-enable */
      elements: {
        $form,
        successAction: () => {
          $form.insertAdjacentHTML(
            'beforeend',
            `
              <div class="success-pop-up" data-success>
                <div class="success-pop-up__wrapper">
                  <div class="success-pop-up__close" onclick="this.closest('[data-success]').remove(); document.querySelector('.popup_selection').classList.remove('active');" >
                    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.25 29.75L29.75 12.25" stroke="#2B2B2B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M29.75 29.75L12.25 12.25" stroke="#2B2B2B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <img src="${window.location.origin}/wp-content/themes/3d/assets/images/cat.png" alt="cat"/>
                  <div class="success-pop-up__text"> ${text_success}
                  </div>
                  <button data-form-popup-close type="button" onclick="this.closest('[data-success]').remove(); document.querySelector('.popup_selection').classList.remove('active');" class="contact__form_button btn_blue button-30 button-30--blue">
                    <span>На головну</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none">
                        <g clip-path="url(#clip0_212_13335)">
                        <mask id="mask0_212_13335" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="9" height="9">
                            <path d="M8.5 0.5H0.5V8.5H8.5V0.5Z" fill="white"/>
                        </mask>
                        <g mask="url(#mask0_212_13335)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 1.96134L1.86767 0.5H8.5V7.07613L6.98725 8.5V5.24331C6.98725 4.45061 6.99512 3.73248 7.01152 3.08825L1.69829 8.35152L0.645315 7.19973L5.95853 1.93671C5.32915 1.95329 4.62304 1.96134 3.84045 1.96134H0.5Z" fill="#2B2B2B"/>
                        </g>
                        </g>
                        <defs>
                        <clipPath id="clip0_212_13335">
                            <rect width="8" height="8" fill="white" transform="translate(0.5 0.5)"/>
                        </clipPath>
                        </defs>
                    </svg>
                  </button>
                </div>
              </div>
            `,
          );

          setTimeout(() => {
            resetInputs();
            $form.querySelector('[data-success]').remove();
            document.querySelector('.popup_selection').classList.remove('active');
          }, 6000);
        },
        $btnSubmit: $form.querySelector('[data-btn-submit]'),
        fields: {
          name: {
            inputWrapper: new SexyInput({
              animation: 'none',
              $field: $form.querySelector('[data-field-name]'),
            }),
            rule: yup
              .string()
              .required(i18next.t('required'))
              .trim(),
            defaultMessage: i18next.t('name'),
            valid: false,
            error: [],
          },
          phone: {
            inputWrapper: new SexyInput({
              animation: 'none',
              $field: $form.querySelector('[data-field-phone]'),
              typeInput: 'phone',
            }),
            rule: yup
              .string()
              .required(i18next.t('required'))
              .min(17, i18next.t('field_too_short', { cnt: 19 - 7 })),
            defaultMessage: i18next.t('phone'),
            valid: false,
            error: [],
          },
        },
      },
    });
  }
});
