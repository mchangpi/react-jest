import { screen, render, within } from '@testing-library/react';
// import user from '@testing-library/user-event';
import '@testing-library/jest-dom';
import App from '../App49';

test('Select different elements', async () => {
  render(<App />);

  const form = screen.getByRole('form');
  if (1) {
    const buttons = within(form).getAllByRole('button');
    expect(buttons).toHaveLength(2);
  } else {
    /* We need to define custom matcher: toContainRole() */
    expect(form).toContainRole('button', 2);
  }
});

/*
  const elements = [
    screen.getByRole('button'),
    screen.getByText('Enter Data'),
    screen.getByText(/enter/i),

    screen.getByLabelText('Email'),
    screen.getByPlaceholderText('Red'),
    screen.getByDisplayValue('milton@gmail.com'),
    screen.getByAltText('data'),
    screen.getByTitle(/click and submit/i),

    screen.getByTestId(/image wrapper/i),
  ];
*/
