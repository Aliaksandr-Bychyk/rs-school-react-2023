import React, { FC } from 'react';
import './FormQuotes.css';
import { UseFormRegister } from 'react-hook-form';
import IFormCardData from 'interfaces/IFormCardData';

interface IFormQuotesProps {
  formRef: UseFormRegister<IFormCardData>;
}

const FormQuotes: FC<IFormQuotesProps> = ({ formRef }) => {
  return (
    <div className="form-quotes-container">
      <label>
        Favorite quote:&nbsp;
        <select {...formRef('quote')}>
          <option value="alan">Alan Shepard</option>
          <option value="neli">Neil Armstrong</option>
          <option value="sally">Sally Ride</option>
          <option value="doug">Doug Hurley</option>
          <option value="john">John Swigert</option>
        </select>
      </label>
    </div>
  );
};

export default FormQuotes;
