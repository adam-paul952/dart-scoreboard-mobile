import React from "react";
import { Button, StyleSheet, TextInput } from "react-native";

import { Text } from "../components/Themed";

import useGame, { IPlayers } from "../hooks/useGame";

const initialState = {
  id: Math.floor(Math.random() * 100),
  name: "",
  score: 0,
  scoreList: [],
  lives: 0,
  selected: true,
};

const PlayerInput = ({
  modalVisible,
  setModalVisible,
}: {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { addPlayer } = useGame();

  const [playerName, setPlayerName] = React.useState<IPlayers>(initialState);
  const { name } = playerName;

  const onAddPlayer = () => {
    addPlayer(playerName);
    setPlayerName(initialState);
  };

  return (
    <>
      <Text>Enter Playername:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={(text) => setPlayerName({ ...playerName, name: text })}
        keyboardType="default"
        onSubmitEditing={() => onAddPlayer()}
      />
      <Button
        title="Add Player"
        onPress={() => {
          onAddPlayer();
          setModalVisible(!modalVisible);
        }}
      />
    </>
  );
};

export default PlayerInput;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white",
    width: "50%",
  },
});
