import styled from 'styled-components';

const Breadcrumbs = () => {
  const Navigation = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  
  position: absolute;
  width: 580px;
  height: 35px;
  left: 50px;
  top: 91px;
  `;

  const BredcrumbsLink = styled.a`
  color: #008CF0;
  text-decoration: none;
  `;

  return (
    <>
    <Navigation>
  <div className="breadcrumbs__text">
    <BredcrumbsLink  href="/">Электроника</BredcrumbsLink>
    <span className="breadcrumbs__blacktext"> &gt; </span>
    <BredcrumbsLink  href="/">Смартфоны и гаджеты</BredcrumbsLink>
    <span className="breadcrumbs__blacktext"> &gt; </span>
    <BredcrumbsLink href="/">Мобильные телефоны</BredcrumbsLink>
     <span className="breadcrumbs__blacktext"> &gt; </span>
    <BredcrumbsLink  href="/">Apple</BredcrumbsLink>
  </div>
</Navigation>
    </>
  );
};

export default Breadcrumbs;