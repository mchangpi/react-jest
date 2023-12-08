import { render, screen } from '@testing-library/react';
// import user from '@testing-library/user-event';
import '@testing-library/jest-dom';
import App from '../App46';

test('Select different elements', async () => {
  render(<App />);

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

  for (let element of elements) {
    expect(element).toBeInTheDocument();
  }

  // screen.debug(screen.getByLabelText('Email'));
});
