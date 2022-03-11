const popupFeedback = document.querySelector('.feedback');
const openFeedbackBtn = document.querySelector('.technomart-company__button');
const nameInputFeedback = popupFeedback.querySelector('.feedback-form__input');
const closeBtn = document.querySelectorAll('.button-close');
const openModalMap = document.querySelector('.button-map');
const popupMap = document.querySelector('.map');

const BtnAddProduct = document.querySelectorAll('.button-product-add');
const popupProductAdd = document.querySelector('.product-add');

for (let i = 0; i < BtnAddProduct.length; i++) {
  BtnAddProduct[i].addEventListener('click', function () {
    popupProductAdd.classList.toggle('disabled');
  });
}

openFeedbackBtn.addEventListener('click', function () {
  popupFeedback.classList.toggle('disabled');
  nameInputFeedback.focus();
});

openModalMap.addEventListener('click', function () {
  popupMap.classList.toggle('disabled');
});

for (let i = 0; i < closeBtn.length; i++) {
  closeBtn[i].addEventListener('click', function () {
    popupFeedback.classList.add('disabled');
    popupMap.classList.add('disabled');

    popupProductAdd.classList.add('disabled');
  });
}

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    popupFeedback.classList.add('disabled');
    popupMap.classList.add('disabled');

    popupProductAdd.classList.add('disabled');
  }
});
