import React from "react";
import { Text, View } from "../components/Themed";
import { Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { RootStackParamList } from "../types";

import SelectionDropdown from "../components/Dropdown";
import useGame from "../hooks/useGame";

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

const CreateGame = () => {
  const navigator = useNavigation();
  const { playerList, setPlayerList } = useGame();
  const [game, setGame] = React.useState<keyof RootStackParamList>();

  return (
    <>
      <SelectionDropdown
        array={games}
        labelHeader={labelHeader}
        initialPlaceholder={initialPlaceholder}
        setGame={setGame}
      />
      <View>
        <Text>Game selected: {game}</Text>
        <Button
          title="Continue"
          onPress={() => {
            navigator.navigate(game!);
          }}
          disabled={!game ? true : false}
        ></Button>
      </View>
    </>
  );
};

export default CreateGame;

const styles = StyleSheet.create({});
