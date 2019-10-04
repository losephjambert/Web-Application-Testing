import React, { useState } from 'react';
import Display from './Display';
import { handleBall, handleStrike, handleFoul, handleHit } from '../utils/countRules';

const Dashboard = () => {
  const [count, setCount] = useState({
    strikes: 0,
    balls: 0,
  });

  return (
    <>
      <section>
        <input
          type='button'
          name='strikes'
          value='Strike'
          onClick={() => setCount(handleStrike(count, count.strikes))}
        />
        <input type='button' name='balls' value='Ball' onClick={() => setCount(handleBall(count, count.balls))} />
        <input type='button' name='foul' value='Foul' onClick={() => setCount(handleFoul(count, count.strikes))} />
        <input type='button' name='hit' value='Base Hit' onClick={() => setCount(handleHit())} />
      </section>
      <Display batterName={'Joe'} count={count} />
    </>
  );
};

export default Dashboard;
