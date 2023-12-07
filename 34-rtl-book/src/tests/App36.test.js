import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import '@testing-library/jest-dom';

import App from '../App36';

// const roles = ['button'];

test('Shows an email and search input', () => {
  render(<App/>);

  const emailInput = screen.getByRole('textbox', {name: /emailaddress/i });
  // screen.debug(emailInput);

  const searchInput = screen.getByRole('textbox', {name: /searchbox/i });
  // screen.debug(searchInput);

  expect(emailInput).toBeInTheDocument();
  expect(searchInput).toBeInTheDocument();
});
