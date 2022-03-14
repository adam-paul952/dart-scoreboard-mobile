import React from "react";

import { Text, View } from "../components/Themed";

import useGame from "../hooks/useGame";

const Elimination = () => {
  const { playerList } = useGame();
  return (
    <>
      {playerList.map((player) => {
        return (
          <>
            <Text key={player.id}>{player.name}</Text>
            <Text key={player.id + 1}>{player.lives}</Text>
          </>
        );
      })}
    </>
  );
};

export default Elimination;
