import React, { Component } from 'react';
import LabeledInput from '../../../components/Form/LabeledInput';
import './FormControl.css';

interface IFormControlProps {
  formRef: React.RefObject<HTMLInputElement>;
  handleSubmit: () => void;
}

class FormControl extends Component<IFormControlProps> {
  constructor(props: IFormControlProps) {
    super(props);
  }
  render() {
    return (
      <div className="control-container">
        <LabeledInput
          label="Subscribe me for news"
          params={{ type: 'checkbox', ref: this.props.formRef }}
        />
        <input
          className="control-button-submit"
          type="button"
          value="Submit"
          onClick={this.props.handleSubmit}
        />
      </div>
    );
  }
}

export default FormControl;
