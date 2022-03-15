import React from "react";
import { Button, StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";

import SelectionDropdown from "../components/Dropdown";

import { RootStackParamList } from "../../types";

import { useNavigation } from "@react-navigation/native";

// Array for dropdown items
const games = [
  { label: "Baseball", value: "Baseball" },
  { label: "Cricket", value: "Cricket" },
  { label: "Elimination", value: "Elimination" },
  { label: "Killer", value: "Killer" },
  { label: "X01", value: "X01" },
];

// Constants for label text
const labelHeader = "Available Games";
const initialPlaceholder = "Select a game";

interface ISelectGameProps {
  setSelectedGame: React.Dispatch<
    React.SetStateAction<keyof RootStackParamList | undefined>
  >;
  selectedGame: keyof RootStackParamList | undefined;
  setModalVisible?: React.Dispatch<React.SetStateAction<boolean>>;
  modalVisible?: boolean;
}

const GameSelection = ({
  setSelectedGame,
  selectedGame,
  setModalVisible,
  modalVisible,
}: ISelectGameProps) => {
  const navigator = useNavigation();
  const [game, setGame] = React.useState<keyof RootStackParamList>();

  return (
    <View style={styles.container}>
      <SelectionDropdown
        array={games}
        labelHeader={labelHeader}
        initialPlaceholder={initialPlaceholder}
        setGame={setGame}
        setSelectedGame={setSelectedGame}
      />
      <View>
        <Text style={{ fontSize: 18 }}>Game selected: {game}</Text>
        <Button
          title="Select Game"
          onPress={() => {
            console.log(`The game has been set as ${selectedGame}`);
            setModalVisible!(!modalVisible);
          }}
          disabled={!game ? true : false}
        ></Button>
      </View>
    </View>
  );
};

export default GameSelection;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "70%",
  },
});
