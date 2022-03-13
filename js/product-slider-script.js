const productSlidOne = document.querySelector('.products-and-services__slider-one');
const productSlidTwo = document.querySelector('.products-and-services__slider-two');
const BtnBack = document.querySelectorAll('.button-back');
const BtnNext = document.querySelectorAll('.button-next');
const toggleBtnOne = document.querySelectorAll('.button-slider__one');
const toggleBtnTwo = document.querySelectorAll('.button-slider__two');

for (let i = 0; i < BtnBack.length; i++) {
  BtnBack[i].addEventListener('click', function () {
    productSlidOne.classList.add('products-and-services__slider_disabled');
    productSlidTwo.classList.remove('products-and-services__slider_disabled');
  })
}

for (let i = 0; i < BtnNext.length; i++) {
  BtnNext[i].addEventListener('click', function () {
    productSlidOne.classList.remove('products-and-services__slider_disabled');
    productSlidTwo.classList.add('products-and-services__slider_disabled');
  })
}

for (let i = 0; i < toggleBtnOne.length; i++) {
  toggleBtnOne[i].addEventListener('click', function () {
    productSlidOne.classList.add('products-and-services__slider_disabled');
    productSlidTwo.classList.remove('products-and-services__slider_disabled');
  })
}

for (let i = 0; i < toggleBtnTwo.length; i++) {
  toggleBtnTwo[i].addEventListener('click', function () {
    productSlidOne.classList.remove('products-and-services__slider_disabled');
    productSlidTwo.classList.add('products-and-services__slider_disabled');
  })
}
