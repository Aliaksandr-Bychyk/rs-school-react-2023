import React, { FC, useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
import Header from '../../components/Header/Header';
import SearchBar from '../../components/SearchBar/SearchBar';
import ICardData from '../../interfaces/ICardData';
import './Main.css';
import { useForm } from 'react-hook-form';
import CardStatus from '../../components/CardStatus/CardStatus';
import getAPINews from '../../api/spaceflightnewsapi';

const Main: FC = () => {
  const [items, setItems] = useState<ICardData[]>();
  const [valueUrl, setValueUrl] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const { register, handleSubmit, setValue } = useForm<{ 'search-bar': string }>();

  useEffect(() => {
    getAPINews(setItems, setIsLoading, valueUrl);
  }, [valueUrl]);

  const onSubmit = (data: { 'search-bar': string }) => {
    setValueUrl(data['search-bar']);
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
            <Card key={index} data={el as ICardData} />
          ))}
        </div>
      ) : (
        <CardStatus title="No content found..." />
      )}
    </>
  );
};

export default Main;
