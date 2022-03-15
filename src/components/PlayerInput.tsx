import React from "react";
import { Button, StyleSheet, TextInput } from "react-native";

import { Text } from "../components/Themed";

import { IPlayers } from "../hooks/useGame";

interface IPlayerInputProps {
  playerName: IPlayers;
  setPlayerName: React.Dispatch<React.SetStateAction<IPlayers>>;
  onAddPlayer: () => void;
}

const PlayerInput = ({
  playerName,
  setPlayerName,
  onAddPlayer,
}: IPlayerInputProps) => {
  const { name } = playerName;
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
