import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import { Text, View } from "../components/Themed";

const Landing = () => {
  const navigate = useNavigation();
  return (
    <>
      <View>
        <Text style={styles.header}>Getting Started:</Text>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => navigate.navigate("CreatePlayer")}>
            <Text style={styles.text}>Create Player</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigate.navigate("Rules")}>
            <Text style={styles.text}>Rules</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Landing;

const styles = StyleSheet.create({
  header: { fontSize: 20, color: "#fff", textAlign: "center" },
  container: {
    marginTop: 120,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    marginTop: 50,
    borderWidth: 1,
    padding: 25,
    borderColor: "black",
    backgroundColor: "blue",
  },
});
