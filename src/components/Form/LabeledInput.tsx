import React, { FC } from 'react';
import './LabeledInput.css';
import { UseFormRegisterReturn } from 'react-hook-form';

interface ILabeledInputProps extends Object {
  label: string;
  params: {
    type: 'text' | 'date' | 'radio' | 'checkbox' | 'file';
    name?: string;
    value?: string;
    defaultChecked?: boolean;
  };
  isReversed?: boolean;
  formRef?: UseFormRegisterReturn<string>;
}

const LabeledInput: FC<ILabeledInputProps> = ({ label, params, isReversed, formRef }) => {
  return (
    <label className={`${isReversed ? 'reversed' : ''} label-container`}>
      <span className="ldi-label">{label}</span>
      <input className="ldi-input" {...params} {...formRef} />
    </label>
  );
};

export default LabeledInput;
