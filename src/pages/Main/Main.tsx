import React, { FC, useState } from 'react';
import cards from '../../data/cards';
import Card from '../../components/Card/Card';
import Header from '../../components/Header/Header';
import SearchBar from '../../components/SearchBar/SearchBar';
import ICardData from '../../interfaces/ICardData';
import './Main.css';

const Main: FC = () => {
  const [items] = useState<ICardData[]>(cards);
  return (
    <>
      <Header title="Main" />
      <SearchBar />
      <div className="post-container">
        {items.map((el, index) => (
          <Card key={index} data={el as ICardData} />
        ))}
      </div>
    </>
  );
};

export default Main;
