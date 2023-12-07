import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import '@testing-library/jest-dom';
import App from '../App40';

test('getBy(), queryBy(), findBy()', async () => {
  render(<App />);

  expect(() => screen.getByRole('textbox')).toThrow();

  expect(screen.queryByRole('textbox')).toEqual(null);

  let isErrorThrown = false;
  try {
    await screen.findByRole('textbox'); // return a Promise
    // fulfilled
  } catch (err) {
    isErrorThrown = true;
    // rejected
  }
  expect(isErrorThrown).toEqual(true);
});

/*
https://testing-library.com/docs/queries/about/#types-of-queries

getBy...: 
  Returns the matching node for a query, and throw a descriptive error if no elements match or if more than one match is found.
queryBy...: 
  Returns the matching node for a query, and return null if no elements match.
findBy...: 
  Returns a Promise which resolves when an element is found which matches the given query. The promise is rejected if no element is found or if more than one element is found after a default timeout of 1000ms.
*/
