import Colors from "./MainComponents/Colors"
import Configs from "./MainComponents/Configs";
import Description from "./MainComponents/Description";
import Important from "./MainComponents/Important";
import Models from "./MainComponents/Models";
import ReviewSection from "./MainComponents/ReviewSection";
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


    <div class="characterics">
      <div class="characterics__main">
        
      <Colors />
      <Configs />
      <Specifications />
      <Description />
      <Models />
    </div>
    <Important />
      </div>
      <ReviewSection />
        </main>
    </>
  );
};

export default MainContent;
