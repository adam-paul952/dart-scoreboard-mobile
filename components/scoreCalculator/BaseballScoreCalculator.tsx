import React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "../../components/Themed";

import BaseballCalculatorButtons from "../calculatorButtons/BaseballButtons";
import { IPlayers } from "../../hooks/useGame";

interface IBaseballScoreCalculatorProps {
  nextTurn: () => void;
  getCurrentPlayer: () => IPlayers;
}

const BaseballScoreCalculator = (props: IBaseballScoreCalculatorProps) => {
  const [playerScore, setPlayerScore] = React.useState<string>("");

  const onHandleInput = (input: string) => {
    setPlayerScore(`${playerScore}${input}`);
  };

  const deleteScoreInput = () => {
    setPlayerScore("");
  };

  const onHandleScoreSubmit = (input: string) => {
    if (input === "Del") {
      deleteScoreInput();
    } else if (input === "Enter") {
      changeTurnValidate();
      deleteScoreInput();
    } else {
      onHandleInput(input);
    }
  };

  const changeTurnValidate = () => {
    let score = parseInt(playerScore, 10);
    if (isNaN(score)) {
      score = 0;
      changeTurn(score);
    } else {
      changeTurn(score);
    }
  };

  const changeTurn = (score: number) => {
    let currentPlayer = props.getCurrentPlayer();
    console.log(`Current Player is: ${currentPlayer.name}`);
    props.nextTurn();
    console.log(`Score from changeTurn = ${score}`);
  };

  return (
    <>
      <View style={styles.scoreDisplay}>
        <Text>Player Score: {playerScore}</Text>
      </View>
      <BaseballCalculatorButtons onHandleScoreSubmit={onHandleScoreSubmit} />
    </>
  );
};

export default BaseballScoreCalculator;

const styles = StyleSheet.create({
  scoreDisplay: {
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
