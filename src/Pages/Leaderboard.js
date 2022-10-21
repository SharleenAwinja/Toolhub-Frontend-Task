import React from 'react';
import Board from '../Components/Leaderboard/Board';

function Leaderboard({toolsInfo}) {
  return (
    <div>
      <Board toolsInfo={toolsInfo} />
    </div>
  )
}

export default Leaderboard;