import { handleBall, handleStrike, handleFoul, handleHit } from './countRules';

const emptyCount = {
  balls: 0,
  strikes: 0,
};

test('handleBall increases ballCount by 1 or resets count if ballCount === 3', () => {
  expect(handleBall(0)).toBe(1);
  expect(handleBall(1)).toBe(2);
  expect(handleBall(2)).toBe(3);
  expect(handleBall(3)).toMatchObject(emptyCount);
  expect(handleBall(1)).not.toBe(0);
});

test('handleStrike increases strikeCount by 1 or resets count if strikeCount === 2', () => {
  expect(handleStrike(0)).toBe(1);
  expect(handleStrike(1)).toBe(2);
  expect(handleStrike(2)).toMatchObject(emptyCount);
  expect(handleStrike(1)).not.toBe(1);
});

test('handleFoul increases strikeCount by 1 or returns null if strikeCount === 2', () => {
  expect(handleFoul(0)).toBe(1);
  expect(handleFoul(1)).toBe(2);
  expect(handleFoul(2)).toBe(2);
  expect(handleFoul(2)).not.toBe(emptyCount);
});

test('handleHit returns an object containing a reset count', () => {
  expect(handleHit()).toMatchObject(emptyCount);
});
