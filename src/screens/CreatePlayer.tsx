import React from "react";
import {
  Button,
  FlatList,
  Pressable,
  StyleSheet,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Text, View } from "../components/Themed";
import useGame, { IPlayers, PlayerList } from "../hooks/useGame";

import { Feather } from "@expo/vector-icons";

const CreatePlayer = () => {
  const {
    playerList,
    addPlayer,
    deletePlayer,
    setSelectedPlayers,
    selectedPlayers,
  } = useGame();
  const navigator = useNavigation();

  let list: PlayerList = [];

  const initialState = {
    id: Math.floor(Math.random() * 100),
    name: "",
    score: 0,
    scoreList: [],
    lives: 0,
  };

  const [playerName, setPlayerName] = React.useState<IPlayers>(initialState);
  const { name } = playerName;

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
                onPressIn={() => {
                  list.push(item.item);
                  console.log(item.item);
                }}
                onPressOut={() => {
                  console.log(list);
                  // setSelectedPlayers([...selectedPlayers, list]);
                }}
                onPress={() => {
                  console.log(selectedPlayers);
                  navigator.navigate("CreateGame");
                }}
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
                  <Feather name="delete" size={27} color="white" />
                </Pressable>
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
    </>
  );
};

export default CreatePlayer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 50,
    marginBottom: 0,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white",
    width: "50%",
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
