import { render, screen } from '@testing-library/react';
// import user from '@testing-library/user-event';
import '@testing-library/jest-dom';
import LoadableColorList from '../LoadableColorList';

test('findBy...()/findAllBy...() when data FETCHING', async () => {
  render(<LoadableColorList />);

  expect(() => {
    const elementArrGotTooEarly = screen.getAllByRole('listeitem');
    return elementArrGotTooEarly;
  }).toThrow();

  const elementArrFound = await screen.findAllByRole('listitem');

  expect(elementArrFound).toHaveLength(3);
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
