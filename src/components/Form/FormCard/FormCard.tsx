import quotes, { IQuoute } from '../../../data/quotes';
import IFormCardData from 'interfaces/IFormCardData';
import React from 'react';

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
      <div className="card-container">
        <span className="card-info-author">File name: {picture}</span>
        <p className="card-title">
          {name}({gender}) - {birthday}
        </p>
        <div className="card-info">
          <span className="card-info-author">{quotes[quote as keyof IQuoute].quote}</span>
          <span className="card-info-date">{quotes[quote as keyof IQuoute].name}</span>
          <span className="card-info-date">{isSubscribed ? 'subscribed' : 'not subscribed'}</span>
        </div>
        <div className="card-container">{`${name} ${birthday} ${gender} ${picture} ${quote} ${isSubscribed}`}</div>
      </div>
    );
  }
}

export default FormCard;
