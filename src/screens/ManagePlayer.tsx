import React from "react";
import { Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { View } from "../components/Themed";
import useGame from "../hooks/useGame";

import DisplayPlayerList from "../components/DisplayPlayerList";

const ManagePlayer = () => {
  const { playerList, deletePlayer, selectedPlayers } = useGame();
  const navigator = useNavigation();

  return (
    <>
      <View style={styles.container}>
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

export default ManagePlayer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 50,
    marginBottom: 0,
  },
});
