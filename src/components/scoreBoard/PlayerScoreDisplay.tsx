import React from "react";
import { StyleSheet } from "react-native";

import { Text, View } from "../Themed";

interface IPlayerScoreDisplayProps {
  playerScore: string | string[] | undefined;
}

const PlayerScoreDisplay = (props: IPlayerScoreDisplayProps) => {
  return (
    <View style={styles.container}>
      <Text>Player Score: {props.playerScore}</Text>
    </View>
  );
};

export default PlayerScoreDisplay;

const styles = StyleSheet.create({
  container: { marginTop: 20, paddingVertical: 10, alignItems: "center" },
});
