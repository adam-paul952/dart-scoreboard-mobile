import React from "react";
import { StyleSheet, ScrollView } from "react-native";

import { Text, View } from "../components/Themed";

import CustomAccordian from "../components/Accordian";
import RulesDescription from "../components/RulesDescription";

const games = ["Baseball", "X01", "Cricket", "Elimination", "Killer"];

const Rules = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rules</Text>
      <ScrollView>
        {games.map((game) => {
          return (
            <CustomAccordian title={game}>
              <RulesDescription variant={game} />
            </CustomAccordian>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Rules;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: "5%",
    marginVertical: "5%",
  },
});
