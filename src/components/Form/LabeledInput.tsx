import React, { Component } from 'react';
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

class LabeledInput extends Component<ILabeledInputProps> {
  constructor(props: ILabeledInputProps) {
    super(props);
  }
  render() {
    return (
      <label className={`${this.props.isReversed ? 'reversed' : ''} label-container`}>
        <span className="ldi-label">{this.props.label}</span>
        <input className="ldi-input" {...this.props.params} />
      </label>
    );
  }
}

export default LabeledInput;
