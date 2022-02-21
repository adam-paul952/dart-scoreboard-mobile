import React from "react";

import { StyleSheet } from "react-native";
import { Text, View } from "../../components/Themed";

const Baseball = () => {
  return (
    <>
      <View>
        <Scoreboard />
        <BaseballScoreCalculator />
      </View>
    </>
  );
};

export default Baseball;

const styles = StyleSheet.create({});

const Scoreboard = () => {
  return <></>;
};

const BaseballScoreCalculator = () => {
  return <></>;
};
