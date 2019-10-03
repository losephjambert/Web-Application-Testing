import React from 'react';

const Display = props => {
  return (
    <section>
      <h2 data-testid='batterName-display'>Current at bat for {props.batterName}</h2>
      <section>
        <h3>Balls</h3>
        <p>0</p>
      </section>
      <section>
        <h3>Strikes</h3>
        <p>0</p>
      </section>
    </section>
  );
};

export default Display;
