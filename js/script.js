const popupFeedback = document.querySelector('.feedback');
const openFeedbackBtn = document.querySelector('.technomart-company__button');
const formFeedback = popupFeedback.querySelector('.feedback-form');
const nameInputFeedback = popupFeedback.querySelector('.feedback-form__input');
const emailInputFeedback = popupFeedback.querySelector('.feedback-form__input-email');
const comentFeedback = popupFeedback.querySelector('.feedback-form__textarea');
const closeBtn = document.querySelectorAll('.button-close');
const openModalMap = document.querySelector('.button-map');
const popupMap = document.querySelector('.map');
const BtnAddProduct = document.querySelectorAll('.button-product-add');
const popupProductAdd = document.querySelector('.product-add');

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("user");
} catch (err) {
  isStorageSupport = false;
}

for (let i = 0; i < BtnAddProduct.length; i++) {
  BtnAddProduct[i].addEventListener('click', function () {
    popupProductAdd.classList.toggle('disabled');
  });
}

openFeedbackBtn.addEventListener('click', function () {
  popupFeedback.classList.toggle('disabled');
  if (storage) {
    nameInputFeedback.value = storage;
    emailInputFeedback.value = storage;
    comentFeedback.focus();
  }else {
    nameInputFeedback.focus();
  }
});

openModalMap.addEventListener('click', function () {
  popupMap.classList.toggle('disabled');
});

for (let i = 0; i < closeBtn.length; i++) {
  closeBtn[i].addEventListener('click', function () {
    popupFeedback.classList.add('disabled');
    popupMap.classList.add('disabled');
    popupProductAdd.classList.add('disabled');
    popupFeedback.classList.remove('form-error');
  });
}

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    popupFeedback.classList.add('disabled');
    popupMap.classList.add('disabled');
    popupProductAdd.classList.add('disabled');
    popupFeedback.classList.remove('form-error');
  }
});

formFeedback.addEventListener("submit", function (evt) {
  if (!nameInputFeedback.value || !emailInputFeedback.value) {
    evt.preventDefault();
    popupFeedback.classList.toggle('form-error');
  }else {
    if (isStorageSupport) {
      localStorage.setItem('user', nameInputFeedback.value);
      localStorage.setItem('user', emailInputFeedback.value);
    }
  }
});
