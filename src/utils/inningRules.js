const inning = {
  top: true,
  bottom: false,
  number: 1,
  outs: 0,
};

export const handleOut = (currentInning, outCount, inningPosition) => {
  const { top, bottom, number, outs } = currentInning;
  if (outCount === 2) {
    return {};
  } else
    return {
      ...currentCount,
      balls: (ballCount += 1),
    };
};
