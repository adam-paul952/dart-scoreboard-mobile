import React from "react";
import { Alert, StyleSheet } from "react-native";

//Components
import PlayerScoreDisplay from "../scoreBoard/PlayerScoreDisplay";
import CalculatorButtons from "../calculatorButtons/CalculatorButtons";
import DisplayWinner from "./DisplayWinner";

// Types
import { IPlayers, IScoreCalculatorProps } from "../../hooks/useGame";

interface IX01ScoreCalculatorProps extends IScoreCalculatorProps {
  assignX01GameScore: (player: IPlayers, score: number) => void;
}

const X01ScoreCalculator = (props: IX01ScoreCalculatorProps) => {
  const [playerScore, setPlayerScore] = React.useState<string>("");

  const onHandleScoreInput = (input: string) => {
    setPlayerScore(`${playerScore}${input}`);
  };

  const onHandleDeleteInput = () => {
    setPlayerScore("");
  };

  const onHandleScoreSubmit = (input: string) => {
    if (input === "Del") {
      onHandleDeleteInput();
    } else if (input === "Enter") {
      onChangeTurnValidate();
      setPlayerScore("");
    } else {
      onHandleScoreInput(input);
    }
  };

  const onChangeTurnValidate = () => {
    let score = parseInt(playerScore, 10);
    if (isNaN(score)) {
      score = 0;
      changeTurn(score);
    } else if (score > 180) {
      showScoreAlert();
    } else {
      changeTurn(score);
    }
  };

  const changeTurn = (score: number) => {
    let currentPlayer = props.playerList[props.turn];
    props.assignX01GameScore(currentPlayer, score);
    props.setPlayerList([...props.playerList]);
    props.nextTurn();
  };

  const showScoreAlert = () => {
    return Alert.alert("Input Error", "Score cannot be greater than 180", [
      {
        text: "OK",
        onPress: () => console.log("OK Pressed"),
        style: "cancel",
      },
    ]);
  };

  React.useEffect(() => {
    const declareWinner = () => {
      props.playerList.forEach((player) => {
        if (player.score === 0) {
          props.setWinner(player);
        }
      });
    };
    declareWinner();
  }, [props.playerList, props.setWinner]);

  return (
    <>
      {props.winner ? (
        <DisplayWinner
          winner={props.winner}
          resetScoreList={props.resetScoreList}
          variant="X01"
        />
      ) : (
        <>
          <PlayerScoreDisplay playerScore={playerScore} />
          <CalculatorButtons onHandleScoreSubmit={onHandleScoreSubmit} />
        </>
      )}
    </>
  );
};

export default X01ScoreCalculator;

const styles = StyleSheet.create({});
