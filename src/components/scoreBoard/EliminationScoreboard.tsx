import React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "../Themed";

import { PlayerList } from "../../hooks/useGame";

// Constants
import { eliminationHeaderOptions } from "../../constants/TableHeaderOptions";

interface IEliminationScoreboardProps {
  playerList: PlayerList;
}

const EliminationScoreboard = (props: IEliminationScoreboardProps) => {
  return (
    <View
      style={{ height: "25%", backgroundColor: "transparent", marginLeft: 10 }}
    >
      <View
        style={[
          styles.tableRow,
          { borderBottomColor: "black", borderBottomWidth: 1 },
        ]}
      >
        <Text style={{ width: "33%" }}>{eliminationHeaderOptions[0]}</Text>
        <Text style={styles.columnTextStyle}>
          {eliminationHeaderOptions[1]}
        </Text>
        <Text style={styles.columnTextStyle}>
          {eliminationHeaderOptions[2]}
        </Text>
      </View>
      {props.playerList.map((player) => {
        return (
          <View key={player.id} style={styles.tableRow}>
            <Text style={{ width: "33%" }}>{player.name}</Text>
            <Text style={styles.columnTextStyle}>{player.score}</Text>
            <Text style={styles.columnTextStyle}>{player.lives}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default EliminationScoreboard;

const styles = StyleSheet.create({
  columnTextStyle: {
    width: "33%",
    textAlign: "center",
  },
  tableRow: {
    flexDirection: "row",
    paddingTop: 15,
    paddingBottom: 10,
  },
});
