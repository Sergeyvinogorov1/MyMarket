import React from 'react';
import ColorButton from './ColorButton';

const colorsData = [
  { src: './assets/phone-colors/color-1.webp', id: '1'},
  { src: './assets/phone-colors/color-2.webp', id: '2'},
  { src: './assets/phone-colors/color-3.webp', id: '3'},
  { src: './assets/phone-colors/color-4.webp', id: '4'},
  { src: './assets/phone-colors/color-5.webp', id: '5'},
  { src: './assets/phone-colors/color-6.webp', id: '6'},
];

const ColorSelect = () => {
  const [currentSelect, setCurrentSelect] = React.useState('0');

  const selectColor = (id) => {
    setCurrentSelect(id);
  };

  return (
    <div className="characterics__color">

      <div className="characterics__head">Цвет товара: синий</div>
        <div className="characterics__list">
          {colorsData &&
            colorsData.map((color) => {
              return (
                <ColorButton
                  key={color.id}
                  id={color.id}
                  selected={currentSelect === color.id}
                  src={color.src}
                  selectColor={selectColor}
                />
              );
            })}
        </div>
      </div>
  );
};

export default ColorSelect;
