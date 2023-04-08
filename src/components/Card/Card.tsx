import React, { FC } from 'react';
import ICardData from 'interfaces/ICardData';
import './Card.css';

interface ICardProps {
  data: ICardData;
}

const Card: FC<ICardProps> = ({ data }) => {
  const { title, imageUrl, newsSite, publishedAt } = data;
  return (
    <div className="card-container">
      <img
        className="card-image"
        src={imageUrl}
        alt={title}
        width="300"
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src =
            'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png';
        }}
      />
      <p className="card-title">{title}</p>
      <div className="card-info">
        <span className="card-info-author">{newsSite}</span>
        <span className="card-info-date">{publishedAt.slice(0, 10)}</span>
      </div>
    </div>
  );
};

export default Card;
