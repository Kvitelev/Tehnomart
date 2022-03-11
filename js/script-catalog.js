const BtnAddProduct = document.querySelectorAll('.button-product-add');
const popupProductAdd = document.querySelector('.product-add');
const closeBtn = document.querySelector('.button-close');

for (let i = 0; i < BtnAddProduct.length; i++) {
  BtnAddProduct[i].addEventListener('click', function () {
    popupProductAdd.classList.toggle('disabled');
  });
}

closeBtn.addEventListener('click', function () {
  popupProductAdd.classList.add('disabled');
})

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    popupProductAdd.classList.add('disabled');
  }
});
