import React from "react";
import { Pressable, StyleSheet } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { Text, View } from "../Themed";

// Types
import { IPlayers } from "../../hooks/useGame";
import { RootStackParamList } from "../../../types";

interface IDisplayWinnerProps {
  winner: IPlayers | null;
  resetScoreList: () => void;
  variant: keyof RootStackParamList;
}

const DisplayWinner = (props: IDisplayWinnerProps) => {
  const navigation = useNavigation();
  return (
    <View style={{ marginTop: "50%", alignItems: "center" }}>
      <Text style={{ fontSize: 20 }}>Winner is {props.winner!.name}</Text>
      <View
        style={{
          flexDirection: "row",
          marginTop: "20%",
          paddingTop: 10,
        }}
      >
        <Pressable
          style={{
            width: "40%",
            alignItems: "center",
          }}
          onPress={() => {
            props.resetScoreList();
            navigation.navigate(`${props.variant}`);
          }}
        >
          <Text style={styles.winnerText}>Play Again</Text>
        </Pressable>
        <Pressable
          style={{ width: "60%", alignItems: "center" }}
          onPress={() => {
            props.resetScoreList();
            navigation.navigate("CreateGame");
          }}
        >
          <Text style={styles.winnerText}>Choose another</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default DisplayWinner;

const styles = StyleSheet.create({
  winnerText: {
    width: "80%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    textAlign: "center",
    fontSize: 20,
    justifyContent: "center",
  },
});
