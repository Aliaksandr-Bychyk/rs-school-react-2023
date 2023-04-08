import React, { FC, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Card from '../../components/Card/Card';
import Header from '../../components/Header/Header';
import SearchBar from '../../components/SearchBar/SearchBar';
import ICardData from '../../interfaces/ICardData';
import CardStatus from '../../components/CardStatus/CardStatus';
import getAPINews from '../../api/spaceflightnewsapi';
import CardPopup from '../../components/CardPopup/CardPopup';
import './Main.css';

const Main: FC = () => {
  const [items, setItems] = useState<ICardData[]>();
  const [valueUrl, setValueUrl] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const { register, handleSubmit, setValue } = useForm<{ 'search-bar': string }>();
  const [cardPopupData, setCardPopupData] = useState<ICardData>();
  const [showCardPopup, setShowCardPopup] = useState(false);

  useEffect(() => {
    getAPINews(setItems, setIsLoading, valueUrl);
  }, [valueUrl]);

  const onSubmit = (data: { 'search-bar': string }) => {
    setValueUrl(data['search-bar']);
  };

  const openCardPopup = (el: ICardData) => {
    setCardPopupData(el);
    setShowCardPopup(true);
  };

  return (
    <>
      <Header title="Main" />
      <SearchBar formRef={register} handleOnSumbit={handleSubmit(onSubmit)} setValue={setValue} />
      {isLoading ? (
        <CardStatus title="Loading content..." />
      ) : items!.length > 0 ? (
        <div className="post-container">
          {items!.map((el, index) => (
            <Card key={index} data={el as ICardData} onClick={() => openCardPopup(el)} />
          ))}
        </div>
      ) : (
        <CardStatus title="No content found..." />
      )}
      {showCardPopup && <CardPopup data={cardPopupData!} setShowCardPopup={setShowCardPopup} />}
    </>
  );
};

export default Main;
