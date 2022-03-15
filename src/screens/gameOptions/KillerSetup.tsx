import React from "react";

import { Alert, Button, FlatList, StyleSheet, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

import { Text, View } from "../../components/Themed";

import useGame from "../../hooks/useGame";
import Colors from "../../constants/Colors";
import useColorScheme from "../../hooks/useColorScheme";

const KillerSetUp = () => {
  const {
    playerList,
    setPlayerList,
    assignPlayerTarget,
    getCurrentPlayer,
    killerTargets,
    setKillerTargets,
  } = useGame();
  const navigator = useNavigation();
  const colorScheme = useColorScheme();
  const [playerTarget, setPlayerTarget] = React.useState<string>("");

  let currentPlayerById = getCurrentPlayer();

  const onHandleChange = (text: string) => {
    const target = parseInt(text, 10);
    if (isNaN(target)) {
      setPlayerTarget("");
      return;
    } else {
      setPlayerTarget(text);
    }
  };

  const onTargetSubmit = () => {
    const target = parseInt(playerTarget, 10);
    if (target < 1 || target > 20) {
      invalidScoreAlert(target);
      setPlayerTarget("");
    } else {
      assignPlayerTarget(target);
      setPlayerTarget("");
    }
  };

  const sortPlayerList = () => {
    const sortedList = playerList.sort((a, b) => (a.score > b.score ? 1 : -1));
    setPlayerList(sortedList);
  };

  const onSetupSubmit = () => {
    const assignCalculatorButtons = playerList.map((player) => {
      return { label: player.score, value: player.score };
    });
    setKillerTargets(assignCalculatorButtons);
    sortPlayerList();
    navigator.navigate("KillerGame");
  };

  return (
    <>
      <View style={styles.container}>
        <Text>Enter Score:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={playerTarget}
          onChangeText={(number) => onHandleChange(number)}
          onSubmitEditing={() => onTargetSubmit()}
        />
        <Button
          title="Enter Score"
          onPress={() => {
            onTargetSubmit();
          }}
        />
        <FlatList
          extraData={playerList}
          data={playerList}
          renderItem={(item) => (
            <View key={item.item.id} style={styles.listRow}>
              {item.item.id === currentPlayerById.id ? (
                <AntDesign
                  name="caretright"
                  size={20}
                  color={Colors[colorScheme].text}
                />
              ) : (
                <></>
              )}
              <Text style={styles.listCol}>{item.item.id}</Text>
              <Text style={styles.listCol}>{item.item.name}</Text>
              <Text style={styles.listCol}>{item.item.score}</Text>
            </View>
          )}
        />
        <Button
          title="Continue to Game"
          onPress={() => {
            onSetupSubmit();
          }}
        />
      </View>
    </>
  );
};

export default KillerSetUp;

const invalidScoreAlert = (score: number) =>
  Alert.alert(
    "Invalid Score",
    `Score must be between 1 and 20! \n\nYou Entered ${score}.`,
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]
  );

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 50,
    marginBottom: 0,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white",
    width: "50%",
  },
  listRow: {
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 20,
    justifyContent: "space-around",
    alignItems: "center",
  },
  listCol: {
    marginLeft: 20,
    marginRight: 20,
  },
});
