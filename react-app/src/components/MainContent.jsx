const MainContent = () => {
  return (
    <>
<main>
<div className="title">
      <div className="title__item">Смартфон Apple iPhone 13, синий</div>
    </div>

    <div className="images">
      <img src="./assets/phone-images/image-1.webp" height="387" alt="Общий вид" className="images__phone1"/>
      <img src="./assets/phone-images/image-2.webp" height="387" alt="Лицевая часть" className="images__phone2"/>
      <img src="./assets/phone-images/image-3.webp" height="387" alt="Полубоком" className="images__phone3"/>
      <img src="./assets/phone-images/image-4.webp" height="387" alt="Внешний вид камеры" className="images__phone4"/>
      <img src="./assets/phone-images/image-5.webp" height="387" alt="Телефон с обеих сторон" className="images__phone5"/>
    </div>


    <div class="characterics">
      <div class="characterics__main">
        

    <div className="characterics__color">
          <div className="characterics__head">Цвет товара: синий</div>

          <div className="characterics__list">

            <input id="radio-1" type="radio" name="color" className="radio"/>
            <div className="square-imgae">
                <label for="radio-1"><img className="square-imgae-1"
                        src="./assets/phone-colors/color-1.webp" alt="red" /> </label>
            </div>

            <input id="radio-2" type="radio" name="color" className="radio"/>
            <div className="square-imgae ">
                <label for="radio-2"><img className="square-imgae-2"
                        src="./assets/phone-colors/color-2.webp" alt="grey"/> </label>
            </div>

            <input id="radio-3" type="radio" name="color" className="radio"/>
            <div className="square-imgae">
                <label for="radio-3"> <img className="square-imgae-1"
                        src="./assets/phone-colors/color-3.webp" alt="pink"/> </label>
            </div>

            <input id="radio-4" type="radio" name="color" className="radio"/>
            <div className="square-imgae square-imgae--selected">
                <label for="radio-4"><img className="square-imgae-1"
                        src="./assets/phone-colors/color-4.webp" alt="blue"/> </label>
            </div>

            <input id="radio-5" type="radio" name="color" className="radio"/>
            <div className="square-imgae">
                <label for="radio-4"><img className="square-imgae-1"
                        src="./assets/phone-colors/color-5.webp" alt="white"/> </label>
            </div>

            <input id="radio-6" type="radio" name="color" className="radio"/>
            <div className="square-imgae">
                <label for="radio-5"><img className="square-imgae-1"
                        src="./assets/phone-colors/color-6.webp" alt="black"/> </label>
            </div>
        </div>

        </div>
        
        <div className="configuration">
            <div className="configuration__header">Конфигурация памяти: 128 ГБ</div>
          <div className="configuration__buttons">
            <button className="btn configuration__button configuration-button--selected">
              <span className="button-text">128 ГБ</span>
            </button>
            <button className="btn configuration__button2">
              <span className="button-text">256 ГБ</span>
            </button>
            <button className="btn configuration__button">
              <span className="button-text">512 ГБ</span>
            </button>
          </div>
        </div>

        <div className="specifications">
          <div className="specifications__head">Характеристики товара</div>

          <div>
            <ul className="specifications__list">
            <li className="specifications__element">Экран: <b>6.1</b></li>
            <li className="specifications__element">Встроенная память: <b>128 ГБ</b></li>
            <li className="specifications__element">Операционная система: <b>iOS 15</b></li>
            <li className="specifications__element">Беспроводные интерфейсы: <b>NFC, Bluetooth, Wi-Fi</b></li>
            <li className="specifications__element">Процессор: <b><a className="link" href="https://ru.wikipedia.org/wiki/Apple_A15">Apple A15 Bionic</a></b></li>
            <li className="specifications__element">Вес: <b>173 г</b></li>
            </ul>
          </div>

        </div>
        
    <div className="description">
      <div className="description__head">Описание</div>
      <div className="description__paragraphs">
        <div className="description__paragraph">
          Наша самая совершенная система двух камер.
          <br />Особый взгляд на прочность дисплея.
          <br />Чип, с которым всё супербыстро.
          <br />Аккумулятор держится заметно дольше.
          <br /><i>iPhone 13 - сильный мира всего.</i>
          </div>
          <div className="description__item1">Мы разработали совершенно новую схему расположения и развернули объективы на 45 градусов. Благодаря этому внутри корпуса поместилась наша лучшая система двух камер с увеличенной матрицей широкоугольной камеры. Кроме того, мы освободили место для системы оптической стабилизации изображения сдвигом матрицы. И повысили скорость работы матрицы на сверхширокоугольной камере.</div>
          <div className="description__item2">Новая сверхширокоугольная камера видит больше деталей в тёмных областях снимков. Новая широкоугольная камера улавливает на 47% больше света для более качественных фотографий и видео. Новая оптическая стабилизация со сдвигом матрицы обеспечит чёткие кадры даже в неустойчивом положении.</div>
          <div className="description__item3">Режим «Киноэффект» автоматически добавляет великолепные эффекты перемещения фокуса и изменения резкости. Просто начните запись видео. Режим «Киноэффект» будет удерживать фокус на объекте съёмки, создавая красивый эффект размытия вокруг него. Режим «Киноэффект» распознаёт, когда нужно перевести фокус на другого человека или объект, который появился в кадре. Теперь ваши видео будут смотреться как настоящее кино.</div>
      </div>


      
      </div>

      <div className="models">
        <div className="models__head">Сравнение моделей</div>
        <table className="models__table">
          <thead>
            <tr className="models__header">
              <th className="models__model models__border">Модель</th>
              <th className="models__weight models__border">Вес</th>
              <th className="models__height models__border">Высота</th>
              <th className="models__width models__border">Ширина</th>
              <th className="models__thickness models__border">Толщина</th>
              <th className="models__processor models__border">Чип</th>
              <th className="models__memory models__border">Объем памяти</th>
              <th className="models__battery models__bottom-border">Аккумулятор</th>
            </tr>
          </thead>
          <tbody>
            <tr className="models__table1 models__hover">
              <td className="models__cell models__model models__right-border">IPhone 11</td>
              <td className="models__cell models__weight models__right-border">194 грамма</td>
              <td className="models__cell models__height models__right-border">150.9 мм</td>
              <td className="models__cell models__width models__right-border">75.7 мм</td>
              <td className="models__cell models__thickness models__right-border">8.3 мм</td>
              <td className="models__cell models__processor models__right-border">A13 Bionic chip</td>
              <td className="models__cell models__memory models__right-border">до 128 Гб</td>
              <td className="models__cell models__battery">до 17 часов</td>
            </tr>
            <tr className="models__table2 models__hover">
              <td className="models__cell models__model models__right-border">IPhone 12</td>
              <td className="models__cell models__weight models__right-border">164 грамма</td>
              <td className="models__cell models__height models__right-border">146.7 мм</td>
              <td className="models__cell models__width models__right-border">71.5 мм</td>
              <td className="models__cell models__thickness models__right-border">7.4 мм</td>
              <td className="models__cell models__processor models__right-border">A14 Bionic chip</td>
              <td className="models__cell models__memory models__right-border">до 256 Гб</td>
              <td className="models__cell models__battery">до 19 часов</td>
            </tr>
            <tr className="models__table3 models__hover">
              <td className="models__cell models__model models__bottom models__right-border">IPhone 13</td>
              <td className="models__cell models__weight models__bottom models__right-border">174 грамма</td>
              <td className="models__cell models__height models__bottom models__right-border">146.7 мм</td>
              <td className="models__cell models__width models__bottom models__right-border">71.5 мм</td>
              <td className="models__cell models__thickness models__bottom models__right-border">7.65 мм</td>
              <td className="models__cell models__processor models__bottom models__right-border">A15 Bionic chip</td>
              <td className="models__cell models__memory models__bottom models__right-border">до 512 Гб</td>
              <td className="models__cell models__battery models__bottom">до 19 часов</td>
            </tr>
          </tbody>
        </table>
      </div>


    </div>
      <aside className="sidebar">
        <div className="important">

          <div className="important__header">
          <div className="important__price">
            <div className="important__oldprice">
              <s className="important__text">75 990₽</s>
              <div className="important__sale">
                <div className="important__saletext"> -8% </div>
              </div>
            </div>
            <span className="important__newprice">67 990₽</span>
          </div>
          <div className="important-heart">
          </div>

          </div>
          
          <div className="important__delivery">
            <div className="important__pickup">Самовывоз в четверг, 1 сентября — <b>бесплатно</b></div>
            <div className="important__pickup">Курьером в четверг, 1 сентября — <b>бесплатно</b></div>
          </div>

          <button className="btn button-backet button-backet--cart add" id="addcart" data-id="iphone">
          <span className="button-backet__add">Добавить в корзину</span>
          </button>
        </div>

        <div className="ads">
          <div className="ads__item">Реклама</div>
          <div className="ads__list">
            <iframe className="ads__element" src="./ads.html"></iframe>
            <iframe className="ads__element" src="./ads.html"></iframe>
          </div>
        </div>
      </aside>

      </div>














<div className="review-section">

  <div className="review-section__header">
  <div className="review-section__wrapper">
    <span className="review-section__title">Отзывы</span>
    <span className="review-section__count">425</span>
  </div>
  </div>

<div className="review-section__list">

  <div className="review-first">
    <img className="review-photo" src="./assets/avatars/review-1.jpeg" alt="Фото"/>
    <div className="review-wrapper">
      <div className="review-header">
        <div className="review-username">Марк Г.</div>
        
        <div className="review-rating">
          <div className="full-stars">
            <div className="rating-group">

                <input name="review__first" value="0" type="radio" disabled checked/>
                

                <label for="review__first-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/></svg>
                </label>
                <input name="review__first" id="review__first-1" value="1" type="radio"/>
                

                <label for="review__first-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/></svg>
                </label>
                <input name="review__first" id="review__first-2" value="2" type="radio"/>
                

                <label for="review__first-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/></svg>
                </label>
                <input name="review__first" id="review__first-3" value="3" type="radio"/>
                

                <label for="review__first-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/></svg>
                </label>
                <input name="review__first" id="review__first-4" value="4" type="radio"/>
                
 
                <label for="review__first-5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/></svg>
                </label>
                <input name="review__first" id="review__first-5" value="5" type="radio"/>
            </div>
        </div>
        </div>

      </div>
      <div className="review-main">
      <div className="review-experience"> <b>Опыт использования:</b> менее месяца</div>
      <div className="review-advantages"><b>Достоинства:</b><br />
        это мой первый айфон после после огромного количества телефонов на андроиде. всё плавно, чётко и красиво. довольно шустрое устройство. камера весьма неплохая,ширик тоже на высоте</div>
      <div className="review-disadvantages"><b>Недостатки:</b><br />
        к самому устройству мало имеет отношение, но перенос данных с андроида - адская вещь, а если нужно переносить фото с компа, то это только через itunes, который урезает качество фотографий исходное</div>
      </div>
    </div>
  </div>


    <div className="reviews-separator"><div className="separator"></div></div>


<div className="review-second">

  <img className="review-photo" src="./assets/avatars/review-2.jpeg" alt="Фото"/>
  <div className="review-wrapper">
    <div className="review-header">
      <div className="review-username"><b>Валерий Коваленко</b></div>
      <div>
        <div className="full-stars">
          <div className="rating-group">
              <input name="review-second" value="0" type="radio" disabled checked/>
              
  
              <label for="review-second-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/></svg>
              </label>
              <input name="review-second" id="review-second-1" value="1" type="radio"/>
              

              <label for="review-second-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/></svg>
              </label>
              <input name="review-second" id="review-second-2" value="2" type="radio"/>
              

              <label for="review-second-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/></svg>
              </label>
              <input name="review-second" id="review-second-3" value="3" type="radio"/>
              
    
              <label for="review-second-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/></svg>
              </label>
              <input name="review-second" id="review-second-4" value="4" type="radio"/>
              
  
              <label for="review-second-5">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/></svg>
              </label>
              <input name="review-second" id="review-second-5" value="5" type="radio"/>
          </div>
      </div>
      </div>
    </div>
    <div className="review-main">
      <div className="review-experience"><b>Опыт использования:</b> менее месяца</div>
      <div className="review-advantages"><b>Достоинства:</b><br />OLED экран, Дизайн, Система камер, Шустрый А15, Заряд держит долго</div>
      <div className="review-disadvantages"><b>Недостатки:</b><br />Плохая ремонтопригодность</div>
    </div>
  </div>
</div>
    </div>
  </div>

  
  







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

        </main>
    </>
  );
};

export default MainContent;
