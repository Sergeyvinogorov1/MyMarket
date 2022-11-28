import SelectButton from './SelectButton';

const selectConfig = [
  { id: '1', memorySize: '128', selected: true },
  { id: '2', memorySize: '256', selected: false },
  { id: '3', memorySize: '512', selected: false },
  
];
const MemoryFilter = () => {
  return (
    <div className="configuration">
<div className="configuration__header">Конфигурация памяти: 128 ГБ</div>
<div className="configuration__buttons">
        {selectConfig &&
          selectConfig.map((btn) => {
            return (
              <SelectButton key={btn.id} selected={btn.selected} memorySize={btn.memorySize} />
              
            );
          })}
      </div>
    </div>
  );
};

export default MemoryFilter;
