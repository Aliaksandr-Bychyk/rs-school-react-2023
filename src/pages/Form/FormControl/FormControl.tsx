import React, { FC } from 'react';
import LabeledInput from '../../../components/Form/LabeledInput';
import './FormControl.css';

interface IFormControlProps {
  formRef: React.RefObject<HTMLInputElement>;
  handleSubmit: () => void;
}

const FormControl: FC<IFormControlProps> = ({ formRef, handleSubmit }) => {
  return (
    <div className="control-container">
      <LabeledInput label="Subscribe me for news" params={{ type: 'checkbox', ref: formRef }} />
      <input
        className="control-button-submit"
        type="button"
        value="Submit"
        onClick={handleSubmit}
      />
    </div>
  );
};

export default FormControl;
