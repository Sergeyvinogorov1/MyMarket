const Configs = () => {
    return (
      <>
<div className="configuration">
<div className="configuration__header">Конфигурация памяти: 128 ГБ</div>
<div className="configuration__buttons">
<button className="btn configuration__button configuration-button--selected">
  <span className="button-text">128 ГБ</span>
</button>
<button className="btn configuration__button2">
  <span className="button-text">256 ГБ</span>
</button>
<button className="btn configuration__button">
  <span className="button-text">512 ГБ</span>
</button>
</div>
</div>
      </>
    );
  };
  export default Configs;


