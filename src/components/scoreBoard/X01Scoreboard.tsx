import React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "../Themed";

import { PlayerList } from "../../hooks/useGame";

interface IX01ScoreboardProps {
  playerList: PlayerList;
}

const X01Scoreboard = (props: IX01ScoreboardProps) => {
  return (
    <View style={{ height: "25%", backgroundColor: "transparent" }}>
      {props.playerList.map((player) => {
        return (
          <>
            <View key={player.id} style={styles.tableRow}>
              <Text style={{ fontWeight: "700", marginLeft: 10, flex: 0.8 }}>
                {player.name}
              </Text>
              <Text>{player.score}</Text>
            </View>
          </>
        );
      })}
    </View>
  );
};

export default X01Scoreboard;

const styles = StyleSheet.create({
  tableRow: {
    flexDirection: "row",
    paddingTop: 15,
    paddingBottom: 10,
  },
});
