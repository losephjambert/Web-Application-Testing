export const handleBall = ballCount => {
  // increase the current ball count by 1
  // if the current ball count === 3, return 0
  return ballCount < 3 ? (ballCount += 1) : 0;
};

export const handleStrike = strikeCount => {
  // increase the current strike count by 1
  // if the current strike count === 2, return 0
  return strikeCount < 2 ? (strikeCount += 1) : 0;
};

export const handleFoul = strikeCount => {
  // if the current strike count is < 2, increase the current strike count by 1
  // if the current strike count is >= 2, do nothing
  return strikeCount < 2 ? (strikeCount += 1) : strikeCount;
};

export const handleHit = () => {
  // reset current ball count
  // resest current strike count
  return {
    balls: 0,
    strikes: 0,
  };
};
