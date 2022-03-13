const BtnDelivery = document.querySelector('.service__button-delivery');
const BtnWarranty = document.querySelector('.service__button-warranty');
const BtnCredit  = document.querySelector('.service__button-credit');
const slidDelivery = document.querySelector('.service__slider-delivery');
const slideWarranty = document.querySelector('.service__slider-warranty');
const slideCredit = document.querySelector('.service__slider-credit');

BtnDelivery.addEventListener('click', function () {
  BtnDelivery.classList.add('service__button_active');
  BtnWarranty.classList.remove('service__button_active');
  BtnCredit.classList.remove('service__button_active');
  slidDelivery.classList.remove('service__slider_disabled');
  slideWarranty.classList.add('service__slider_disabled');
  slideCredit.classList.add('service__slider_disabled');
})

BtnWarranty.addEventListener('click', function () {
  BtnDelivery.classList.remove('service__button_active');
  BtnWarranty.classList.add('service__button_active');
  BtnCredit.classList.remove('service__button_active');
  slidDelivery.classList.add('service__slider_disabled');
  slideWarranty.classList.remove('service__slider_disabled');
  slideCredit.classList.add('service__slider_disabled');
})

BtnCredit.addEventListener('click', function () {
  BtnDelivery.classList.remove('service__button_active');
  BtnWarranty.classList.remove('service__button_active');
  BtnCredit.classList.add('service__button_active');
  slidDelivery.classList.add('service__slider_disabled');
  slideWarranty.classList.add('service__slider_disabled');
  slideCredit.classList.remove('service__slider_disabled');
})







