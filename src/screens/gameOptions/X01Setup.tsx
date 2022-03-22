import React from "react";
import { Button, FlatList, StyleSheet } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { Text, View } from "../../components/Themed";
import { useNavigation } from "@react-navigation/native";

// TODO: Use header from Select Game, make universal component

import useGame from "../../hooks/useGame";
import SelectionDropdown from "../../components/Dropdown";

// Array for dropdown items
const x01PointsList = [
  { label: 201, value: 201 },
  { label: 301, value: 301 },
  { label: 401, value: 401 },
  { label: 501, value: 501 },
  { label: 601, value: 601 },
  { label: 701, value: 701 },
];

// Constants for label text
const labelHeader = "Points";
const initialPlaceholder = "Select number of points";

const X01GameSelection = () => {
  const navigator = useNavigation();
  const {
    x01Points,
    setX01Points,
    x01GameSelect,
    assignX01PlayerScore,
    setSelectedGame,
  } = useGame();

  const [game, setGame] = React.useState<number>(0);

  const onPointsSubmit = () => {
    setX01Points(game);
    x01GameSelect(x01Points);
    assignX01PlayerScore(x01Points);
  };

  return (
    <>
      <SelectionDropdown
        variant="x01"
        array={x01PointsList}
        labelHeader={labelHeader}
        initialPlaceholder={initialPlaceholder}
        setGame={setGame}
        setX01Points={setX01Points}
        setSelectedGame={setSelectedGame}
      />
      <View>
        <Text>Game selected: {game}</Text>
        <Button
          title="Continue"
          onPress={() => {
            onPointsSubmit();
            navigator.navigate("X01Game");
          }}
          disabled={!game ? true : false}
        ></Button>
      </View>
    </>
  );
};

export default X01GameSelection;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    backgroundColor: "white",
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
});
