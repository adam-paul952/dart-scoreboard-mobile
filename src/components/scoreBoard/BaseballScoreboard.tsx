import React from "react";
import { FlatList, StyleSheet } from "react-native";

import { Text, View } from "../../components/Themed";

import { PlayerList } from "../../hooks/useGame";

// Constants
import { baseballHeaderOptions } from "../../constants/TableHeaderOptions";

interface IBaseballScoreboardProps {
  playerList: PlayerList;
}

const BaseballScoreboard = (props: IBaseballScoreboardProps) => {
  return (
    <>
      <View style={styles.listContainer}>
        <View
          style={[
            styles.listRow,
            { borderBottomColor: "black", borderBottomWidth: 1 },
          ]}
        >
          {baseballHeaderOptions.map((header, index) => {
            if (index === 0) {
              return (
                <Text
                  key={header}
                  style={[
                    styles.listCol,
                    styles.startColumn,
                    {
                      width: "17%",
                    },
                  ]}
                >
                  {header}
                </Text>
              );
            } else if (index === baseballHeaderOptions.length - 1) {
              return (
                <Text key={header} style={{ fontWeight: "700" }}>
                  {header}
                </Text>
              );
            } else {
              return <Text key={header}>{header}</Text>;
            }
          })}
        </View>
        <FlatList
          extraData={props.playerList}
          data={props.playerList}
          renderItem={(item) => (
            <View key={item.item.id} style={styles.listRow}>
              <Text style={[styles.listCol, styles.startColumn]}>
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
              <Text style={[styles.listCol, styles.lastColumn]}>
                {item.item.scoreList[8]}
              </Text>
              <Text style={[styles.listCol, { width: "9%" }]}>
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
    backgroundColor: "transparent",
    paddingBottom: 5,
    height: "30%",
  },
  listRow: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-around",
    backgroundColor: "white",
    color: "black",
    paddingTop: 5,
  },
  listCol: {
    fontWeight: "bold",
    width: "5%",
    textAlign: "center",
  },
  startColumn: {
    width: "18%",
    textAlign: "left",
    borderRightWidth: 1,
    borderRightColor: "black",
  },
  lastColumn: {
    borderRightColor: "black",
    borderRightWidth: 1,
    borderStyle: "solid",
  },
});
