import React from 'react';

const Footer = () => {
  return (
    <>
  <footer className="footer">
    <div className="footer__main">
  <div className="footer__my">© ООО «<span className="footer__color">Мой</span>Маркет», 2018-2022.
  <br /><span className="footer__paragraph">Для уточнения информации звоните по номеру <a className="link" href="tel:+79000000000">+7 900 000 0000</a>,
  <br />а предложения по сотрудничеству отправляйте на почту <a className="link" href="mailto:partner@mymarket.com">partner@mymarket.com</a></span></div>
  <span className="footer__up"><span><a className="link" href="#top">Наверх</a></span></span>
  </div>
  </footer>
    </>
  );
};

export default Footer;
