import React from "react";
import { Text, View } from "../components/Themed";
import { Button, FlatList, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { RootStackParamList } from "../types";

import SelectionDropdown from "../components/Dropdown";
import useGame, { PlayerList } from "../hooks/useGame";
import { useThemeColor } from "../components/Themed";
import useColorScheme from "../hooks/useColorScheme";

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

const CreateMatch = () => {
  const navigator = useNavigation();
  const {
    playerList,
    setPlayerList,
    selectedGame,
    setSelectedGame,
    selectedPlayers,
    setSelectedPlayers,
  } = useGame();
  const [game, setGame] = React.useState<keyof RootStackParamList>();
  const theme = useColorScheme();
  const color = useThemeColor({ light: "black", dark: "white" }, "background");

  return (
    <>
      <View
        style={{
          height: "20%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Pressable
          style={({ pressed }) => [
            {
              opacity: pressed ? 0.5 : 1,
            },
            styles.gameSelection,
            theme === "light" && { backgroundColor: "lightblue" },
          ]}
          onPressOut={() => {}}
        >
          <Text style={{ fontSize: 40 }}>{selectedGame}</Text>
        </Pressable>
      </View>
      <View style={{ height: "70%", backgroundColor: "grey" }}>
        {selectedPlayers.length === 0 ? (
          <SelectPlayersMessage />
        ) : (
          <DisplaySelectedPlayers selectedPlayers={selectedPlayers} />
        )}
      </View>
      <Button
        title="Continue"
        onPress={
          () => {}
          // navigator.navigate(`${selectedGame}`
        }
        disabled={selectedPlayers.length === 0 ? true : false}
      />

      {/* <SelectionDropdown
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
      </View> */}
    </>
  );
};

export default CreateMatch;

const styles = StyleSheet.create({
  gameSelection: {
    width: "100%",
    height: "100%",
    backgroundColor: "royalblue",
    alignItems: "center",
    justifyContent: "center",
  },
});

interface IDisplaySelectedPlayersProps {
  selectedPlayers: PlayerList;
}

const DisplaySelectedPlayers = (props: IDisplaySelectedPlayersProps) => {
  return (
    <>
      <View style={{ marginTop: 20 }}>
        <FlatList
          extraData={props.selectedPlayers}
          data={props.selectedPlayers}
          renderItem={({ item }) => (
            <Text style={{ fontSize: 30, padding: 15 }}>- {item.name}</Text>
          )}
        />
      </View>
    </>
  );
};

const SelectPlayersMessage = () => {
  return (
    <>
      <View
        style={{
          marginTop: "25%",
          height: "30%",
          justifyContent: "center",
          alignItems: "center",
          borderStyle: "solid",
          borderColor: "white",
        }}
      >
        <Text style={{ fontSize: 30 }}>Please Select players to continue</Text>
      </View>
    </>
  );
};
