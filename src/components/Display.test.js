import React from 'react';
import { render } from '@testing-library/react';
import Display from './Display';

test('Display renders without crashing', () => {
  render(<Display />);
});

test('Display renders Current at bat for batterName', () => {
  const batterName = 'Joe';
  const str = `current at bat for ${batterName}`;
  const regexString = new RegExp(str, 'i');
  const { getByTestId } = render(<Display batterName={batterName} />);
  expect(getByTestId('batterName-display').textContent).toMatch(regexString);
});
