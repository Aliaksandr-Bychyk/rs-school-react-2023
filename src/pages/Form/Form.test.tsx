import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Form from './Form';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// describe('Form', () => {
//   it('Renders', () => {
//     render(
//       <BrowserRouter>
//         <Form />
//       </BrowserRouter>
//     );
//     expect(screen.getAllByText(/Form/i)).toBeDefined();
//   });
//   // it('Button click', () => {
//   //   const { getByText } = render(
//   //     <BrowserRouter>
//   //       <Form />
//   //     </BrowserRouter>
//   //   );
//   //   const button = getByText('Submit');
//   //   // ex
//   // });
// });
describe('Accordion', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Form />
      </BrowserRouter>
    );
  });

  test('should show title all the time', () => {
    expect(screen.getByText(/Form/i)).toBeInTheDocument();
  });

  test('should not show the popup at the start', () => {
    expect(screen.queryByText(/Fail! Please check!/i)).not.toBeInTheDocument();
  });

  test('should show the popup on accordion click', async () => {
    const title = screen.getByText(/Submit/i);
    fireEvent.click(title);

    expect(await screen.findByText(/Fail! Please check!/i)).toBeInTheDocument();
  });
});
