import React from "react";

import { FlatList, StyleSheet } from "react-native";
import { Text, View } from "../../components/Themed";
import useGame, { PlayerList } from "../../hooks/useGame";

import BaseballScoreCalculator from "../../components/scoreCalculator/BaseballScoreCalculator";

const Baseball = () => {
  const { playerList, nextTurn, getCurrentPlayer } = useGame();

  return (
    <>
      <View style={styles.container}>
        <Scoreboard playerList={playerList} />
        <BaseballScoreCalculator
          nextTurn={nextTurn}
          getCurrentPlayer={getCurrentPlayer}
        />
      </View>
    </>
  );
};

export default Baseball;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    padding: 16,
  },
  listContainer: {
    backgroundColor: "white",
    marginBottom: 50,
  },
  listRow: {
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 20,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "white",
  },
  listCol: {
    marginLeft: 20,
    marginRight: 20,
    color: "black",
    fontWeight: "bold",
  },
});

const Scoreboard = ({ playerList }: { playerList: PlayerList }) => {
  return (
    <>
      <View style={styles.listContainer}>
        <FlatList
          extraData={playerList}
          data={playerList}
          renderItem={(item) => (
            <View key={item.item.id} style={styles.listRow}>
              <Text style={styles.listCol}>{item.item.name}</Text>
              {/* <Text style={styles.listCol}>{item.item.scoreList[0]}</Text> */}
              <View style={styles.listCol}></View>
            </View>
          )}
        />
      </View>
    </>
  );
};
