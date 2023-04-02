import React, { FC, useRef, useState } from 'react';
import Header from '../../components/Header/Header';
import FormPersonal from './FormPersonal/FormPersonal';
import FormQuotes from './FormQuotes/FormQuotes';
import FormControl from './FormControl/FormControl';
import FormCard from '../../components/Form/FormCard/FormCard';
import IFormCardData from 'interfaces/IFormCardData';

import './Form.css';
import './FormControl/FormControl.css';
import Popup from '../../components/Popup/Popup';

const Form: FC = () => {
  const formName = useRef<HTMLInputElement>(null);
  const formDate = useRef<HTMLInputElement>(null);
  const formGenderMale = useRef<HTMLInputElement>(null);
  const formGenderFemale = useRef<HTMLInputElement>(null);
  const formFile = useRef<HTMLInputElement>(null);
  const formQuote = useRef<HTMLSelectElement>(null);
  const formSubscribe = useRef<HTMLInputElement>(null);

  const [cardData, setCardData] = useState<IFormCardData[]>([]);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [isSuccessPopup, setIsSuccessPopup] = useState<boolean>(false);
  const [isValidFormName, setIsValidFormName] = useState<boolean>(true);
  const [isValidFormDate, setIsValidFormDate] = useState<boolean>(true);
  const [isValidFormFile, setIsValidFormFile] = useState<boolean>(true);

  const checkGender = () => {
    if (formGenderMale.current!.checked) {
      return formGenderMale.current!.value;
    }
    return formGenderFemale.current!.value;
  };

  const resetForm = () => {
    formName.current!.value = '';
    formDate.current!.value = '';
    formGenderMale.current!.checked = true;
    formFile.current!.value = '';
    formQuote.current!.value = 'alan';
    formSubscribe.current!.checked = false;
  };

  const handleValidation = async () => {
    let isValid = false;
    let isValidFormName = false;
    let isValidFormDate = false;
    let isValidFormFile = false;
    const date = new Date(formDate.current!.value);
    const fileTypes = ['image/gif', 'image/png', 'image/jpeg'];
    setIsValidFormName(false);
    setIsValidFormDate(false);
    setIsValidFormFile(false);
    if (
      formName.current?.value &&
      formName.current!.value[0] === formName.current!.value[0].toUpperCase()
    ) {
      isValidFormName = true;
    }
    if (formDate.current?.value && date < new Date()) {
      isValidFormDate = true;
    }
    if (formFile.current?.files![0] && fileTypes.includes(formFile.current?.files![0].type)) {
      isValidFormFile = true;
    }
    isValid = isValidFormDate && isValidFormFile && isValidFormName;
    await setIsValidFormName(isValidFormName);
    await setIsValidFormDate(isValidFormDate);
    await setIsValidFormFile(isValidFormFile);
    return isValid;
  };

  const handleSubmit = async () => {
    if (await handleValidation()) {
      const obj: IFormCardData = {
        name: formName.current!.value,
        birthday: formDate.current!.value,
        gender: checkGender(),
        picture: formFile.current!.files![0],
        quote: formQuote.current!.value,
        isSubscribed: formSubscribe.current!.checked,
      };
      setCardData([obj, ...cardData]);
      setShowPopup(true);
      setIsSuccessPopup(true);
      resetForm();
      setTimeout(() => {
        setShowPopup(false);
      }, 3000);
    } else {
      setIsSuccessPopup(false);
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 3000);
    }
  };

  return (
    <>
      <Header title="Form" />
      <div className="page-container">
        <form
          className="form-container"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <FormPersonal
            formRef={{
              formName,
              formDate,
              formGenderMale,
              formGenderFemale,
              formFile,
            }}
            isValidFormName={isValidFormName}
            isValidFormDate={isValidFormDate}
            isValidFormFile={isValidFormFile}
          />
          <FormQuotes formRef={formQuote} />
          <FormControl formRef={formSubscribe} handleSubmit={handleSubmit} />
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
