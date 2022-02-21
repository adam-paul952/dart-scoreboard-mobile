import React from "react";
import useAsyncStorage from "./useAsyncStorage";

export interface IPlayers {
  id: number;
  name: string;
}

type PlayerList = IPlayers[];

const useGame = () => {
  const [playerList, setPlayerList] = useAsyncStorage<PlayerList>(
    "listOfPlayers",
    []
  );

  const addPlayer = (playerName: IPlayers) => {
    setPlayerList([...playerList, playerName]);
  };

  const deletePlayer = (playerId: number) => {
    let updatedArray = [...playerList];
    updatedArray.filter((player) => player.id !== playerId);
    setPlayerList(updatedArray);
  };

  return {
    playerList,
    setPlayerList,
    addPlayer,
    deletePlayer,
  };
};

export default useGame;
