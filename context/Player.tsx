import React, { createContext, useContext, useEffect, useState } from 'react';

import usePlayerList from '@/hooks/usePlayerlist.web';
// import usePlayerStats from "../hooks/usePlayerStats";

interface PlayerContext {
  playerList: IPlayer[];
  setPlayerList: React.Dispatch<React.SetStateAction<IPlayer[]>>;
  onAddPlayer: (player: IPlayer) => void;
  onDeletePlayer: (id: string) => void;
  selectedPlayers: IPlayer[];
  setSelectedPlayers: React.Dispatch<React.SetStateAction<IPlayer[]>>;
  toggleSelectedPlayers: (id: string) => void;
}

export interface IPlayer {
  id: string;
  name: string;
  score: number;
  selected: boolean;
  scoreList: number[];
  lives: number;
  killer: boolean;
  stats: IPlayerStats;
}

export interface IPlayerStats {
  highScore: number;
  oneDartAverage: number;
  darts: number;
}

const PlayerStateContext = createContext({} as PlayerContext);

const PlayerListProvider = ({ children }: { children: React.ReactNode }) => {
  const { onGetPlayerlist, onSetPlayerlist } = usePlayerList();

  //   const { onCreateStats } = usePlayerStats();

  const [playerList, setPlayerList] = useState<IPlayer[]>([]);

  const [selectedPlayers, setSelectedPlayers] = useState<IPlayer[]>([]);

  useEffect(() => {
    //     onCreatePlayerlist();
    //     onCreateStats();
    setPlayerList(onGetPlayerlist());
  }, []);

  const onAddPlayer = (player: IPlayer) => {
    setPlayerList((prev) => [...prev, player]);
    onSetPlayerlist([...playerList, player]);
    //     onAddPlayerToDb(player, setPlayerList);
  };

  const onDeletePlayer = (id: string) => {
    // onDeletePlayerFromDb(id, setPlayerList);
    setPlayerList((prev) => prev.filter((player) => player.id !== id));
    onSetPlayerlist(playerList.filter((player) => player.id !== id));
  };

  const toggleSelectedPlayers = (id: string) => {
    setPlayerList(() =>
      playerList.map((player) => {
        if (player.id === id) {
          player.selected = !player.selected;
        }
        return player;
      }),
    );

    setSelectedPlayers(playerList);
    onSetPlayerlist(playerList);
  };

  const assignSelectedPlayers = () => {
    setSelectedPlayers(playerList.filter((player) => player.selected === true));
  };

  useEffect(() => {
    assignSelectedPlayers();
  }, [playerList]);

  // useEffect(() => {
  //   console.log(`Selected Players: `, selectedPlayers);
  // }, [selectedPlayers]);

  return (
    <PlayerStateContext.Provider
      value={{
        playerList,
        setPlayerList,
        onAddPlayer,
        onDeletePlayer,
        selectedPlayers,
        setSelectedPlayers,
        toggleSelectedPlayers,
      }}
    >
      {children}
    </PlayerStateContext.Provider>
  );
};

const usePlayerState = () => {
  const context = useContext(PlayerStateContext);
  if (context === undefined) {
    throw new Error('usePlayerState must be used within PlayerStateProvider');
  }
  return context;
};

export { PlayerListProvider, usePlayerState };
