import ICardData from 'interfaces/ICardData';
import React from 'react';
import './Card.css';

class Card extends React.Component<{ data: ICardData }> {
  constructor(props: { data: ICardData }) {
    super(props);
  }
  render() {
    const { title, imageUrl, newsSite, publishedAt } = this.props.data;
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
  }
}

export default Card;
