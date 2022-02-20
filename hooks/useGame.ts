import React from "react";

const useGame = () => {
  const [playerList, setPlayerList] = React.useState<string[]>([]);

  const onAddPlayer = (playerName: string) => {
    setPlayerList([...playerList, playerName]);
  };

  return {
    playerList,
    setPlayerList,
    onAddPlayer,
  };
};

export default useGame;
