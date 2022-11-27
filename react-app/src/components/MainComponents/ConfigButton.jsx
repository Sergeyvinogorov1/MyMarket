const ConfigButton = ({ selected, memorySize }) => {
    return (
      <button className={selected ? 'filter__memory-item radio-select' : 'filter__memory-item'}>
        {memorySize}ГБ
      </button>
    );
  };
  
  export default ConfigButton;
  