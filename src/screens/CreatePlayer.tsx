import React from "react";
import { Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { View } from "../components/Themed";
import useGame, { IPlayers } from "../hooks/useGame";

import DisplayPlayerList from "../components/DisplayPlayerList";
import PlayerInput from "../components/PlayerInput";

const CreatePlayer = () => {
  const {
    playerList,
    addPlayer,
    deletePlayer,
    setSelectedPlayers,
    selectedPlayers,
  } = useGame();
  const navigator = useNavigation();

  const initialState = {
    id: Math.floor(Math.random() * 100),
    name: "",
    score: 0,
    scoreList: [],
    lives: 0,
    selected: false,
  };

  const [playerName, setPlayerName] = React.useState<IPlayers>(initialState);

  const onAddPlayer = () => {
    addPlayer(playerName);
    setPlayerName(initialState);
  };

  return (
    <>
      <View style={styles.container}>
        <PlayerInput
          playerName={playerName}
          setPlayerName={setPlayerName}
          onAddPlayer={onAddPlayer}
        />
        <DisplayPlayerList
          playerList={playerList}
          selectedPlayers={selectedPlayers}
          deletePlayer={deletePlayer}
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
});
