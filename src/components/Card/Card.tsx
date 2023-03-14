import ICardData from 'interfaces/ICardData';
import React from 'react';

class Card extends React.Component<{ data: ICardData }> {
  constructor(props: { data: ICardData }) {
    super(props);
  }
  render() {
    const { title, imageUrl, newsSite, publishedAt } = this.props.data;
    return (
      <div>
        <img src={imageUrl} alt={title} width="300" />
        <p>{title}</p>
        <span>{`${newsSite} - ${publishedAt.slice(0, 10)}`}</span>
      </div>
    );
  }
}

export default Card;
