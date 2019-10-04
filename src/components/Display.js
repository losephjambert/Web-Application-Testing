import React from 'react';

const Display = ({ batterName, count: { strikes, balls } }) => {
  return (
    <section>
      <h2 data-testid='batterName-display'>Current at bat for {batterName}</h2>
      <section data-testid='balls-display'>
        <h3>Balls</h3>
        <p>{balls}</p>
      </section>
      <section data-testid='strikes-display'>
        <h3>Strikes</h3>
        <p>{strikes}</p>
      </section>
    </section>
  );
};

export default Display;
