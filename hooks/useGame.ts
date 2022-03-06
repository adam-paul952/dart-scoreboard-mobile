import React from "react";
import useAsyncStorage from "./useAsyncStorage";

export interface IPlayers {
  id: number;
  name: string;
  scoreList: number[];
  score?: number;
}

export type PlayerList = IPlayers[];

const useGame = () => {
  /*
   * playerList to store players into storage
   * helper functions to manage players
   */
  const [playerList, setPlayerList] = useAsyncStorage<PlayerList>(
    "listOfPlayers",
    []
  );

  const addPlayer = (playerName: IPlayers) => {
    setPlayerList([...playerList, playerName]);
  };

  const deletePlayer = (playerId: number) => {
    let updatedArray = [...playerList];
    let newPlayerList = updatedArray.filter((player) => player.id !== playerId);
    setPlayerList(newPlayerList);
  };

  const [winner, setWinner] = React.useState<IPlayers | null>(null);

  /*
   * Helper functions for gameplay
   */

  const [turn, setTurn] = React.useState<number>(0);

  const nextTurn = () => {
    const newTurn = turn + 1;
    setTurn(newTurn % playerList.length);
  };

  const [round, setRound] = React.useState<number>(0);

  const changeRounds = () => {
    if (turn === playerList.length - 1) {
      const newRound = round + 1;
      setRound(newRound);
    }
  };

  const getCurrentPlayer = () => {
    return playerList[turn];
  };

  const resetScoreList = () => {
    let newScoreList = [...playerList];
    for (let i = 0; i < newScoreList.length; i++) {
      newScoreList[i].scoreList = [];
      newScoreList[i].score = 0;
      setPlayerList(newScoreList);
    }
    setTurn(0);
    setRound(0);
    setWinner(null);
  };

  /*
   *  Helper functions for X01 Game Selection
   */

  const [x01Points, setX01Points] = React.useState<number>(0);

  const x01GameSelect = (value: number) => {
    setX01Points(value);
  };

  const assignX01PlayerScore = (points: number) => {
    let playerScore = [...playerList];
    for (let i = 0; i < playerScore.length; i++) {
      playerScore[i].score = x01Points;
      playerScore[i].scoreList!.push(points);
      setPlayerList(playerScore);
    }
  };

  return {
    playerList,
    setPlayerList,
    addPlayer,
    deletePlayer,
    turn,
    setTurn,
    nextTurn,
    getCurrentPlayer,
    round,
    changeRounds,
    resetScoreList,
    winner,
    setWinner,
    x01Points,
    setX01Points,
    x01GameSelect,
    assignX01PlayerScore,
  };
};

export default useGame;
