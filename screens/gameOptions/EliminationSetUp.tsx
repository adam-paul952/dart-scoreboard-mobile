import React from "react";

import { Button, FlatList, StyleSheet } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { Text, View } from "../../components/Themed";
import { useNavigation } from "@react-navigation/native";

import useGame from "../../hooks/useGame";

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
  const [playerLives, setPlayerLives] = React.useState<number>(0);
  const onLifeSelect = () => {};
  const onLifeSubmit = () => {};
  return <></>;
};

export default EliminationSetUp;
