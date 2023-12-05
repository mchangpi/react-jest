import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import '@testing-library/jest-dom';
import UserForm from '../components/UserForm';

test('Shows 2 inputs and 1 button', () => {
  render(<UserForm />);

  const inputs = screen.getAllByRole('textbox');
  //   const buttons = screen.getAllByRole('button');
  const button = screen.getByRole('button');

  /* 
  console.log('msg: ' + button);
  screen.debug(button);
  */

  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test('Calls onUserAdd when the form is submitted', () => {
  render(<UserForm />);

  // 1.find the two inputs
  const [nameInput, emailInput] = screen.getAllByRole('textbox');

  // 2.type in a name
  user.click(nameInput);
  user.keyboard('milton');

  // 3.type in an email
  user.click(emailInput);
  user.keyboard('milton@gmail.com');
  // 4.find the button
  // 5.click the button
  // 6.Assertion to make sure 'onUserAdd' gets called with email/name
});
