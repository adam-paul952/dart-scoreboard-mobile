import React from "react";
import { Text, View } from "../components/Themed";

import useGame from "../hooks/useGame";

import StandardCalculatorButtons from "../components/calculatorButtons/StandardButtons";
import PlayerScoreDisplay from "../components/scoreBoard/PlayerScoreDisplay";
import X01Scoreboard from "../components/scoreBoard/X01Scoreboard";

const X01 = () => {
  const { playerList } = useGame();
  const [playerScore, setPlayerScore] = React.useState<string>("");
  return (
    <>
      <X01Scoreboard playerList={playerList} />
      <PlayerScoreDisplay playerScore={playerScore} />
      <StandardCalculatorButtons onHandleScoreSubmit={() => {}} />
    </>
  );
};

export default X01;
