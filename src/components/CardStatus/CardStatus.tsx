import React, { FC } from 'react';
import './CardStatus.css';

interface ICardStatusProps {
  title: string;
}

const CardStatus: FC<ICardStatusProps> = ({ title }) => {
  return <div className="card-status-container">{title}</div>;
};

export default CardStatus;
