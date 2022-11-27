

const Important = () => {
    return (
      <>
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
      </>
    );
  };
  
  export default Important;
