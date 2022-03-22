import React from "react";
import { Text, View, useThemeColor } from "../components/Themed";
import { Button, FlatList, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

import DisplayModel from "../components/Modal";
import GameSelection from "./SelectGame";

import useGame, { PlayerList } from "../hooks/useGame";
import useColorScheme from "../hooks/useColorScheme";

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

  const theme = useColorScheme();
  const color = useThemeColor({ light: "black", dark: "white" }, "background");
  const [currentPlayers, setCurrentPlayers] =
    React.useState<PlayerList>(playerList);

  const [modalVisible, setModalVisible] = React.useState(false);

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
          onPressOut={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <Text style={{ fontSize: 40 }}>{selectedGame}</Text>
        </Pressable>
      </View>
      <View style={{ height: "70%", backgroundColor: "grey" }}>
        {playerList.length === 0 ? (
          <SelectPlayersMessage />
        ) : (
          <DisplaySelectedPlayers selectedPlayers={playerList} />
        )}
      </View>
      <Button
        title="Continue"
        onPress={() => navigator.navigate(`${selectedGame!}`)}
        disabled={playerList.length === 0 ? true : false}
      />
      {modalVisible && (
        <DisplayModel
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        >
          <GameSelection
            setSelectedGame={setSelectedGame}
            selectedGame={selectedGame}
            setModalVisible={setModalVisible}
            modalVisible={modalVisible}
          />
        </DisplayModel>
      )}
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
            <Text style={{ fontSize: 30, padding: 15 }}> {item.name}</Text>
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
