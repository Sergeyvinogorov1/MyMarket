const ReviewSection = ({
    reviewPhoto,
    customerName,
    reviewRating,
    experience,
    advantages,
    disadvantages,
    index,
    data,
  }) => {
    return (
      <>
      <div className="review-section__list">
        <div className="review-first">
          <div>
            <img className="review-photo" src={reviewPhoto} alt="" width="200" height="200" />
          </div>
          <div className="review-wrapper">
            <div className="review-header">
            <div className="review-username">{customerName}</div>
  
            <div className="review-rating">

              <img src={reviewRating} alt="" className="review-rate"/>
              </div>
            </div>
  
            <div className="review-main">
              <div className="review-experience">
                <b>Опыт использования:</b> <span>{experience}</span>
              </div>
              <div className="review-advantages">
                <div><b>Достоинства:</b></div>
                {advantages}
              </div>
              <div className="review-disadvantages">
                <div><b>Недостатки:</b></div>
                {disadvantages}
              </div>
            </div>
          </div>
        </div>
  
        {index === data.length - 1 ? '' : <div className="reviews-separator"><div className="separator"></div></div>}
        </div>
      </>
    );
  };
  
  export default ReviewSection;