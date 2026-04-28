const modal = document.querySelector('.modal');
const modalOverlay = document.querySelector('.modal__overlay');
const openModalBtn = document.querySelector('.open-modal');
const closeModalBtn = document.querySelector('.close-modal');

function openModal() {
  modal.setAttribute('aria-hidden', 'false')
  document.body.classList.add('scroll-lock')
}

function closeModal() {
  modal.setAttribute('aria-hidden', 'true')
  document.body.classList.remove('scroll-lock')
}

if (modalOverlay) {
  modalOverlay.addEventListener('click', closeModal)
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') {
    closeModal()
  }
})

openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);

const popup = document.querySelector('.popup');
const popupOverlay = document.querySelector('.popup__overlay');
const openPopupBtn = document.querySelector('.catalog__popup');
const closePopupBtn = document.querySelector('.close-popup');

function openPopup() {
  popup.setAttribute('aria-hidden', 'false')
  document.body.classList.add('scroll-lock')
}

function closePopup() {
  popup.setAttribute('aria-hidden', 'true')
  document.body.classList.remove('scroll-lock')
}

if (popupOverlay) {
  popupOverlay.addEventListener('click', closePopup)
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && popup.getAttribute('aria-hidden') === 'false') {
    closePopup()
  }
})

openPopupBtn?.addEventListener('click', openPopup);
closePopupBtn?.addEventListener('click', closePopup);

const breakpoint = window.matchMedia ('(min-width: 650px)');
let sliderMobile = null;

function initSwiper() {
  sliderMobile = new Swiper('.slider-mobile', {
    loop: true,
    slidesPerView: 1,
    centeredSlider: true,

    navigation: {
      nextEl: '.product__button-next',
      prevEl: '.product__button-prev',
    }
  });
}

function destroySwiper() {
  if (sliderMobile) {
    sliderMobile.destroy(true, true);
    sliderMobile = null;
  }
}

function handleBreakpointChange(e) {
  if (e.matches) {
    destroySwiper()
  } else {
    if (!sliderMobile) initSwiper();
  }
}

handleBreakpointChange(breakpoint);
breakpoint.addEventListener('change', handleBreakpointChange);

const menu = document.querySelector('.menu');
const headerBtn = document.querySelector('.header__btn')

headerBtn.addEventListener('click', () => {
  menu.classList.toggle('menu--active');
})

const modeContainer = document.querySelector('.view-mode__container');
const modeBtnGrid = document.querySelector('.view-mode__btn-grid');
const modeBtnLine = document.querySelector('.view-mode__btn-line');

modeBtnGrid?.addEventListener('click', () => {
  modeContainer.classList.add('view-mode__container--grid')
  modeContainer.classList.remove('view-mode__container--line')
  modeBtnLine.classList.add('view-mode__btn-line-disabled')
  modeBtnGrid.classList.remove('view-mode__btn-grid-disabled')
});
modeBtnLine?.addEventListener('click', () => {
  modeContainer.classList.add('view-mode__container--line')
  modeContainer.classList.remove('view-mode__container--grid')
  modeBtnGrid.classList.add('view-mode__btn-grid-disabled')
  modeBtnLine.classList.remove('view-mode__btn-line-disabled')
});


const swiper = new Swiper('.accessories__slider', {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 40,

  navigation: {
    nextEl: '.accessories__button-next',
    prevEl: '.accessories__button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    650: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    950: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});

const swiperReviews = new Swiper('.reviews__slider', {
  loop: true,
  slidesPerView: 9,
  spaceBetween: 15,

  pagination: {
    el: ".reviews__pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: '.reviews__button-next',
    prevEl: '.reviews__button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 6,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 7,
      spaceBetween: 15,
    },
  },
});

const rangeSlider = document.querySelector('.range__slider');
const rangeMin = document.querySelector('.range__min');
const rangeMax = document.querySelector('.range__max');

noUiSlider.create(rangeSlider, {
  start: [300, 3000],
  step: 100,
  range: {
    'min': 300,
    'max': 3000
  },
  format: {
    to: value => Math.round(value),
    from: value => Number(value)
  },
});

rangeSlider.noUiSlider.on('update', (values, handle) => {
  if (handle === 0) {
    rangeMin.value = values[0];
  } else {
    rangeMax.value = values[1];
  }
});

rangeMin.addEventListener('change', function () {
  rangeSlider.noUiSlider.set([rangeMin.value, null]);
});

rangeMax.addEventListener('change', function () {
  rangeSlider.noUiSlider.set([null, rangeMax.value]);
});