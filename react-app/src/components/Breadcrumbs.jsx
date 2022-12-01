const Breadcrumbs = () => {
  return (
    <>
<nav className="breadcrumbs">
  <div className="breadcrumbs__text">
    <a className="breadcrumbs__link" href="/">Электроника</a>
    <span className="breadcrumbs__blacktext"> &gt; </span>
    <a className="breadcrumbs__link" href="/">Смартфоны и гаджеты</a>
    <span className="breadcrumbs__blacktext"> &gt; </span>
    <a className="breadcrumbs__link" href="/">Мобильные телефоны</a>
     <span className="breadcrumbs__blacktext"> &gt; </span>
    <a className="breadcrumbs__link" href="/">Apple</a>
  </div>
</nav>
    </>
  );
};

export default Breadcrumbs;