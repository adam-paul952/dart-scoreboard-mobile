import React from "react";

import { StyleSheet } from "react-native";
import { View } from "../components/Themed";
import useGame from "../hooks/useGame";

import BaseballScoreboard from "../components/scoreBoard/BaseballScoreboard";
import BaseballScoreCalculator from "../components/scoreCalculator/BaseballScoreCalculator";

const Baseball = () => {
  const {
    playerList,
    setPlayerList,
    nextTurn,
    turn,
    round,
    changeRounds,
    winner,
    setWinner,
    resetScoreList,
  } = useGame();

  return (
    <>
      <View style={styles.container}>
        <BaseballScoreboard playerList={playerList} />
        <BaseballScoreCalculator
          playerList={playerList}
          setPlayerList={setPlayerList}
          nextTurn={nextTurn}
          turn={turn}
          round={round}
          changeRounds={changeRounds}
          winner={winner}
          setWinner={setWinner}
          resetScoreList={resetScoreList}
        />
      </View>
    </>
  );
};

export default Baseball;

const styles = StyleSheet.create({
  container: {},
});
