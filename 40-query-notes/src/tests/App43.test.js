import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import '@testing-library/jest-dom';
import App from '../App40';

test('getBy...() to prove an element EXISTS', () => {
  render(<App />);

  expect(screen.getByRole('list')).toBeInTheDocument();
});

test('queryBy...() to prove an element NOT exists', () => {
  render(<App />);

  const elementNotExist = screen.queryByRole('textbox');

  expect(elementNotExist).not.toBeInTheDocument();
});
/*
https://testing-library.com/docs/queries/about/#types-of-queries

getAllBy...: 
  Returns an array of all matching nodes for a query, and throws an error if no elements match.
queryAllBy...: 
  Returns an array of all matching nodes for a query, and return an empty array ([]) if no elements match.
findAllBy...: 
  Returns a promise which resolves to an array of elements when any elements are found which match the given query. The promise is rejected if no elements are found after a default timeout of 1000ms.
*/
