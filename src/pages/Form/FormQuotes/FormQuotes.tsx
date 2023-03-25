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
            <option value="john">John Swigert </option>
          </select>
        </label>
        <textarea className="form-quotes-textarea" rows={4} readOnly></textarea>
      </div>
    );
  }
}

export default FormQuotes;

/*FIX YOUR LITTLE PROBLEM AND LIGHT THIS CANDLE.*/
/* THAT’S ONE SMALL STEP FOR MAN, ONE GIANT LEAP FOR MANKIND. */
/* THE STARS DON’T LOOK BIGGER, BUT THEY DO LOOK BRIGHTER. */
/* CONGRATULATIONS, SPACEX, YOU GOT THE FLAG. */
/* HOUSTON, WE’VE HAD A PROBLEM HERE */
