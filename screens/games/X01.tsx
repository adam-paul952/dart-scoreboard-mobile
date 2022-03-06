import React from "react";
import { Text } from "../../components/Themed";

import useGame from "../../hooks/useGame";

const X01 = () => {
  const { playerList } = useGame();
  return (
    <>
      {playerList.map((player) => {
        return (
          <>
            <Text>{player.name}</Text>
            <Text>{player.score}</Text>
          </>
        );
      })}
    </>
  );
};

export default X01;
