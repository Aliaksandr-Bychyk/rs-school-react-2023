import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import Card from '../../components/Card/Card';
import Header from '../../components/Header/Header';
import SearchBar from '../../components/SearchBar/SearchBar';
import ICardData from '../../interfaces/ICardData';
import CardStatus from '../../components/CardStatus/CardStatus';
import CardPopup from '../../components/CardPopup/CardPopup';
import './Main.css';
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';
import { useGetAPINewsQuery } from '../../redux/apiSlice';

const Main: FC = () => {
  const searchText = useSelector((state: RootState) => state['search-text'].value);
  const [valueUrl, setValueUrl] = useState(searchText);
  const { register, handleSubmit, setValue } = useForm<{ 'search-bar': string }>();
  const [cardPopupData, setCardPopupData] = useState<ICardData>();
  const [showCardPopup, setShowCardPopup] = useState(false);

  const { data = [], isFetching, error, isLoading } = useGetAPINewsQuery(valueUrl);

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
      {error ? (
        <CardStatus title="There is some error..." />
      ) : isLoading || isFetching ? (
        <CardStatus title="Loading content..." />
      ) : (
        data && (
          <div className="post-container">
            {data!.map((el, index) => (
              <Card key={index} data={el as ICardData} onClick={() => openCardPopup(el)} />
            ))}
          </div>
        )
      )}
      {showCardPopup && <CardPopup data={cardPopupData!} setShowCardPopup={setShowCardPopup} />}
    </>
  );
};

export default Main;
