import React, { useState } from 'react';
import Display from './Display';
import { handleBall, handleStrike, handleFoul, handleHit } from '../utils/countRules';

const Dashboard = props => {
  const [count, setCount] = useState({
    strikes: 0,
    balls: 0,
  });

  const handlePitch = (e, newCount) => {
    console.log('handle pitch ', e.target.name);
    console.log('handle pitch ', newCount);
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
          onClick={e => handlePitch(e, handleStrike(count, count.strikes))}
        />
        <input
          type='button'
          name='balls'
          value='Ball'
          onClick={e => handlePitch(e, handleBall(count, count.strikes))}
        />
        <input type='button' name='foul' value='Foul' onClick={e => handlePitch(e, handleFoul(count, count.strikes))} />
        <input type='button' name='hit' value='Base Hit' onClick={e => handlePitch(e, handleHit())} />
      </section>
      <Display batterName={'Joe'} count={count} />
    </>
  );
};

export default Dashboard;
