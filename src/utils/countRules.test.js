import { handleBall, handleStrike, handleFoul, handleHit } from './countRules';

const emptyCount = {
  balls: 0,
  strikes: 0,
};

test('handle strike increases strike count by 1 or resets count if strike count === 2', () => {
  expect(handleStrike(0)).toBe(1);
  expect(handleStrike(1)).toBe(2);
  expect(handleStrike(2)).toMatchObject(emptyCount);
});
