"use strict";

// этот код работает в современном режиме

// Упражнение 1

let count = +prompt("Введите число", "");

if (!count) {console.log("Ошибка, вы ввели не число");

}
let intervalId = setInterval(() => {
    count = count - 1;

    console.log("Осталось", count);

    if (count === 0) {
        clearInterval(intervalId);
        console.log("Время вышло!")
        
    }
}, 1000);


const promise = fetch("https://reqres.in/api/users");

promise
    .then(function (response) {
    return response.json();
})
    .then(function (response) {
    const users = response.data;

users.forEach(function(user){
    console.log(`-${user.first_name} ${user.last_name} (${user.email})`);
})
});