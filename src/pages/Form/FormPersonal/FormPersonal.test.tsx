import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import FormPersonal from './FormPersonal';
import React from 'react';

describe('FormControl', () => {
  const formRef: {
    formName: React.RefObject<HTMLInputElement>;
    formDate: React.RefObject<HTMLInputElement>;
    formGenderMale: React.RefObject<HTMLInputElement>;
    formGenderFemale: React.RefObject<HTMLInputElement>;
    formFile: React.RefObject<HTMLInputElement>;
  } = {
    formName: React.createRef(),
    formDate: React.createRef(),
    formGenderMale: React.createRef(),
    formGenderFemale: React.createRef(),
    formFile: React.createRef(),
  };
  it('Renders not valid', () => {
    render(
      <FormPersonal
        formRef={formRef}
        isValidFormName={false}
        isValidFormDate={false}
        isValidFormFile={false}
      />
    );
    expect(screen.getAllByText(/Field/i)).toBeDefined();
  });
  it('Renders valid', () => {
    render(
      <FormPersonal
        formRef={formRef}
        isValidFormName={true}
        isValidFormDate={true}
        isValidFormFile={true}
      />
    );
    expect(screen.getAllByText(/Name:/i)).toBeDefined();
  });
});
