import React, { FC } from 'react';
import LabeledInput from '../../../components/Form/LabeledInput';
import './FormControl.css';
import { UseFormRegister } from 'react-hook-form';
import IFormCardData from 'interfaces/IFormCardData';

interface IFormControlProps {
  formRef: UseFormRegister<IFormCardData>;
}

const FormControl: FC<IFormControlProps> = ({ formRef }) => {
  return (
    <div className="control-container">
      <LabeledInput
        label="Subscribe me for news"
        params={{ type: 'checkbox' }}
        formRef={formRef('isSubscribed')}
      />
      <input className="control-button-submit" type="submit" value="Submit" />
    </div>
  );
};

export default FormControl;
