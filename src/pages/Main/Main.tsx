import React, { FC, useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
import Header from '../../components/Header/Header';
import SearchBar from '../../components/SearchBar/SearchBar';
import ICardData from '../../interfaces/ICardData';
import './Main.css';

const Main: FC = () => {
  const [items, setItems] = useState<ICardData[]>();
  useEffect(() => {
    fetch('https://api.spaceflightnewsapi.net/v3/articles?_limit=20')
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
      });
  }, []);

  return (
    <>
      <Header title="Main" />
      <SearchBar />
      <div className="post-container">
        {items && items.map((el, index) => <Card key={index} data={el as ICardData} />)}
      </div>
    </>
  );
};

export default Main;
