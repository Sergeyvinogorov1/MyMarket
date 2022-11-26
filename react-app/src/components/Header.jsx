const Header = () => {
  return (
    <>
  <header className="header-box">
    <div className="header-box__main">
      <div className="logo">
        <img src="./assets/icon-0.svg" width="36.5" height="43" alt="Логотип" />
      </div>
    
    <div className="header-box__text">
      <div className="header-box__name"><span className="header-box__color">Мой</span>Маркет</div>
    </div>
  </div>
  <div className="header-box__icons">
    <div className="heart-icon">
          <div className="heart">
            <span className="icon-text__heart">12</span>
          </div>
          <div className="icon-heart"></div>
    </div>
    <div className="cart-icon">
          <div className="cart">
            <span className="icon-text__cart">3</span>
          </div>
          <div className="icon-cart"></div>
    </div>
      </div>
  </header>
    </>
  );
};

export default Header;
