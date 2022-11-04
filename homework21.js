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

/**
 * Функция считает процент увеличения зп
 * @param {string} percent Увеличивает размер зп на заданный процент
 * @returns Возвращает зп после ее увеличения на определенный процент
 */

let salaries = {
    John: 100000,
    Ann: 160000,
    Pete: 130000,
};

let percent = +prompt('На сколько процентов увеличить зп' , '');
function raiseSalary(percent) {
    for (let key in salaries) {
        salaries[key] = salaries[key] + (salaries[key] / 100) * percent;
        let newSalaries = 0;
        newSalaries = Math.floor(salaries[key]);
        console.log(key + ' ' + newSalaries)
    }
    return salaries;
}
raiseSalary(percent);