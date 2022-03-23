import React from "react";
import { Text } from "../components/Themed";

import useGame from "../hooks/useGame";

import CricketScoreboard from "../components/scoreBoard/CricketScoreboard";
import CricketScoreCalculator from "../components/scoreCalculator/CricketScoreCalculator";

const Cricket = () => {
  const {
    playerList,
    setPlayerList,
    nextTurn,
    turn,
    winner,
    setWinner,
    resetScoreList,
  } = useGame();
  return (
    <>
      <CricketScoreboard playerList={playerList} />
      <CricketScoreCalculator
        playerList={playerList}
        setPlayerList={setPlayerList}
        nextTurn={nextTurn}
        turn={turn}
        winner={winner}
        setWinner={setWinner}
        resetScoreList={resetScoreList}
      />
    </>
  );
};

export default Cricket;
