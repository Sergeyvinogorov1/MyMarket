

const Models = () => {
    return (
      <>
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
      </>
    );
  };
  
  export default Models;