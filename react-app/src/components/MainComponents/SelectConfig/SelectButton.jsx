const SelectButton = ({ selected, memorySize, id, changeMemory}) => {
    return (
      <button
      onClick={() => changeMemory(id)}
       className={selected ? 'btn configuration__button configuration-button--selected' : 'configuration__button'}>
        {memorySize}ГБ
      </button>
    );
  };
  
  export default SelectButton;
  