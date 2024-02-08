"use strict";

// этот код работает в современном режиме

// Упражнение 1

for (let i = 0; i < 20; i++) {
    if (i % 2 == 0) continue;
    console.log(i);;
}

// Упражнение 2

let sum = 0;  //объявляем переменную sum
let count = 0;  //объявляем переменную count
while (count !== 3) {   // Оператор !== проверяет две величины на неравенство, оператор == проверяет на равенство
    let value = +prompt("Введите число", "");  // + перед оператором преобразует строку в тип Number, то есть в значение
    if (!value) alert("Ошибка, вы ввели не число"); // !value означает, что value не является числом
    if (!value) break; // break останавливает цикл
    sum = sum + value; //
    count += 1; // Используется предварительное приращение count++ или count +=; 
                // count + 1 не будет работать, так как в этом случае значение count не изменяется
}
if (count == 3) {
    alert("Сумма: " + sum);
}

// Упражнение 3

function getNameOfMonth(month) {

if (month === 0) return "Январь"
if (month === 1) return "Февраль"
if (month === 2) return "Март"
if (month === 3) return "Апрель"
if (month === 4) return "Май"
if (month === 5) return "Июнь"
if (month === 6) return "Июль"
if (month === 7) return "Август"
if (month === 8) return "Сентябрь"
if (month === 9) return "Октябрь"
if (month === 10) return "Ноябрь"
if (month === 11) return "Декабрь"
}

for (let m = 0; m < 12; m++) {
    if (m === 9) continue;
    const month = getNameOfMonth(m);
    console.log(month)
}

// Упражнение 4
// Immediately Invoked Function Expression, IIFE — это функция, которая выполняется сразу же после того, как была определена.

(function (){
    console.log("Пример работы функции IIFE");
 })()

