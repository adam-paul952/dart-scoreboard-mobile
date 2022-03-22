import React from "react";
import { FlatList, Pressable, StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";

import { IPlayers, PlayerList } from "../hooks/useGame";
import { useNavigation } from "@react-navigation/native";

import { Feather } from "@expo/vector-icons";

interface IDisplaySelectedPlayersProps {
  playerList: PlayerList;
  selectedPlayers: PlayerList;
  deletePlayer: (id: number) => void;
}

const DisplayPlayerList = ({
  playerList,
  deletePlayer,
}: IDisplaySelectedPlayersProps) => {
  return (
    <>
      <FlatList
        extraData={playerList}
        data={playerList}
        renderItem={(item) => (
          <View key={item.item.id} style={styles.listRow}>
            <Pressable
              style={({ pressed }) => [
                { opacity: pressed ? 0.5 : 1 },
                { flexDirection: "row" },
              ]}
            >
              <Text style={styles.listCol}>{item.item.id}</Text>
              <Text style={styles.listCol}>{item.item.name}</Text>
            </Pressable>
            <View style={styles.listCol}>
              <Pressable
                onPressOut={() => {
                  deletePlayer(item.item.id);
                }}
              >
                <Feather name="delete" size={27} color="black" />
              </Pressable>
            </View>
          </View>
        )}
      />
    </>
  );
};

export default DisplayPlayerList;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },

  listRow: {
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 20,
    justifyContent: "space-around",
    alignItems: "center",
  },
  listCol: {
    marginLeft: 20,
    marginRight: 20,
    fontSize: 22,
  },
});
