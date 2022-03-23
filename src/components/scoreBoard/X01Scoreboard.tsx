import React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "../Themed";

import { PlayerList } from "../../hooks/useGame";

// Constants
import { x01HeaderOptions } from "../../constants/TableHeaderOptions";

interface IX01ScoreboardProps {
  playerList: PlayerList;
}

const X01Scoreboard = (props: IX01ScoreboardProps) => {
  return (
    <View style={{ height: "25%", backgroundColor: "transparent" }}>
      <View
        style={[
          styles.tableRow,
          { borderBottomColor: "black", borderBottomWidth: 1 },
        ]}
      >
        <Text style={{ width: "50%" }}>{x01HeaderOptions[0]}</Text>
        <Text style={styles.columnTextStyle}>{x01HeaderOptions[1]}</Text>
      </View>
      {props.playerList.map((player) => {
        return (
          <View key={player.id} style={styles.tableRow}>
            <Text style={{ fontWeight: "700", marginLeft: 10, flex: 0.8 }}>
              {player.name}
            </Text>
            <Text>{player.score}</Text>
          </View>
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
  columnTextStyle: {
    width: "33%",
    textAlign: "center",
  },
});
