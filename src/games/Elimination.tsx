import React from "react";
import { StyleSheet } from "react-native";

import EliminationScoreboard from "../components/scoreBoard/EliminationScoreboard";
import EliminationScoreCalculator from "../components/scoreCalculator/EliminationScoreCalculator";

import { View } from "../components/Themed";

import useGame from "../hooks/useGame";

const Elimination = () => {
  const {
    playerList,
    setPlayerList,
    nextTurn,
    turn,
    winner,
    setWinner,
    resetScoreList,
    assignEliminationScore,
    playerIsOut,
  } = useGame();

  return (
    <View>
      <EliminationScoreboard playerList={playerList} />
      <EliminationScoreCalculator
        playerList={playerList}
        setPlayerList={setPlayerList}
        turn={turn}
        nextTurn={nextTurn}
        winner={winner}
        setWinner={setWinner}
        resetScoreList={resetScoreList}
        assignEliminationScore={assignEliminationScore}
        playerIsOut={playerIsOut}
      />
    </View>
  );
};

export default Elimination;

const styles = StyleSheet.create({});
