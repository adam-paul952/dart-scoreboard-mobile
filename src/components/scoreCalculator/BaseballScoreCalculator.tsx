import React from "react";
import { StyleSheet } from "react-native";

// Components
import DisplayWinner from "./DisplayWinner";
import PlayerScoreDisplay from "../scoreBoard/PlayerScoreDisplay";
import CalculatorButtons from "../calculatorButtons/CalculatorButtons";

//Types
import { IScoreCalculatorProps } from "../../hooks/useGame";

interface IBaseballScoreCalculatorProps extends IScoreCalculatorProps {
  round: number;
  changeRounds: () => void;
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
    let currentPlayer = props.playerList[props.turn];
    currentPlayer.scoreList.push(score);
    props.setPlayerList([...props.playerList]);
    props.nextTurn();
    props.changeRounds();
  };

  React.useEffect(() => {
    const declareWinner = () => {
      const totalRounds = 9;
      let winnerScore = -1;
      if (props.round === totalRounds) {
        props.playerList.forEach((player) => {
          const totalScore = player.scoreList.reduce((a, b) => a + b, 0);
          if (totalScore > winnerScore) {
            winnerScore = totalScore;
            props.setWinner(player);
          }
        });
      } else {
        return null;
      }
    };
    declareWinner();
  }, [props]);

  return (
    <>
      {props.winner ? (
        <DisplayWinner
          winner={props.winner}
          resetScoreList={props.resetScoreList}
          variant="Baseball"
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

export default BaseballScoreCalculator;

const styles = StyleSheet.create({});
