const SelectButton = ({ selected, memorySize }) => {
    return (
      <button className={selected ? 'btn configuration__button configuration-button--selected' : 'configuration__button'}>
        {memorySize}ГБ
      </button>
    );
  };
  
  export default SelectButton;
  