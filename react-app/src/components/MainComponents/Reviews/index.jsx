import React from 'react';
import Form from './Form';
import Review from './Review';

const commentsData = [
  {
    id: '1',
    reviewPhoto: './assets/avatars/review-1.jpeg',
    customerName: 'Марк Г.',
    reviewRating: './assets/star-4.png',
    experience: 'менее месяца',
    advantages: `это мой первый айфон после после огромного количества телефонов на андроиде.
                всёплавно, чётко и красиво. довольно шустрое устройство. камера весьма
                неплохая,ширик тоже на высоте.`,
    disadvantages: `к самому устройству мало
          имеет отношение, но перенос данных с андроида - адскаявещь) а если нужно переносить
          фото с компа, то это только через itunes, которыйурезает качество фотографий
          исходное`,
  },
  {
    id: '2',
    reviewPhoto: './assets/avatars/review-2.jpeg',
    customerName: 'Николай Е.',
    reviewRating: './assets/star-5.png',
    experience: '2 месяца',
    advantages: `OLED экран, Дизайн, Система камер, Шустрый А15, Заряд держит долго`,
    disadvantages: `Плохая ремонтопригодность`,
  },
];

const Feedback = () => {
  return (
    <section className="review-section">
      <div className="review-section__header">
        <div className="review-section__wrapper">
          <span className="review-section__title">Отзывы</span>
          <span className="review-section__count">425</span>
        </div>
      </div>
      <div className='review-section__list'>
      
        {commentsData &&
          commentsData.map((comment, index) => {
            return (
              <Review
                key={comment.id}
                reviewPhoto={comment.reviewPhoto}
                customerName={comment.customerName}
                reviewRating={comment.reviewRating}
                experience={comment.experience}
                advantages={comment.advantages}
                disadvantages={comment.disadvantages}
                index={index}
                data={commentsData}

              />
            );
          })}
          
      </div>

      <Form />
    </section>
  );
};

export default Feedback;
