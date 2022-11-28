export function validate(type, value) {
    switch (type) {
      case 'name':
        if (value === '') {
          return { content: 'Вы забыли указать имя и фамилию', isValid: false };
        } else if (value?.length <= 2) {
          return { content: 'Имя не может быть короче 2-х символов', isValid: false };
        } else {
          return { content: value, isValid: true };
        }
      case 'rating':
        if (value === '') {
          return { content: 'Оценка должна быть от 1 до 5', isValid: false };
        } else if (isNaN(Number(value))) {
          return { content: 'Оценка должна быть от 1 до 5', isValid: false };
        } else if (Number(value) < 1 || Number(value) > 5) {
          return {
            content: 'Оценка должна быть от 1 до 5',
            isValid: false,
          };
        } else {
          return { content: value, isValid: true };
        }
    }
  }
  