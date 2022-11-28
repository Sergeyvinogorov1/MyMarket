import { useState } from 'react';

import SelectButton from './SelectButton';

const selectConfig = [
  { id: '1', memorySize: '128'},
  { id: '2', memorySize: '256'},
  { id: '3', memorySize: '512'},
  
];

const MemoryFilter = () => {
  const [selectMemory, setSelectMemory] = useState('0');

  const changeMemory = (id) => {
    setSelectMemory(id);
  };

  return (
    <div className="configuration">
      <div className="configuration__header">Конфигурация памяти: 128 ГБ</div>
      <div className="configuration__buttons">
        {selectConfig &&
          selectConfig.map((btn) => {
            return (
              <SelectButton
                key={btn.id}
                id={btn.id}
                selected={selectMemory === btn.id}
                memorySize={btn.memorySize}
                changeMemory={changeMemory}
              />
            );
          })}
      </div>
    </div>
  );
};

export default MemoryFilter;
