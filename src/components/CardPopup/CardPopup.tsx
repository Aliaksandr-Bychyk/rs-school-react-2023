import React, { FC } from 'react';
import './CardPopup.css';
import ICardData from '../../interfaces/ICardData';

interface ICardPopupPros {
  data: ICardData;
  setShowCardPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

const CardPopup: FC<ICardPopupPros> = ({ data, setShowCardPopup }) => {
  const closePopup = () => {
    setShowCardPopup(false);
  };
  return (
    <div className="overlay" onClick={closePopup}>
      <div className="card-popup-content" onClick={(e) => e.stopPropagation()}>
        <img
          className="card-image"
          src={data.imageUrl}
          alt={data.title}
          width="300"
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src =
              'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png';
          }}
        />
        <h1 className="card-popup-title">{data.title}</h1>
        <p className="card-popup-summary">{data.summary}</p>
        <div className="card-info">
          <a className="card-info-author" href={data.url} target="_blank" rel="noreferrer">
            {data.newsSite}
          </a>
          <span className="card-info-date">{data.publishedAt.slice(0, 10)}</span>
        </div>
        <input className="card-popup-close" type="button" onClick={closePopup} alt="Close" />
      </div>
    </div>
  );
};

export default CardPopup;
