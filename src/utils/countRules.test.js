import { handleBall, handleStrike, handleFoul, handleHit } from './countRules';

const emptyCount = {
  balls: 0,
  strikes: 0,
};

const testCount = {
  balls: 2,
  strikes: 1,
};

test('handleBall increases ballCount by 1 or resets count if ballCount === 3', () => {
  expect(handleBall(testCount, testCount.balls)).toMatchObject({
    balls: 3,
    strikes: 1,
  });
});

test('handleStrike increases strikeCount by 1 or resets count if strikeCount === 2', () => {
  expect(handleStrike(testCount, testCount.strikes)).toMatchObject({
    balls: 2,
    strikes: 2,
  });
});

test('handleFoul increases strikeCount by 1 or returns null if strikeCount === 2', () => {
  expect(handleFoul(testCount, testCount.strikes)).toMatchObject({
    balls: 2,
    strikes: 2,
  });
});

test('handleHit returns an object containing a reset count', () => {
  expect(handleHit()).toMatchObject(emptyCount);
});
