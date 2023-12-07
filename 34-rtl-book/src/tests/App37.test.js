import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import '@testing-library/jest-dom';

import App from '../App37';

test('Shows an email and search input', () => {
  render(<App/>);

  const signinButton = screen.getByRole('button', {name: /signin/i });
  screen.debug(signinButton);

  const signoutButton = screen.getByRole('button', {name: /signout/i });
  // screen.debug(searchInput);

  expect(signinButton).toBeInTheDocument();
  expect(signoutButton).toBeInTheDocument();
});
