import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import '@testing-library/jest-dom';

import App from '../App35';

// const roles = ['button'];

test('Select by accessible name', () => {
  render(<App/>);

  const submitButton = screen.getByRole('button', {name: /submit/i });
  const cancelButton = screen.getByRole('button', {name: /cancel/i });

  expect(submitButton).toBeInTheDocument();
  expect(cancelButton).toBeInTheDocument();
});
