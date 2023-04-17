import React, { FC, useState } from 'react';
import Header from '../../components/Header/Header';
import FormPersonal from './FormPersonal/FormPersonal';
import FormQuotes from './FormQuotes/FormQuotes';
import FormControl from './FormControl/FormControl';
import FormCard from '../../components/Form/FormCard/FormCard';
import IFormCardData from 'interfaces/IFormCardData';

import './Form.css';
import './FormControl/FormControl.css';
import Popup from '../../components/Popup/Popup';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { addFromCard } from '../../redux/formCardSlice';

const Form: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormCardData>({ reValidateMode: 'onSubmit' });

  const formCard = useSelector((state: RootState) => state['from-card'].value);
  const dispatch = useDispatch();
  const [cardData, setCardData] = useState<IFormCardData[]>(formCard);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [isSuccessPopup, setIsSuccessPopup] = useState<boolean>(false);

  const onValid = (data: IFormCardData) => {
    const obj: IFormCardData = {
      name: data.name,
      birthday: data.birthday,
      gender: data.gender,
      picture: data.file![0],
      quote: data.quote,
      isSubscribed: data.isSubscribed,
    };
    dispatch(addFromCard(obj));
    setCardData([obj, ...cardData]);
    setShowPopup(true);
    setIsSuccessPopup(true);
    reset();
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  const onInvalid = () => {
    setIsSuccessPopup(false);
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <>
      <Header title="Form" />
      <div className="page-container">
        <form className="form-container" onSubmit={handleSubmit(onValid, onInvalid)}>
          <FormPersonal formRef={register} formError={errors} />
          <FormQuotes formRef={register} />
          <FormControl formRef={register} />
        </form>
        <div className="form-cards-container">
          {cardData.map((el, index) => (
            <FormCard key={index} data={el} />
          ))}
        </div>
      </div>
      {showPopup && <Popup isSuccessful={isSuccessPopup} />}
    </>
  );
};

export default Form;
