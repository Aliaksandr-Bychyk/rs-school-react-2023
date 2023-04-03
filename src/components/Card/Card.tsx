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
      <img className="card-image" src={imageUrl} alt={title} width="300" />
      <p className="card-title">{title}</p>
      <div className="card-info">
        <span className="card-info-author">{newsSite}</span>
        <span className="card-info-date">{publishedAt.slice(0, 10)}</span>
      </div>
    </div>
  );
};

export default Card;
