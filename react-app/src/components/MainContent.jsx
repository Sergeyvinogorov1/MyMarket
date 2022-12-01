import Color from "./MainComponents/SelectColor/Color"
import Configs from "./MainComponents/SelectConfig/Configs";
import Description from "./MainComponents/Description";
import Sidebar from "./MainComponents/Sidebar";
import Models from "./MainComponents/Models";
import Specifications from "./MainComponents/Specifications";

const MainContent = () => {
  return (
    <>
<main>
<div className="title">
      <div className="title__item">Смартфон Apple iPhone 13, синий</div>
    </div>

    <div className="images">
      <img src="./assets/phone-images/image-1.webp" height="387" alt="Общий вид" className="images__phone1"/>
      <img src="./assets/phone-images/image-2.webp" height="387" alt="Лицевая часть" className="images__phone2"/>
      <img src="./assets/phone-images/image-3.webp" height="387" alt="Полубоком" className="images__phone3"/>
      <img src="./assets/phone-images/image-4.webp" height="387" alt="Внешний вид камеры" className="images__phone4"/>
      <img src="./assets/phone-images/image-5.webp" height="387" alt="Телефон с обеих сторон" className="images__phone5"/>
    </div>


    <div className="characterics">
      <div className="characterics__main">
        
      <Color />
      <Configs />
      <Specifications />
      <Description />
      <Models />
    </div>
    <Sidebar />
      </div>
        </main>
    </>
  );
};

export default MainContent;
