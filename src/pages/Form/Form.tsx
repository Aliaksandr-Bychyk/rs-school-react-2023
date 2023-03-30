import React, { createRef } from 'react';
import Header from '../../components/Header/Header';
import FormPersonal from './FormPersonal/FormPersonal';
import FormQuotes from './FormQuotes/FormQuotes';
import FormControl from './FormControl/FormControl';
import FormCard from '../../components/Form/FormCard/FormCard';
import IFormCardData from 'interfaces/IFormCardData';

import './Form.css';
import './FormControl/FormControl.css';
import Popup from '../../components/Popup/Popup';

interface IFormState {
  cardData: IFormCardData[];
  showPopup: boolean;
  isSuccessPopup: boolean;
  isValidFormName: boolean;
  isValidFormDate: boolean;
  isValidFormFile: boolean;
}

class Form extends React.Component<object, IFormState> {
  formName: React.RefObject<HTMLInputElement>;
  formDate: React.RefObject<HTMLInputElement>;
  formGenderMale: React.RefObject<HTMLInputElement>;
  formGenderFemale: React.RefObject<HTMLInputElement>;
  formFile: React.RefObject<HTMLInputElement>;
  formQuote: React.RefObject<HTMLSelectElement>;
  formSubscribe: React.RefObject<HTMLInputElement>;

  constructor(props: object) {
    super(props);
    this.formName = createRef();
    this.formDate = createRef();
    this.formGenderMale = createRef();
    this.formGenderFemale = createRef();
    this.formFile = createRef();
    this.formQuote = createRef();
    this.formSubscribe = createRef();
    this.state = {
      cardData: [],
      showPopup: false,
      isSuccessPopup: false,
      isValidFormName: true,
      isValidFormDate: true,
      isValidFormFile: true,
    };
  }
  checkGender() {
    if (this.formGenderMale.current!.checked) {
      return this.formGenderMale.current!.value;
    }
    return this.formGenderFemale.current!.value;
  }

  resetForm() {
    this.formName.current!.value = '';
    this.formDate.current!.value = '';
    this.formGenderMale.current!.checked = true;
    this.formFile.current!.value = '';
    this.formQuote.current!.value = 'alan';
    this.formSubscribe.current!.checked = false;
  }

  async handleValidation() {
    let isValid = false;
    let isValidFormName = false;
    let isValidFormDate = false;
    let isValidFormFile = false;
    const date = new Date(this.formDate.current!.value);
    const fileTypes = ['image/gif', 'image/png', 'image/jpeg'];
    this.setState({ isValidFormName: false, isValidFormDate: false, isValidFormFile: false });
    if (
      this.formName.current?.value &&
      this.formName.current!.value[0] === this.formName.current!.value[0].toUpperCase()
    ) {
      isValidFormName = true;
    }
    if (this.formDate.current?.value && date < new Date()) {
      isValidFormDate = true;
    }
    if (
      this.formFile.current?.files![0] &&
      fileTypes.includes(this.formFile.current?.files![0].type)
    ) {
      isValidFormFile = true;
    }
    isValid = isValidFormDate && isValidFormFile && isValidFormName;
    await this.setState({
      isValidFormName: isValidFormName,
      isValidFormDate: isValidFormDate,
      isValidFormFile: isValidFormFile,
    });
    return isValid;
  }

  async handleSubmit() {
    if (await this.handleValidation()) {
      const obj: IFormCardData = {
        name: this.formName.current!.value,
        birthday: this.formDate.current!.value,
        gender: this.checkGender(),
        picture: this.formFile.current!.files![0],
        quote: this.formQuote.current!.value,
        isSubscribed: this.formSubscribe.current!.checked,
      };
      this.setState({
        cardData: [obj, ...this.state.cardData],
        showPopup: true,
        isSuccessPopup: true,
      });
      this.resetForm();
      setTimeout(() => {
        this.setState({ showPopup: false });
      }, 3000);
    } else {
      this.setState({ isSuccessPopup: false, showPopup: true });
      setTimeout(() => {
        this.setState({ showPopup: false });
      }, 3000);
    }
  }

  render() {
    return (
      <>
        <Header title="Form" />
        <div className="page-container">
          <form className="form-container">
            <FormPersonal
              formRef={{
                formName: this.formName,
                formDate: this.formDate,
                formGenderMale: this.formGenderMale,
                formGenderFemale: this.formGenderFemale,
                formFile: this.formFile,
              }}
              isValidFormName={this.state.isValidFormName}
              isValidFormDate={this.state.isValidFormDate}
              isValidFormFile={this.state.isValidFormFile}
            />
            <FormQuotes formRef={this.formQuote} />
            <FormControl formRef={this.formSubscribe} handleSubmit={() => this.handleSubmit()} />
          </form>
          <div className="form-cards-container">
            {this.state.cardData.map((el, index) => (
              <FormCard key={index} data={el} />
            ))}
          </div>
        </div>
        {this.state.showPopup && <Popup isSuccessful={this.state.isSuccessPopup} />}
      </>
    );
  }
}

export default Form;
