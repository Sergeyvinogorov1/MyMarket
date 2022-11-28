import { useEffect, useState } from 'react';

import { validate } from './utils/feedbackValidate';

const storage = window.localStorage;

const AddCommentForm = () => {
  const [name, setName] = useState(storage.getItem('name'));
  const [rating, setRaiting] = useState(storage.getItem('rating'));
  const [text, setText] = useState(storage.getItem('text'));

  const [isPressAddCommentBtn, setIsPressAddCommentButton] = useState();

  const [nameValid, setNameValid] = useState(validate('name', name));
  const [ratingValid, setRaitingValid] = useState(validate('rating', rating));

  const changeName = (event) => {
    const value = event.target.value;
    storage.setItem('name', value);
    setName(value);
  };

  const changeRaiting = (event) => {
    const value = event.target.value;
    storage.setItem('rating', value);
    setRaiting(value);
  };

  const changeText = (event) => {
    const value = event.target.value;
    storage.setItem('text', value);
    setText(value);
  };

  const addComment = () => {
    setNameValid(validate('name', name));
    setRaitingValid(validate('rating', rating));
    setIsPressAddCommentButton(true);
  };

  const handleFocus = (type) => {
    switch (type) {
      case 'name':
        if (!nameValid.isValid && isPressAddCommentBtn) {
          setName('');
          storage.setItem('name', '');
          setIsPressAddCommentButton(undefined);
        }
        break;
      case 'rating':
        if (!ratingValid.isValid && isPressAddCommentBtn) {
          setRaiting('');
          storage.setItem('rating', '');
          setIsPressAddCommentButton(undefined);
        }
        break;
    }
  };

  useEffect(() => {
    if (isPressAddCommentBtn && nameValid.isValid && ratingValid.isValid) {
      storage.setItem('name', '');
      storage.setItem('rating', '');
      storage.setItem('text', '');

      setName('');
      setRaiting('');
      setText('');
    }
  }, [isPressAddCommentBtn]);

  return (
    <form className="form">
        <div className="form__title">Добавить свой отзыв</div>
        <div className="form__block">
        <div className="form__first-row">
          <div className="namecheck">
            <input
              onInput={(e) => changeName(e)}
              onFocus={() => handleFocus('name')}
              value={name}
              className="input control form__name form__text"
              placeholder="Имя и фамилия"
            />
            <div
              className={
                isPressAddCommentBtn &&
                (nameValid && nameValid.isValid
                  ? 'name_error hide'
                  : 'name_error')
              }>
              {isPressAddCommentBtn && (nameValid && nameValid.isValid ? '' : nameValid.content)}
            </div>
          </div>
          <div className="ratingcheck">
            <input
              onInput={(e) => changeRaiting(e)}
              onFocus={() => handleFocus('rating')}
              value={rating}
              className="rating2 control form__rating form__text"
              placeholder="Оценка"
              type="text"
              max="5"
              min="1"
            />
            <div
              className={
                isPressAddCommentBtn &&
                (ratingValid && ratingValid.isValid
                  ? 'rating_error hide'
                  : 'rating_error')
              }>
              {isPressAddCommentBtn &&
                (ratingValid && ratingValid.isValid ? '' : ratingValid.content)}
            </div>
          </div>
        </div>
        <div className="form__second-row">
          <textarea
            value={text}
            onInput={(e) => changeText(e)}
            className="review12345 form__review form__text"
            placeholder="Текст отзыва"></textarea>
        </div>
        <div className="form__third-row">
        <button onClick={addComment} type="button" className="btn form__button">
        <span className="form__button-text">Отправить отзыв</span>
        </button>
        </div>
        </div>
        
      </form>
  );
};

export default AddCommentForm;

var show;
function hidetxt(type){
param=document.getElementById(type);
if(param.style.display == "none") {
if(show) show.style.display = "none";
param.style.display = "block";
show = param;
}else param.style.display = "none"
}
