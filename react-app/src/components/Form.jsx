const Form = () => {
    return (
      <>
<form className="form">
<div className="form__title">Добавить свой отзыв</div>
<div className="form__block">
<div className="form__first-row">
<div className="namecheck">
  <label for="name"></label>
  <input name="username" placeholder="Имя и фамилия" type="text" className="input control form__name form__text" autocomplete="off"/>
  <div className="name_error"><span className="error">Вы забыли указать имя и фамилию</span></div>
  <div className="name_error2"><span className="error">Имя не может быть короче 2-х символов</span></div>
</div>
<div className="ratingcheck">
  <label for="rating"></label>
  <input name="ratingform" placeholder="Оценка" type="number" className="rating2 control form__rating form__text" autocomplete="off"/>
  <div className="rating_error"><span className="error__2">Оценка должна быть от 1 до 5</span></div>
</div>
</div>
<div className="form__second-row">
  <div>
  <label for="review"></label>
  <textarea name="review2" placeholder="Текст отзыва" className="review12345 form__review form__text" autocomplete="off"></textarea>
</div>
</div>

<div className="form__third-row">
<button className="btn form__button" type="submit"><span className="form__button-text">Отправить отзыв</span></button>
</div>
</div>
</form>
      </>
    );
  };
  
  export default Form;
  


