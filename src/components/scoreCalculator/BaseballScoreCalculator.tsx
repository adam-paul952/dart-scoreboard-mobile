import React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "../../components/Themed";

import StandardCalculatorButtons from "../calculatorButtons/StandardButtons";
import { PlayerList, IPlayers } from "../../hooks/useGame";

interface IBaseballScoreCalculatorProps {
  playerList: PlayerList;
  setPlayerList: (playerList: PlayerList) => void;
  nextTurn: () => void;
  getCurrentPlayer: () => IPlayers;
  turn: number;
  round: number;
  changeRounds: () => void;
  winner: IPlayers | null;
  setWinner: (player: IPlayers) => void;
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
    // console.log(currentPlayer);
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
      <View style={styles.scoreDisplay}>
        <Text>Player Score: {playerScore}</Text>
        {props.winner && <Text>The winner is {props.winner.name}</Text>}
      </View>
      <StandardCalculatorButtons onHandleScoreSubmit={onHandleScoreSubmit} />
    </>
  );
};

export default BaseballScoreCalculator;

const styles = StyleSheet.create({
  scoreDisplay: {
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
