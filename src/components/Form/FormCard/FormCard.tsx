import quotes, { IQuoute } from '../../../data/quotes';
import IFormCardData from 'interfaces/IFormCardData';
import React from 'react';
import './FormCard.css';

interface IFormProps {
  data: IFormCardData;
}

class FormCard extends React.Component<IFormProps> {
  constructor(props: IFormProps) {
    super(props);
  }
  render() {
    const { name, birthday, gender, picture, quote, isSubscribed } = this.props.data;
    return (
      <div className="form-card-container">
        <p className="form-card-title">
          {name} ({gender}, {birthday}) share with {gender === 'male' ? 'his' : 'her'} favorite
          quote:
        </p>
        <div className="form-quote-container">
          <h2 className="form-quote">{`"${quotes[quote as keyof IQuoute].quote}"`}</h2>
          <span className="form-quote-author">{`- ${quotes[quote as keyof IQuoute].name}`}</span>
        </div>
        <div className="form-quote-info-container">
          <span className="card-info-author">
            {name} is {isSubscribed ? 'subscribed' : 'not subscribed'} for news
          </span>
          <span className="card-info-author">Picture: {picture}</span>
        </div>
      </div>
    );
  }
}

export default FormCard;
