import React, { FC } from 'react';
import LabeledInput from '../../../components/Form/LabeledInput';
import './FormPersonal.css';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import IFormCardData from 'interfaces/IFormCardData';

interface IFormPerosnalProps {
  formRef: UseFormRegister<IFormCardData>;
  formError: FieldErrors<FieldValues>;
}

const FormPersonal: FC<IFormPerosnalProps> = ({ formRef, formError }) => {
  return (
    <div className="form-personal-container">
      <LabeledInput
        label="Name:"
        params={{ type: 'text' }}
        formRef={formRef('name', {
          required: true,
          validate: {
            isFirstUpper: (v) => v[0] === v[0].toUpperCase(),
          },
        })}
      />
      {formError.name && (
        <span className="not-valid">
          Field should not be empty and it should start with capital letter!
        </span>
      )}
      <LabeledInput
        label="Birthday:"
        params={{ type: 'date' }}
        formRef={formRef('birthday', {
          required: true,
          validate: {
            isPast: (v) => new Date(v) < new Date(),
          },
        })}
      />
      {formError.birthday && (
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
          }}
          isReversed={true}
          formRef={formRef('gender')}
        />
        <LabeledInput
          label="Female:"
          params={{
            type: 'radio',
            name: 'gender',
            value: 'female',
          }}
          isReversed={true}
          formRef={formRef('gender')}
        />
      </div>
      <LabeledInput
        label="Profile picture:"
        params={{ type: 'file' }}
        formRef={formRef('file', {
          required: true,
          validate: {
            isImg: (v) => ['image/gif', 'image/png', 'image/jpeg'].includes(v![0].type),
          },
        })}
      />
      {formError.file && <span className="not-valid">You should upload an image file!</span>}
    </div>
  );
};

export default FormPersonal;
