import React from "react";
import useAsyncStorage from "./useAsyncStorage";

export interface IPlayers {
  id: number;
  name: string;
  scoreList: number[];
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
      setPlayerList(newScoreList);
    }
    setTurn(0);
    setRound(0);
    setWinner(null);
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
  };
};

export default useGame;
