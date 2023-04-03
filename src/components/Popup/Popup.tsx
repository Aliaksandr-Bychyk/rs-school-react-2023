import React, { FC } from 'react';
import './Popup.css';

interface IPopupProps {
  isSuccessful: boolean;
}

const Popup: FC<IPopupProps> = ({ isSuccessful }) => {
  return isSuccessful ? (
    <div className="popup-container popup-success">Success! The data has been saved!</div>
  ) : (
    <div className="popup-container popup-fail">Fail! Please check!</div>
  );
};

export default Popup;
