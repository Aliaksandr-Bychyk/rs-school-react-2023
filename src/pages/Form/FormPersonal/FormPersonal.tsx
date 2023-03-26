import React, { Component } from 'react';
import LabeledInput from '../../../components/Form/LabeledInput';
import './FormPersonal.css';

interface IFormPerosnalProps {
  formRef: {
    formName: React.RefObject<HTMLInputElement>;
    formDate: React.RefObject<HTMLInputElement>;
    formGenderMale: React.RefObject<HTMLInputElement>;
    formGenderFemale: React.RefObject<HTMLInputElement>;
    formFile: React.RefObject<HTMLInputElement>;
  };
  isValidFormName: boolean;
  isValidFormDate: boolean;
  isValidFormFile: boolean;
}

class FormPersonal extends Component<IFormPerosnalProps> {
  constructor(props: IFormPerosnalProps) {
    super(props);
  }
  render() {
    return (
      <div className="form-personal-container">
        <LabeledInput label="Name:" params={{ type: 'text', ref: this.props.formRef.formName }} />
        {this.props.isValidFormName || (
          <span className="not-valid">
            Field should not be empty and it should start with capital letter!
          </span>
        )}
        <LabeledInput
          label="Birthday:"
          params={{ type: 'date', ref: this.props.formRef.formDate }}
        />
        {this.props.isValidFormDate || (
          <span className="not-valid">Field should not be empty!</span>
        )}
        <div>
          <span>Gender:</span>
          <LabeledInput
            label="Male:"
            params={{
              type: 'radio',
              name: 'gender',
              value: 'male',
              defaultChecked: true,
              ref: this.props.formRef.formGenderMale,
            }}
            isReversed={true}
          />
          <LabeledInput
            label="Female:"
            params={{
              type: 'radio',
              name: 'gender',
              value: 'female',
              ref: this.props.formRef.formGenderFemale,
            }}
            isReversed={true}
          />
        </div>
        <LabeledInput
          label="Profile picture:"
          params={{ type: 'file', ref: this.props.formRef.formFile }}
        />
        {this.props.isValidFormFile || <span className="not-valid">You should upload a file!</span>}
      </div>
    );
  }
}

export default FormPersonal;
