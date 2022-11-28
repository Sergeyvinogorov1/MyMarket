"use strict";

// этот код работает в современном режиме


const storage = window.localStorage;

const addToCart = document.getElementById('addcart');
const cartCount = document.getElementById('icon-text');
autoComplite();
cartInfoStorageInit();

addToCart.addEventListener('click', () => {
  const cartInfo = Number(storage.getItem('cartInfo'));

  if (cartInfo === 0) {
    storage.setItem('cartInfo', 1);
    addToCart.innerHTML = 'Товар уже в корзине';
    addToCart.style.backgroundColor = '#c4c4c4';
    addToCart.style.color = 'white';
  }

  if (cartInfo > 0) {
    storage.setItem('cartInfo', 0);
    addToCart.innerHTML = 'Добавить в корзину';
    addToCart.style.backgroundColor = '';
    addToCart.style.color = 'white';
    addToCart.style.fontFamily = 'Inter';
    addToCart.style.fontSize = '20px';
    
  }

  cartInfoStorageInit();
});


function autoComplite() {
  const obj = Object.entries(storage);

  obj.forEach((elem) => {
    const key = elem[0];
    const value = elem[1];
  });
}


function cartInfoStorageInit() {
  const cartInfo = storage.getItem('cartInfo');

  if (cartInfo === null) {
    storage.setItem('cartInfo', 0);
  }

  if (+cartInfo === 0) {
    addToCart.innerHTML = 'Добавить в корзину';
    addToCart.style.fontFamily = 'Inter';
    addToCart.style.fontSize = '20px';
    addToCart.style.color = 'white';
    cartCount.classList.add('hide');
  }

  if (+cartInfo > 0) {
    addToCart.innerHTML = 'Товар уже в корзине';
    cartCount.innerHTML = cartInfo;
    cartCount.classList.remove('hide');
    addToCart.style.backgroundColor = '#c4c4c4';
    addToCart.style.fontFamily = 'Inter';
    addToCart.style.fontSize = '20px';
  }
}























