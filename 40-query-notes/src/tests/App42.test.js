import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import '@testing-library/jest-dom';
import App from '../App40';

test('getAllBy...(), queryAllBy...(), findAllBy...() when finding > 1 elements', async () => {
  render(<App />);

  expect(screen.getAllByRole('listitem')).toHaveLength(3);

  expect(screen.queryAllByRole('listitem')).toHaveLength(3);

  let isErrorThrown = false;
  let listitemFoundArr = [];
  try {
    listitemFoundArr = await screen.findAllByRole('listitem');
  } catch (err) {
    isErrorThrown = true;
    // rejected
  }
  expect(isErrorThrown).toEqual(false);
  expect(listitemFoundArr).toHaveLength(3);
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
