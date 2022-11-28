"use strict";

class Form {
  constructor(errors) {
    this.errors = errors;
  }

  handleFocus() {
    this._clearError(this.errors.errorName);
    this._clearError(this.errors.errorReating);
  }

  _clearError(elem) {
    elem.value = '';
    elem.classList.add('hide');
  }
}

class AddReviewForm extends Form {
  constructor(errors, storage, inputs) {
    super(errors);
    this.storage = storage;
    this.inputs = inputs;
  }

  autoComplite() {
    const obj = Object.entries(this.storage);

    obj.forEach((elem) => {
      const key = elem[0];
      const value = elem[1];

      if (key && key === 'name') {
        nameInput.value = value;
      }

      if (key && key === 'raiting') {
        raitingInput.value = value;
      }

      if (key && key === 'text') {
        textInput.value = value;
      }
    });
  }

  addBtnHandler() {
    const name = this.inputs.nameInput.value.trim();
    const raiting = this.inputs.raitingInput.value.trim();
    const text = this.inputs.textInput.value.trim();

    const nameValid = this._validate('name', name);
    const raitingValid = this._validate('raiting', raiting);
    const textValid = this._validate('text', text);

    if (!nameValid.isValid) {
      errorName.classList.remove('hide');
      errorName.style.color = 'white';
      errorName.style.fontSize = "12px";
      errorName.innerHTML = nameValid.content;
    }

    if (!raitingValid.isValid) {
      errorReating.classList.remove('hide');
      errorReating.style.color = 'white';
      errorReating.style.fontSize = "12px";
      errorReating.innerHTML = raitingValid.content;
    }

    if (nameValid.isValid && raitingValid.isValid && textValid.isValid) {
      storage.clear();
      nameInput.value = '';
      raitingInput.value = '';
      textInput.value = '';
    }
  }

  handleSave(event) {
    const value = event.target.value;

    const targetId = event.target.id;
    const nameId = 'add-comment-name';
    const raitingId = 'add-comment-raiting';
    const textId = 'add-comment-text';

    if (targetId === nameId) {
      storage.setItem('name', value);
    }

    if (targetId === raitingId) {
      storage.setItem('raiting', value);
    }

    if (targetId === textId) {
      storage.setItem('text', value);
    }
  }

  _validate(type, value) {
    switch (type) {
      case 'name':
        if (value === '') {
          return { content: 'Вы забыли указать имя и фамилию', isValid: false };
        } else if (value.length <= 2) {
          return { content: 'Имя не может быть короче двух символов', isValid: false };
        } else {
          return { content: value, isValid: true };
        }
      case 'raiting':
        if (value === '') {
          return { content: 'Оценка должна быть от 1 до 5', isValid: false };
        } else if (isNaN(Number(value))) {
          return { content: 'Оценка должна быть от 1 до 5', isValid: false };
        } else if (Number(value) < 1 || Number(value) > 5) {
          return { content: 'Оценка должна быть от 1 до 5', isValid: false };
        } else {
          return { content: value, isValid: true };
        }

    }
  }
}

const storage = window.localStorage;

const nameInput = document.getElementById('add-comment-name');
const raitingInput = document.getElementById('add-comment-raiting');
const textInput = document.getElementById('add-comment-text');

const errorName = document.getElementById('name-validate');
const errorReating = document.getElementById('raiting-validate');

const addBtn = document.getElementById('add-comment-btn');

const inputsObj = {
  nameInput, //* nameInput: nameInput
  raitingInput,
  textInput,
};

const errorsObj = {
  errorName,
  errorReating,
};

const addRewiewForm = new AddReviewForm(errorsObj, storage, inputsObj);

addRewiewForm.autoComplite();

addBtn.addEventListener('click', addRewiewForm.addBtnHandler.bind(addRewiewForm));

nameInput.addEventListener('focus', addRewiewForm.handleFocus.bind(addRewiewForm));
raitingInput.addEventListener('focus', addRewiewForm.handleFocus.bind(addRewiewForm));
textInput.addEventListener('focus', addRewiewForm.handleFocus.bind(addRewiewForm));

nameInput.addEventListener('input', addRewiewForm.handleSave.bind(addRewiewForm));
raitingInput.addEventListener('input', addRewiewForm.handleSave.bind(addRewiewForm));
textInput.addEventListener('input', addRewiewForm.handleSave.bind(addRewiewForm));
