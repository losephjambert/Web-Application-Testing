const resetCount = () => {
  return {
    balls: 0,
    strikes: 0,
  };
};

export const handleBall = (currentCount, ballCount) => {
  // increase the current ball count by 1
  // if the current ball count === 3, return 0
  if ((currentCount, ballCount) === 3) return resetCount();
  else
    return {
      ...currentCount,
      balls: (ballCount += 1),
    };
};

export const handleStrike = (currentCount, strikeCount) => {
  // increase the current strike count by 1
  // if the current strike count === 2, return resetCount

  if (strikeCount === 2) return resetCount();
  else
    return {
      ...currentCount,
      strikes: (strikeCount += 1),
    };
};

export const handleFoul = (currentCount, strikeCount) => {
  // if the current strike count is < 2, increase the current strike count by 1
  // if the current strike count is >= 2, do nothing
  if (strikeCount === 2) return currentCount;
  else
    return {
      ...currentCount,
      strikes: (strikeCount += 1),
    };
};

export const handleHit = () => {
  // reset current ball count
  // resest current strike count
  return resetCount();
};
