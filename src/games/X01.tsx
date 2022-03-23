import React from "react";

// Hooks
import useGame from "../hooks/useGame";

// Components
import X01Scoreboard from "../components/scoreBoard/X01Scoreboard";
import X01ScoreCalculator from "../components/scoreCalculator/X01ScoreCalculator";

const X01 = () => {
  const {
    playerList,
    setPlayerList,
    turn,
    nextTurn,
    winner,
    setWinner,
    resetScoreList,
    assignX01GameScore,
  } = useGame();
  return (
    <>
      <X01Scoreboard playerList={playerList} />
      <X01ScoreCalculator
        playerList={playerList}
        setPlayerList={setPlayerList}
        turn={turn}
        nextTurn={nextTurn}
        winner={winner}
        setWinner={setWinner}
        resetScoreList={resetScoreList}
        assignX01GameScore={assignX01GameScore}
      />
    </>
  );
};

export default X01;
