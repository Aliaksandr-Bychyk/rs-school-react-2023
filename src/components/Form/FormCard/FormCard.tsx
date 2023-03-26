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
      <div className="card-container">{`${name} ${birthday} ${gender} ${picture} ${quote} ${isSubscribed}`}</div>
    );
  }
}

export default FormCard;
