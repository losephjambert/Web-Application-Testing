import React, { useState } from 'react';
import Display from './Display';
import { handleBall, handleStrike, handleFoul, handleHit } from '../utils/countRules';

const Dashboard = () => {
  const [count, setCount] = useState({
    strikes: 0,
    balls: 0,
  });

  const handlePitch = newCount => {
    console.log(newCount);
    setCount({
      ...newCount,
    });
  };

  return (
    <>
      <section>
        <input
          type='button'
          name='strikes'
          value='Strike'
          onClick={() => handlePitch(handleStrike(count, count.strikes))}
        />
        <input type='button' name='balls' value='Ball' onClick={() => handlePitch(handleBall(count, count.balls))} />
        <input type='button' name='foul' value='Foul' onClick={() => handlePitch(handleFoul(count, count.strikes))} />
        <input type='button' name='hit' value='Base Hit' onClick={() => handlePitch(handleHit())} />
      </section>
      <Display batterName={'Joe'} count={count} />
    </>
  );
};

export default Dashboard;
