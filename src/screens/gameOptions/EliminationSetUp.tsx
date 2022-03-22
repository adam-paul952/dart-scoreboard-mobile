import React from "react";

import { Button, StyleSheet } from "react-native";

import { Text, View } from "../../components/Themed";
import { useNavigation } from "@react-navigation/native";

import useGame from "../../hooks/useGame";
import SelectionDropdown from "../../components/Dropdown";

const eliminationLives = [
  { label: 3, value: 3 },
  { label: 4, value: 4 },
  { label: 5, value: 5 },
  { label: 6, value: 6 },
  { label: 7, value: 7 },
  { label: 8, value: 8 },
  { label: 9, value: 9 },
  { label: 10, value: 10 },
];

const EliminationSetUp = () => {
  const { assignPlayerLives, setSelectedGame } = useGame();
  const navigator = useNavigation();
  const [playerLives, setPlayerLives] = React.useState<number>(0);

  const onLifeSubmit = () => {
    assignPlayerLives(playerLives);
  };
  return (
    <>
      <SelectionDropdown
        variant="elimination"
        array={eliminationLives}
        labelHeader="Lives"
        initialPlaceholder="Select Lives"
        setGame={setPlayerLives}
        setSelectedGame={setSelectedGame}
      />
      <View>
        <Text>Lives selected: {playerLives}</Text>
        <Button
          title="Continue"
          onPress={() => {
            onLifeSubmit();
            navigator.navigate("EliminationGame");
          }}
          disabled={!playerLives ? true : false}
        ></Button>
      </View>
    </>
  );
};

export default EliminationSetUp;

const styles = StyleSheet.create({});
