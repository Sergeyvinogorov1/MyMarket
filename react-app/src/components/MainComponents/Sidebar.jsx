import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { ADD_TO_CART, CLEAR_CART } from '../../redux/cartSlice';
import { ADD_TO_FAVORITE, CLEAR_FAVORITE } from '../../redux/favoriteSlice';

const storage = window.localStorage;

const SideBar = () => {
  const dispatch = useDispatch();
  const cartCount = useSelector((state) => state.cart.cartItemsCount);
  const favoriteCount = useSelector((store) => store.favorite.favoriteCount);

  const addToCart = async () => {
    if (cartCount === 0) {
      dispatch(ADD_TO_CART());
    } else {
      dispatch(CLEAR_CART());
    }
    
  };

  const addToFavorite = () => {
    if (favoriteCount === 0) {
      dispatch(ADD_TO_FAVORITE());
    } else {
      dispatch(CLEAR_FAVORITE());
    }
  };


  

  useEffect(() => {
    storage.setItem('cartCount', cartCount);
  }, [cartCount]);

  useEffect(() => {
    storage.setItem('favoriteCount', favoriteCount);
  }, [favoriteCount]);

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

<div onClick={addToFavorite} className="important-heart">
              <svg
                width="28"
                height="22"
                viewBox="0 0 28 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.78502 2.57269C5.17872 0.27474 9.04661 0.27474 11.4403 2.57269L14.0001 5.03017L16.56 2.57269C18.9537 0.27474 22.8216 0.27474 25.2154 2.57269C27.609 4.87064 27.609 8.5838 25.2154 10.8818L14.0001 21.6483L2.78502 10.8818C0.391321 8.5838 0.391321 4.87064 2.78502 2.57269ZM9.67253 4.26974C8.25515 2.90905 5.97018 2.90905 4.55278 4.26974C3.1354 5.63044 3.1354 7.82401 4.55278 9.18476L14.0001 18.2542L23.4476 9.18476C24.865 7.82401 24.865 5.63044 23.4476 4.26974C22.0302 2.90905 19.7452 2.90905 18.3279 4.26974L14.0001 8.42432L9.67253 4.26974Z"
                  fill={favoriteCount > 0 ? 'red' : '#888888'}
                />
              </svg>
            </div>
</div>



<div className="important__delivery">
  <div className="important__pickup">Самовывоз в четверг, 1 сентября — <b>бесплатно</b></div>
  <div className="important__pickup">Курьером в четверг, 1 сентября — <b>бесплатно</b></div>
</div>

<button             onClick={addToCart}
            className={
              cartCount > 0
                ? ('button-backet--cart') && ('button-backet phone-price__added-cart2  button-primary-added')
                : ('button-backet--cart') && ('button-backet phone-price__added-cart button-backet--cart button-primary')
            }>
            {cartCount > 0 ? 'Товар уже в корзине' : 'Добавить в корзину'}
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
  
  export default SideBar;
