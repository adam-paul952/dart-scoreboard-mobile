import React from "react";
import { RootStackParamList } from "../../types";
import useAsyncStorage from "./useAsyncStorage";

export interface IPlayers {
  id: number;
  name: string;
  scoreList: number[];
  score: number;
  lives: number;
  selected?: boolean;
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

  const getCurrentPlayerById = () => {
    return playerList[turn].id;
  };

  const resetScoreList = () => {
    let newScoreList = [...playerList];
    for (let i = 0; i < newScoreList.length; i++) {
      newScoreList[i].scoreList = [];
      newScoreList[i].score = 0;
      newScoreList[i].lives = 0;
      setPlayerList(newScoreList);
    }
    setTurn(0);
    setRound(0);
    setWinner(null);
  };

  /*
   * Set defaults from previous session
   */

  const [selectedGame, setSelectedGame] = React.useState<
    keyof RootStackParamList | undefined
  >("Baseball");

  const [selectedPlayers, setSelectedPlayers] = React.useState<PlayerList>([]);

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

  /*
   *  Helper functions for Elimination Set-Up
   */

  const assignPlayerLives = (playerLives: number) => {
    let numberOfPlayerLives = [...playerList];
    for (let i = 0; i < numberOfPlayerLives.length; i++) {
      numberOfPlayerLives[i].lives = playerLives;
      setPlayerList(numberOfPlayerLives);
    }
  };

  /*
   *  Helper functions for Elimination Gameplay
   */

  const [prevPlayerScore, setPrevPlayerScore] = React.useState<number>(0);
  const [playerIsOut, setPlayerIsOut] = React.useState<PlayerList>([]);

  const assignEliminationScore = (player: IPlayers, score: number) => {
    if (player.lives !== 0) {
      player.scoreList.push(score);
      for (let i = 0; i < player.scoreList.length; i++) {
        if (player.lives === 0 && player.scoreList[i] === 0) {
          return;
        }
        player.score = player.scoreList[i];
        setPrevPlayerScore(player.score);
      }
    }
    if (prevPlayerScore >= player.score) {
      player.lives -= 1;
      if (player.lives < 0) {
        player.lives = 0;
      }
    }
    if (player.lives === 0) {
      playerIsOut.push(player);
      setPlayerIsOut([...playerIsOut]);
    } else {
      nextTurn();
    }
  };

  /*
   *  Helper functions for Killer setup
   */

  const assignPlayerTarget = (score: number) => {
    let currentPlayer = getCurrentPlayer();
    currentPlayer.score = score;
    setPlayerList([...playerList]);
    nextTurn();
    if (turn === playerList.length - 1) {
      changeRounds();
    }
  };

  const [killerTargets, setKillerTargets] = React.useState<
    { label: number; value: number }[]
  >([]);

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
    assignPlayerLives,
    assignPlayerTarget,
    getCurrentPlayerById,
    killerTargets,
    setKillerTargets,
    selectedGame,
    setSelectedGame,
    selectedPlayers,
    setSelectedPlayers,
    playerIsOut,
    assignEliminationScore,
  };
};

export default useGame;
