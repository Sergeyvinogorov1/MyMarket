const Colors = () => {
    return (
      <>
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

      </>
    );
  };
  
  export default Colors;