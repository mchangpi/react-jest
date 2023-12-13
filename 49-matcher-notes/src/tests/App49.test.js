import { render, screen } from '@testing-library/react';
// import user from '@testing-library/user-event';
import '@testing-library/jest-dom';
import App from '../App49';

test('Select different elements', async () => {
  render(<App />);

  const buttons = screen.getAllByRole('button');

  expect(buttons).toHaveLength(2);
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
