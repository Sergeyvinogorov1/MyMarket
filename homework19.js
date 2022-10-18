"use strict";

// этот код работает в современном режиме

// Упражнение 1

let a = '$100'
let b = '300$'
let summ = Number(a.slice(1)) + Number(b.slice(0, 3)) // Ваше решение
console.log(summ); // Должно быть 400

// Упражнение 2

let message = ' привет, медвед ';
message.trim();
message = "П" + message.slice(2);
// Решение должно быть написано тут
console.log(message); // “Привет, медвед”

// Упражнение 3

let age = prompt("Сколько вам лет?")

switch (true) {
    case  (age < 4 ):
    alert("младенец");
    break;

    case  (age < 12 ):
        alert("ребенок");
        break;

    case  (age < 19 ):
        alert("подросток");
        break;

    case  (age < 41 ):
        alert("познаёте жизнь");
        break;

    case  (age < 81 ):
        alert("познали жизнь");
        break;

    case  (age > 80 ):
        alert("долгожитель");
        break;

    default:
        alert( "Нет таких значений" );
  }

// Упражнение 4

let messages = "Я работаю со строками как профессионал!";
let count = messages.match(/[\wа-я]+/ig).length;
console.log(count); // Должно быть 6