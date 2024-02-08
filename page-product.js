"use strict";

// этот код работает в современном режиме

// Объявление переменных

const form = document.querySelector('.form');
let usernameContainer = form.querySelector('.namecheck');
let formRatingContainer = form.querySelector('.ratingcheck');

let username = usernameContainer.querySelector('.control');

let errorNameElem = usernameContainer.querySelector('.name_error')
let errorNameElem2 = usernameContainer.querySelector('.name_error2')

let formRating = formRatingContainer.querySelector('.control')
let errorRatingElem = formRatingContainer.querySelector('.rating_error')

// Объявление функции для создания события

function handleSubmit(event) {

  // Чтобы страница не перезагружалась, добавим event.preventDefault();
event.preventDefault();
console.log('Submit');

localStorage.removeItem("formData")

let name = username.value;
let rating = +formRating.value;


let errorName = '';
let errorName2 = '';

// Поле имя фамилия

if (name.length < 1) {
  errorName = 'Вы забыли указать имя и фамилию'
  errorNameElem.classList.toggle('visible', errorName);
}
else {errorNameElem.classList.remove('visible')}

if (name.length > 0 && name.length < 2) {
  errorName2 = 'Имя не может быть короче 2-х символов'
  errorNameElem2.classList.toggle('visible', errorName2);
  console.log(name, errorName, errorName2);
}
  else {errorNameElem2.classList.remove('visible')}

  errorNameElem.innertext = errorName;
  errorNameElem2.innertext = errorName2;

  if (errorName) return;
  if (errorName2) return;


// Поле рейтинга


let errorRating = '';

if (rating < 1 || rating > 5) {
  errorRating = 'Оценка должна быть от 1 до 5'
  console.log(rating, errorRating);
  errorRatingElem.classList.toggle('visible', errorRating);
} else {errorRatingElem.classList.remove('visible')}


if (errorRating) {
  errorRatingElem.innertext = errorRating;
}}


// Добавление события

form.addEventListener('submit', handleSubmit);





let formData = {};
const LS = localStorage;

// Получение данных

form.addEventListener('input', function(event){
    
    formData[event.target.name] = event.target.value;
    LS.setItem('formData', JSON.stringify(formData));
    console.log(formData);
})

// Восстановление данных

if(LS.getItem('formData')) {
    formData = JSON.parse(LS.getItem('formData'));
    console.log(form.elements);

    // form.elements[name]
    for (let key in formData){
        form.elements[key].value = formData[key];
    }
}



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
}

  cartInfoStorageInit();
});



function myFunction(x) {
  if (x.matches) { // Если медиа запрос совпадает
    addToCart.style.fontSize = '20px';
  } else {
    addToCart.style.fontSize = '16px';
  }
  
}

var x = window.matchMedia("(min-width: 361px)")
myFunction(x) // Вызов функции прослушивателя во время выполнения
x.addListener(myFunction) // Присоединить функцию прослушивателя при изменении состояния


var x = window.matchMedia("(min-width: 361px)")

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

    addToCart.style.color = 'white';
    cartCount.classList.add('hide');
  }

  if (+cartInfo > 0) {
    addToCart.innerHTML = 'Товар уже в корзине';
    cartCount.innerHTML = cartInfo;
    cartCount.classList.remove('hide');
    addToCart.style.backgroundColor = '#c4c4c4';
    addToCart.style.fontFamily = 'Inter';

  }
}