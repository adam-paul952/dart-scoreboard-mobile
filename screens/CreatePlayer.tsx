import React from "react";
import { Button, StyleSheet, TextInput } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

const CreatePlayer = ({ navigation }: RootTabScreenProps<"GetStarted">) => {
  const [playerName, setPlayerName] = React.useState<string>("");
  return (
    <View style={styles.container}>
      <Text>Enter Playername:</Text>
      <TextInput
        style={styles.input}
        value={playerName}
        onChangeText={() => setPlayerName(playerName)}
        keyboardType="default"
      />
      <Button title="Submit" onPress={() => {}} />
    </View>
  );
};

export default CreatePlayer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white",
    width: "50%",
  },
});
