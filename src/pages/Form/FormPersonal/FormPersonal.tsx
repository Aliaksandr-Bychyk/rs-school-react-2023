import React, { FC } from 'react';
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

const FormPersonal: FC<IFormPerosnalProps> = ({
  formRef,
  isValidFormName,
  isValidFormDate,
  isValidFormFile,
}) => {
  return (
    <div className="form-personal-container">
      <LabeledInput label="Name:" params={{ type: 'text', ref: formRef.formName }} />
      {isValidFormName || (
        <span className="not-valid">
          Field should not be empty and it should start with capital letter!
        </span>
      )}
      <LabeledInput label="Birthday:" params={{ type: 'date', ref: formRef.formDate }} />
      {isValidFormDate || (
        <span className="not-valid">Field should not be empty and less then current date!</span>
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
            ref: formRef.formGenderMale,
          }}
          isReversed={true}
        />
        <LabeledInput
          label="Female:"
          params={{
            type: 'radio',
            name: 'gender',
            value: 'female',
            ref: formRef.formGenderFemale,
          }}
          isReversed={true}
        />
      </div>
      <LabeledInput label="Profile picture:" params={{ type: 'file', ref: formRef.formFile }} />
      {isValidFormFile || <span className="not-valid">You should upload an image file!</span>}
    </div>
  );
};

export default FormPersonal;
