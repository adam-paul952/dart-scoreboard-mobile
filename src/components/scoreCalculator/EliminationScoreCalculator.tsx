import React from "react";
import { StyleSheet } from "react-native";

//Components
import PlayerScoreDisplay from "../scoreBoard/PlayerScoreDisplay";
import CalculatorButtons from "../calculatorButtons/CalculatorButtons";
import DisplayWinner from "./DisplayWinner";

// Types
import {
  IPlayers,
  IScoreCalculatorProps,
  PlayerList,
} from "../../hooks/useGame";

interface IEliminationScoreCalculatorProps extends IScoreCalculatorProps {
  assignEliminationScore: (player: IPlayers, score: number) => void;
  playerIsOut: PlayerList;
}

const EliminationScoreCalculator = (
  props: IEliminationScoreCalculatorProps
) => {
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
    } else {
      changeTurn(score);
    }
  };

  const changeTurn = (score: number) => {
    let currentPlayer = props.playerList[props.turn];
    props.assignEliminationScore(currentPlayer, score);
    props.setPlayerList([...props.playerList]);
    props.nextTurn();
  };

  React.useEffect(() => {
    const declareWinner = () => {
      if (props.playerList.length === new Set(props.playerIsOut).size + 1) {
        props.playerList.forEach((player) => {
          if (player.lives > 0) {
            props.setWinner(player);
          }
        });
      }
    };
    declareWinner();
  }, [props.playerList, props.playerIsOut, props.setWinner]);

  return (
    <>
      {props.winner ? (
        <DisplayWinner
          winner={props.winner}
          resetScoreList={props.resetScoreList}
          variant="Elimination"
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

export default EliminationScoreCalculator;

const styles = StyleSheet.create({});
