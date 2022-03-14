import React from "react";
import { Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import {
  AntDesign,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import { useThemeColor } from "../components/Themed";
import useColorScheme from "../hooks/useColorScheme";

import { Text, View } from "../components/Themed";

const { width, height } = Dimensions.get("window");

const Landing = () => {
  const navigate = useNavigation();
  const theme = useColorScheme();
  const color = useThemeColor({ light: "black", dark: "white" }, "text");
  return (
    <>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          width: width,
        }}
      >
        <View style={[styles.container, { flex: 5, flexDirection: "column" }]}>
          <TouchableOpacity
            style={[
              styles.childStyle,
              theme === "light" && { backgroundColor: "lightblue" },
            ]}
            onPress={() => navigate.navigate("CreateGame")}
          >
            <MaterialCommunityIcons
              name="bullseye-arrow"
              size={60}
              color={color}
              style={{ marginTop: 20 }}
            />
            <Text style={styles.buttonText}>New Game</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.childStyle,
              theme === "light" && { backgroundColor: "lightblue" },
            ]}
            onPress={() => navigate.navigate("CreatePlayer")}
          >
            <AntDesign
              name="adduser"
              size={60}
              color={color}
              style={{ marginTop: 20 }}
            />
            <Text style={styles.buttonText}>Create Player</Text>
          </TouchableOpacity>
        </View>

        <View></View>

        <View style={[styles.container, { flex: 5, flexDirection: "column" }]}>
          <View
            style={[
              styles.childStyle,
              theme === "light" && { backgroundColor: "lightblue" },
            ]}
          >
            <FontAwesome5
              name="undo-alt"
              size={60}
              color={color}
              style={{ marginTop: 20 }}
            />
            <Text style={styles.buttonText}>Resume Game</Text>
          </View>
          <View
            style={[
              styles.childStyle,
              theme === "light" && { backgroundColor: "lightblue" },
            ]}
          >
            <FontAwesome5
              name="user-friends"
              size={60}
              color={color}
              style={{ marginTop: 20 }}
            />
            <Text style={styles.buttonText}>Manage Players</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default Landing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    padding: 5,
    marginTop: 40,
  },
  childStyle: {
    width: "100%",
    height: height / 3,
    backgroundColor: "royalblue",
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    marginTop: 20,
    padding: 10,
    fontSize: 24,
  },
});
