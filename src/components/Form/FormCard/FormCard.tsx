import quotes, { IQuoute } from '../../../data/quotes';
import IFormCardData from 'interfaces/IFormCardData';
import React, { FC } from 'react';
import './FormCard.css';

interface IFormProps {
  data: IFormCardData;
}

const FormCard: FC<IFormProps> = ({ data }) => {
  const { name, birthday, gender, picture, quote, isSubscribed } = data;
  return (
    <div className="form-card-container">
      <div className="form-card-profile">
        <img className="form-card-picture" src={window.URL.createObjectURL(picture)} alt={name} />
        <p className="form-card-title">
          {name} ({gender}, {birthday}) share with {gender === 'male' ? 'his' : 'her'} favorite
          quote:
        </p>
      </div>
      <div className="form-quote-container">
        <h2 className="form-quote">{`"${quotes[quote as keyof IQuoute].quote}"`}</h2>
        <span className="form-quote-author">{`- ${quotes[quote as keyof IQuoute].name}`}</span>
      </div>
      <div className="form-quote-info-container">
        <span className="card-info-author">
          {name} is {isSubscribed ? 'subscribed' : 'not subscribed'} for news
        </span>
      </div>
    </div>
  );
};

export default FormCard;
