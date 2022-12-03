import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

const Header = () => {
  const cartCounts = useSelector((state) => state.cart.cartItemsCount);
  const favoriteCount = useSelector((store) => store.favorite.favoriteCount);

  return (
    <>
  <header className="header-box">
    <div className="header-box__main">
    <Link style={{color: 'black'}} to="/">
      <div className="logo">
        <img src="./assets/icon-0.svg" width="36.5" height="43" alt="Логотип" />
      </div>
    
    <div className="header-box__text">
      <div className="header-box__name"><span className="header-box__color">Мой</span>Маркет</div>
    </div>
    </Link>
  </div>
  <div className="header-box__icons">
    <div className="heart-icon">
    

          {favoriteCount > 0 ? <div className="icon-text__heart heart">{favoriteCount}</div> : ''}
          </div>
          <svg
                className="icon-heart"
                width="43"
                height="35"
                viewBox="0 0 28 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.78502 2.57269C5.17872 0.27474 9.04661 0.27474 11.4403 2.57269L14.0001 5.03017L16.56 2.57269C18.9537 0.27474 22.8216 0.27474 25.2154 2.57269C27.609 4.87064 27.609 8.5838 25.2154 10.8818L14.0001 21.6483L2.78502 10.8818C0.391321 8.5838 0.391321 4.87064 2.78502 2.57269ZM9.67253 4.26974C8.25515 2.90905 5.97018 2.90905 4.55278 4.26974C3.1354 5.63044 3.1354 7.82401 4.55278 9.18476L14.0001 18.2542L23.4476 9.18476C24.865 7.82401 24.865 5.63044 23.4476 4.26974C22.0302 2.90905 19.7452 2.90905 18.3279 4.26974L14.0001 8.42432L9.67253 4.26974Z"
                  fill="#888888"
                />
              </svg>

    <div className="cart-icon">
    

           {cartCounts > 0 ? <div className="icon-text__cart cart">{cartCounts}</div> : ''}

          <div className="icon-cart"></div>
    </div>
      </div>
  </header>
    </>
  );
};

export default Header;
