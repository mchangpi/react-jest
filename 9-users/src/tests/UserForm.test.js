import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import '@testing-library/jest-dom';
import UserForm from '../components/UserForm';

const fakeUser = { name: 'milton', email: 'milton@gmail.com' };

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

test('Calls Stub callback when the form is submitted', async () => {
  // NOT the best implementation!
  const argList = [];
  const stubCallback = (...args) => {
    argList.push(args);
  };

  render(<UserForm onUserAdd={stubCallback} />);

  // 1.find the two inputs
  const [nameInput, emailInput] = screen.getAllByRole('textbox');
  // screen.debug(nameInput);
  // screen.debug(emailInput);

  // 2.type in a name
  await user.click(nameInput);
  await user.keyboard('milton');

  // 3.type in an email
  await user.click(emailInput);
  await user.keyboard('milton@gmail.com');

  // 4.find the button
  const button = screen.getByRole('button');
  // screen.debug(button);

  // 5.click the button
  await user.click(button);
  console.log(argList);
  // console.log(argList[0][0]);

  // 6.Assertion to make sure 'onUserAdd' gets called with email/name
  expect(argList).toHaveLength(1);
  expect(argList[0][0]).toEqual({ name: 'milton', email: 'milton@gmail.com' });
});

test('Calls Mock callback when the form is submitted', async () => {
  const mockCallback = jest.fn();

  render(<UserForm onUserAdd={mockCallback} />);

  // 1.find the two inputs
  const nameInput = screen.getByRole('textbox', { name: /name/i });
  const emailInput = screen.getByRole('textbox', { name: /email/i });

  // 2.type in a name
  await user.click(nameInput);
  await user.keyboard('milton');

  // 3.type in an email
  await user.click(emailInput);
  await user.keyboard('milton@gmail.com');

  // 4.find the button
  const button = screen.getByRole('button');

  // 5.click the button
  await user.click(button);

  // 6.Assertion to make sure 'onUserAdd' gets called with email/name
  expect(mockCallback).toHaveBeenCalled();
  expect(mockCallback).toHaveBeenCalledWith({
    name: 'milton',
    email: 'milton@gmail.com',
  });
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
