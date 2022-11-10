let form = document.querySelector(".form");

let input = form.querySelector(".input");
let review = form.querySelector(".review")

function handleSubmit(event) {
    event.preventDefault();

// localStorage.removeItem("username")

    console.log("submit");
}

function handleInput(event) {
    let value = event.target.value;
    let name = event.target.getAttribute("name");

    localStorage.setItem(name, value);
}

input.value = localStorage.getItem('username');

form.addEventListener("submit", handleSubmit);
input.addEventListener("input", handleInput);

