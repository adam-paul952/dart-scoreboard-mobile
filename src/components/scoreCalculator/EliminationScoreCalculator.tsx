import React from "react";
import { StyleSheet } from "react-native";

import PlayerScoreDisplay from "../scoreBoard/PlayerScoreDisplay";
import StandardCalculatorButtons from "../calculatorButtons/StandardButtons";

import { IPlayers, PlayerList } from "../../hooks/useGame";
import DisplayWinner from "./DisplayWinner";

interface IEliminationScoreCalculatorProps {
  playerList: PlayerList;
  setPlayerList: (value: PlayerList) => Promise<void>;
  turn: number;
  nextTurn: () => void;
  winner: IPlayers | null;
  setWinner: React.Dispatch<React.SetStateAction<IPlayers | null>>;
  resetScoreList: () => void;
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
    // declareWinner();
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
        />
      ) : (
        <>
          <PlayerScoreDisplay playerScore={playerScore} />
          <StandardCalculatorButtons
            onHandleScoreSubmit={onHandleScoreSubmit}
          />
        </>
      )}
    </>
  );
};

export default EliminationScoreCalculator;

const styles = StyleSheet.create({});
