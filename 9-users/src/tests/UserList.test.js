import { render, screen } from '@testing-library/react';
// import user from '@testing-library/user-event';
import '@testing-library/jest-dom';
import UserList from '../components/UserList';

test('Render 1 row per user', () => {
  const fakeUsers = [
    { name: 'jane', email: 'jane@gmail.com' },
    { name: 'sam', email: 'sam@gmail.com' },
  ];
  render(<UserList users={fakeUsers} />);

  // Find all the rows int the table
  // screen.logTestingPlaygroundURL();
  const rows = screen.getAllByRole('row');

  // Assertion: correct number of rows in the table
  expect(rows).toHaveLength(1 + 2); // 1 <th/> and 2 <tr/>
});

test('Render the email/name of each user', () => {});
