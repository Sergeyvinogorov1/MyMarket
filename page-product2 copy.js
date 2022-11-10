let formData = {};
const form = document.querySelector('form');
const LS = localStorage;

// Получение данных

form.addEventListener('input', function(event){
    
    formData[event.target.name] = event.target.value;
    LS.setItem('formData', JSON.stringify(formData));
    console.log(formData);
    localStorage.removeItem("formData")
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