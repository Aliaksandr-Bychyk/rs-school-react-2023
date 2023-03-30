import React from 'react';
import './Popup.css';

interface IPopupProps {
  isSuccessful: boolean;
}

class Popup extends React.Component<IPopupProps> {
  constructor(props: IPopupProps) {
    super(props);
  }
  render() {
    return this.props.isSuccessful ? (
      <div className="popup-container popup-success">Success! The data has been saved!</div>
    ) : (
      <div className="popup-container popup-fail">Fail! Please check!</div>
    );
  }
}

export default Popup;
