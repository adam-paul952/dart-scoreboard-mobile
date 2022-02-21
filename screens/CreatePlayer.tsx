import React from "react";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Text, View } from "../components/Themed";
import useGame, { IPlayers } from "../hooks/useGame";

import AsyncStorage from "@react-native-async-storage/async-storage";

const CONTENT = {
  tableHead: ["Id", "Player Name", "", "Delete"],
  tableTitle: ["1", "2", "3", "4"],
  tableData: [
    ["Adam", "", "3"],
    ["Raelene", "", "c"],
    ["Greg", "", "3"],
    ["Emily", "", "c"],
  ],
};

const CreatePlayer = () => {
  const { playerList, addPlayer, deletePlayer } = useGame();
  const navigator = useNavigation();

  const initialState = {
    id: Math.floor(Math.random() * 100),
    name: "",
  };

  const [playerName, setPlayerName] = React.useState<IPlayers>(initialState);
  const { name } = playerName;
  const [refreshFlatList, setRefreshFlatList] = React.useState(false);

  const onAddPlayer = () => {
    addPlayer(playerName);
    setPlayerName(initialState);
  };
  return (
    <>
      <View style={styles.container}>
        <Text>Enter Playername:</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={(text) => setPlayerName({ ...playerName, name: text })}
          keyboardType="default"
        />
        <Button
          title="Add Player"
          onPress={() => {
            onAddPlayer();
          }}
        />
        <ScrollView>
          <View style={styles.list}>
            <FlatList
              extraData={refreshFlatList}
              data={playerList}
              renderItem={(item) => (
                <View key={item.item.id} style={styles.listRow}>
                  <Text style={styles.listCol}>{item.item.id}</Text>
                  <Text style={styles.listCol}>{item.item.name}</Text>
                  <View style={styles.listCol}>
                    {/* <DeleteButton
                    playerId={item.item.id}
                    deletePlayer={deletePlayer}
                  /> */}
                    <Button
                      title="Delete"
                      onPress={() => {
                        console.log(`Deleted player ${item.item.name}`);
                        console.log(`Deleted player ${item.item.id}`);
                        console.log(
                          `PlayerList length after delete ${playerList.length}`
                        );
                        console.log(`What is item.item = ${item.item}`);
                        deletePlayer(item.item.id);
                        setRefreshFlatList(!refreshFlatList);
                      }}
                    />
                  </View>
                </View>
              )}
            />
            <Button
              title="Create Game"
              onPress={() => {
                navigator.navigate("CreateGame");
              }}
            />
          </View>
          {/* <Button
            title="Reset State"
            onPress={() => {
              AsyncStorage.clear();
            }}
          /> */}
        </ScrollView>
      </View>
    </>
  );
};

export default CreatePlayer;

interface IDeleteButtonProps {
  playerId: number;
  deletePlayer: (id: number) => void;
}

const DeleteButton = ({ playerId, deletePlayer }: IDeleteButtonProps) => {
  const removePlayer = (id: number) => {
    deletePlayer(id);
  };

  return (
    <Button
      title="Delete"
      onPress={() => {
        removePlayer(playerId);
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    marginTop: 50,
    marginBottom: 0,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white",
    width: "50%",
  },
  tableContainer: {
    flex: 1,
    padding: 16,
    paddingTop: 100,
    color: "white",
    backgroundColor: "#fff",
  },
  head: { height: 40, backgroundColor: "orange" },
  wrapper: { flexDirection: "row" },
  tableTitle: { flex: 1, backgroundColor: "#2ecc71" },
  row: { height: 28 },
  text: { textAlign: "center", color: "white" },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  list: { marginTop: 20, justifyContent: "center", alignItems: "center" },
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
  },
});
