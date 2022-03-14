import React from "react";
import { Text } from "../components/Themed";

import useGame from "../hooks/useGame";

const X01 = () => {
  const { playerList } = useGame();
  return (
    <>
      {playerList.map((player) => {
        return (
          <>
            <Text key={player.id}>{player.name}</Text>
            <Text key={player.id + 1}>{player.score}</Text>
          </>
        );
      })}
    </>
  );
};

export default X01;
