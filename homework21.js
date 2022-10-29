"use strict";

// этот код работает в современном режиме

// Упражнение 1

/**
 * Функция проверяет наличие свойств объекта
 * @param {string} obj если тело цикла начнет выполняться - значит в объекте есть свойства
 * @returns возвращает true, если у объекта нет свойств, иначе false.
 */
let object = {
    name: "Sergey"
};

 function isEmpty(obj) {
    for (let key in obj) {
      // если тело цикла начнет выполняться - значит в объекте есть свойства
      return false;
    }
    return true;
  }
console.log(isEmpty(object));

// Упражнение 2

let salaries = {
    John: 100000,
    Ann: 160000,
    Pete: 130000,
};


let privet = +prompt('На' , '');
function raiseSalary(percent) {
    for (let key in salaries) {
        salaries[key] = salaries[key] + (salaries[key] / 100) * percent;
        let newSalaries = 0;
        newSalaries = Math.floor(salaries[key]);
        console.log(key + ' ' + newSalaries)
    }
    return salaries;
}
raiseSalary(privet);