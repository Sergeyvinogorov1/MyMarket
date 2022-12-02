import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <main className="main__wrapper">
      <div className="main__content">
    Здесь должно быть содержимое 
    <br className="main__br"/> главной страницы.
    <br className="main__br__1500px"/>Но в рамках курса главная страница используется лишь
    <br className="main__br"/> в демонстрационных целях
</div>
        <Link to="/product" className="link">Перейти на страницу товара</Link>
        </main>

      
    </>
  );
};
export default Home;
