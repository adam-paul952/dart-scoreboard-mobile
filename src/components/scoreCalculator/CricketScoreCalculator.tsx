import React from "react";
import { StyleSheet } from "react-native";
import { IScoreCalculatorProps } from "../../hooks/useGame";
import CalculatorButtons from "../calculatorButtons/CalculatorButtons";
import PlayerScoreDisplay from "../scoreBoard/PlayerScoreDisplay";

interface ICricketScoreCalculatorProps extends IScoreCalculatorProps {}

const CricketScoreCalculator = (props: ICricketScoreCalculatorProps) => {
  const [playerScore, setPlayerScore] = React.useState<string[]>([]);

  const onHandleInput = (input: string) => {
    playerScore.push(input);
    setPlayerScore([...playerScore]);
  };

  const onHandleScoreSubmit = (input: string) => {
    if (input === "Enter") {
      changeTurnValidate();
      setPlayerScore([]);
    } else if (input === "Del") {
      setPlayerScore([]);
    } else {
      onHandleInput(input);
    }
  };

  const changeTurnValidate = () => {
    props.setPlayerList([...props.playerList]);
  };
  return (
    <>
      <PlayerScoreDisplay playerScore={playerScore} />
      <CalculatorButtons
        onHandleScoreSubmit={onHandleScoreSubmit}
        variant="cricket"
      />
    </>
  );
};

export default CricketScoreCalculator;

const styles = StyleSheet.create({});
