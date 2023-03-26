import React, { Component } from 'react';
import './FormQuotes.css';

interface IFormQuotesProps {
  formRef: React.RefObject<HTMLSelectElement>;
}

class FormQuotes extends Component<IFormQuotesProps> {
  constructor(props: IFormQuotesProps) {
    super(props);
  }
  render() {
    return (
      <div className="form-quotes-container">
        <label>
          Favorite quote:&nbsp;
          <select ref={this.props.formRef}>
            <option value="alan">Alan Shepard</option>
            <option value="neli">Neil Armstrong</option>
            <option value="sally">Sally Ride</option>
            <option value="doug">Doug Hurley</option>
            <option value="john">John Swigert</option>
          </select>
        </label>
      </div>
    );
  }
}

export default FormQuotes;
