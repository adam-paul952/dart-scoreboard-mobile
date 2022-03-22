import React from "react";
import { FlatList, StyleSheet } from "react-native";

import { Text, View } from "../../components/Themed";

import { PlayerList } from "../../hooks/useGame";

const BaseballScoreboard = ({ playerList }: { playerList: PlayerList }) => {
  return (
    <>
      <View style={styles.listContainer}>
        <FlatList
          extraData={playerList}
          data={playerList}
          renderItem={(item) => (
            <View key={item.item.id} style={styles.listRow}>
              <Text
                style={[
                  styles.listCol,
                  {
                    width: "18%",
                    textAlign: "left",
                    borderRightWidth: 1,
                    borderRightColor: "black",
                  },
                ]}
              >
                {item.item.name}
              </Text>
              <Text style={styles.listCol}>{item.item.scoreList[0]}</Text>
              <Text style={styles.listCol}>{item.item.scoreList[1]}</Text>
              <Text style={styles.listCol}>{item.item.scoreList[2]}</Text>
              <Text style={styles.listCol}>{item.item.scoreList[3]}</Text>
              <Text style={styles.listCol}>{item.item.scoreList[4]}</Text>
              <Text style={styles.listCol}>{item.item.scoreList[5]}</Text>
              <Text style={styles.listCol}>{item.item.scoreList[6]}</Text>
              <Text style={styles.listCol}>{item.item.scoreList[7]}</Text>
              <Text style={styles.listCol}>{item.item.scoreList[8]}</Text>
              <Text style={styles.listCol}>
                {item.item.scoreList!.reduce(
                  (sum, current) => sum + current,
                  0
                )}
              </Text>
            </View>
          )}
        />
      </View>
    </>
  );
};

export default BaseballScoreboard;

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: "white",
    paddingBottom: 5,

    // marginBottom: 50,
  },
  listRow: {
    flexDirection: "row",
    marginTop: 20,
    // marginBottom: 20,
    justifyContent: "space-around",
    // alignContent: "center",
    backgroundColor: "white",

    color: "black",
    // flex: 12,
  },
  listCol: {
    // marginLeft: 20,
    // marginRight: 20,

    fontWeight: "bold",
    width: "5%",
    textAlign: "center",
  },
});
