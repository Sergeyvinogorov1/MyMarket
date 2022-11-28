import ColorButton from './ColorButton';

const colorsData = [
  { src: './assets/phone-colors/color-1.webp', id: '1', selected: false },
  { src: './assets/phone-colors/color-2.webp', id: '2', selected: false },
  { src: './assets/phone-colors/color-3.webp', id: '3', selected: false },
  { src: './assets/phone-colors/color-4.webp', id: '4', selected: false },
  { src: './assets/phone-colors/color-5.webp', id: '5', selected: false },
  { src: './assets/phone-colors/color-6.webp', id: '6', selected: true },
];

const ColorSelect = () => {
  return (
    <div className="characterics__color">

      <div className="characterics__head">Цвет товара: синий</div>
        <div className="characterics__list">
          {colorsData &&
            colorsData.map((color) => {
              return <ColorButton key={color.id} selected={color.selected} src={color.src} />;
            })}
        </div>

    </div>
  );
};

export default ColorSelect;
