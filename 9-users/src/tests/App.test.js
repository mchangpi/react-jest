import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import '@testing-library/jest-dom';
import App from '../App';
import UserForm from '../components/UserForm';

const fakeUser = { name: 'milton', email: 'milton@gmail.com' };

test('Receive a new user and show it on a list', async () => {
  render(<App />);
  const nameInput = screen.getByRole('textbox', { name: /name/i });
  const emailInput = screen.getByRole('textbox', { name: /email/i });
  const button = screen.getByRole('button');

  await user.click(nameInput);
  await user.keyboard(fakeUser.name);

  await user.click(emailInput);
  await user.keyboard(fakeUser.email);

  await user.click(button);

  //   screen.debug();
  const nameCell = screen.getByRole('cell', { name: fakeUser.name });
  const emailCell = screen.getByRole('cell', { name: fakeUser.email });

  expect(nameCell).toBeInTheDocument();
  expect(emailCell).toBeInTheDocument();
});

test('Empties the two inputs when form is submitted', async () => {
  render(<UserForm onUserAdd={() => {}} />);

  const nameInput = screen.getByRole('textbox', { name: /name/i });
  const emailInput = screen.getByRole('textbox', { name: /email/i });
  const button = screen.getByRole('button');

  await user.click(nameInput);
  await user.keyboard(fakeUser.name);
  await user.click(emailInput);
  await user.keyboard(fakeUser.email);

  await user.click(button);

  expect(nameInput).toHaveValue('');
  expect(emailInput).toHaveValue('');
});
