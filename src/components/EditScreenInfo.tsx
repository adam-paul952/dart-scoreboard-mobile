import * as WebBrowser from "expo-web-browser";
import React from "react";
import { Button, StyleSheet, TouchableOpacity } from "react-native";

import Colors from "../constants/Colors";
import { MonoText } from "./StyledText";
import { Text, View } from "./Themed";

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

export default function EditScreenInfo({
  setSelectedGame,
}: {
  setSelectedGame: React.Dispatch<
    React.SetStateAction<keyof RootStackParamList>
  >;
}) {
  const navigator = useNavigation();
  const [game, setGame] = React.useState<keyof RootStackParamList>();
  return (
    <View>
      <SelectionDropdown
        array={games}
        labelHeader={labelHeader}
        initialPlaceholder={initialPlaceholder}
        setGame={setGame}
      />
      <View>
        <Text style={{ fontSize: 18 }}>Game selected: {game}</Text>
        <Button
          title="Select Game"
          onPress={async () => {
            await setSelectedGame(game!);
            await navigator.goBack();
          }}
          disabled={!game ? true : false}
        ></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: "center",
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: "center",
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: "center",
  },
});
