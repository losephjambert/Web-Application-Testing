import React from 'react';
import { render } from '@testing-library/react';
import Display from './Display';
import Dashboard from './Dashboard';

const count = { strikes: 0, balls: 0 };
const batterName = 'Joe';

test('Display renders without crashing', () => {
  render(<Display count={count} batterName={batterName} />);
});

test('Display renders props', () => {
  const regexString = new RegExp(batterName, 'i');
  const { getByTestId } = render(<Display batterName={batterName} count={count} />);
  expect(getByTestId('batterName-display').textContent).toMatch(regexString);
  expect(getByTestId('balls-display').textContent).toMatch(count.balls.toString());
  expect(getByTestId('strikes-display').textContent).toMatch(count.strikes.toString());
});
