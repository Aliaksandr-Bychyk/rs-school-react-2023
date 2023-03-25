import React, { createRef } from 'react';
import Header from '../../components/Header/Header';
import FormPersonal from './FormPersonal/FormPersonal';
import FormQuotes from './FormQuotes/FormQuotes';
import FormControl from './FormControl/FormControl';

import './Form.css';
import './FormControl/FormControl.css';

class Form extends React.Component<object> {
  formName: React.RefObject<HTMLInputElement>;
  formDate: React.RefObject<HTMLInputElement>;
  formGender: React.RefObject<HTMLInputElement>;
  formFile: React.RefObject<HTMLInputElement>;
  formQuote: React.RefObject<HTMLSelectElement>;
  formSubscribe: React.RefObject<HTMLInputElement>;

  constructor(props: object) {
    super(props);
    this.formName = createRef();
    this.formDate = createRef();
    this.formGender = createRef();
    this.formFile = createRef();
    this.formQuote = createRef();
    this.formSubscribe = createRef();
  }
  handleSubmit() {
    console.log({
      name: this.formName.current?.value,
      birthday: this.formDate.current?.value,
      gender: this.formGender.current?.value,
      picture: this.formFile.current?.value,
      quote: this.formQuote.current?.value,
      subscribe: this.formSubscribe.current?.checked,
    });
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
                formGender: this.formGender,
                formFile: this.formFile,
              }}
            />
            <FormQuotes formRef={this.formQuote} />
            <FormControl formRef={this.formSubscribe} handleSubmit={() => this.handleSubmit()} />
          </form>
        </div>
      </>
    );
  }
}

export default Form;
