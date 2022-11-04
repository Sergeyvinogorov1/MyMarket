"use strict";

// этот код работает в современном режиме

// Упражнение 1

//* console.log(getSumm_2(arr2));
let arr1 = [1, 2, 10, 5];
alert(getSumm(arr1)); // 18

let arr2 = ["a", {}, 3, 3, -2];
alert(getSumm(arr2)); // 4

function getSumm(arr) {
    const filtered = arr.filter(function (n) {
      if (typeof n === 'number') {
        return n;
      }
    });
  
    return filtered.reduce(function (acc, n) {
      return (acc = acc + n);
    }, 0);
  }
  

  // Упражнение 3

  // В корзине один товар
  let cart= [4884, 3456];

  function addToCart(productId) {
    let hasInCart = cart.includes(productId)

    if (hasInCart) return;
    
    cart.push(productId)
  }

  function removeFromCart(productId) {

    cart = cart.filter(function(id){
      return id !== productId;
    });
  }
  // Добавили товар
  addToCart(3456);
  addToCart(3456);

  console.log("1", cart)

// Удалили товар

  removeFromCart(4884)

  console.log("2", cart); // [4884, 3456]

  
