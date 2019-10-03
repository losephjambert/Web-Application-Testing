import React from 'react';
import { render } from '@testing-library/react';
import Display from './Display';

test('Display renders without crashing', () => {
  render(<Display />);
});

test('Display renders  batterName', () => {
  const batterName = 'Joe';
  const regexString = new RegExp(batterName, 'i');
  const { getByTestId } = render(<Display batterName={batterName} />);
  expect(getByTestId('batterName-display').textContent).toMatch(regexString);
});
