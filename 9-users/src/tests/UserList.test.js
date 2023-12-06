import { render, screen, within } from '@testing-library/react';
// import user from '@testing-library/user-event';
import '@testing-library/jest-dom';
import UserList from '../components/UserList';

const fakeUsers = [
  { name: 'jane', email: 'jane@gmail.com' },
  { name: 'sam', email: 'sam@gmail.com' },
];

test('(Fallback: data-testid) Render 1 row per user', () => {
  render(<UserList users={fakeUsers} />);

  // Find all the rows int the table
  // screen.logTestingPlaygroundURL();
  // const rows = screen.getAllByRole('row');
  const rows = within(screen.getByTestId('users')).getAllByRole('row');

  // Assertion: correct number of rows in the table
  expect(rows).toHaveLength(2);
});

test('(Fallback: container.querySelector) Render 1 row per user', () => {
  const { container } = render(<UserList users={fakeUsers} />);

  // Find all the rows int the table
  // screen.logTestingPlaygroundURL();
  // const table = container.querySelector('table');
  const rows = container.querySelectorAll('tbody tr');
  console.log('rows.length ', rows.length);

  // Assertion: correct number of rows in the table
  expect(rows).toHaveLength(2);
});

test('Render the email/name of each user', () => {});
