import React, { FC } from 'react';
import './LabeledInput.css';

interface ILabeledInputProps extends Object {
  label: string;
  params: {
    type: 'text' | 'date' | 'radio' | 'checkbox' | 'file';
    name?: string;
    value?: string;
    defaultChecked?: boolean;
    ref?: React.RefObject<HTMLInputElement>;
  };
  isReversed?: boolean;
}

const LabeledInput: FC<ILabeledInputProps> = ({ label, params, isReversed }) => {
  return (
    <label className={`${isReversed ? 'reversed' : ''} label-container`}>
      <span className="ldi-label">{label}</span>
      <input className="ldi-input" {...params} />
    </label>
  );
};

export default LabeledInput;
