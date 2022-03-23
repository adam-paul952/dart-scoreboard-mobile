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
import CustomButton from "../components/CustomButton";

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
          <CustomButton
            title="New Game"
            textStyle={styles.buttonText}
            buttonStyle={[
              styles.childStyle,
              theme === "light" && {
                backgroundColor: "lightblue",
              },
            ]}
            buttonIconStyle={styles.buttonIcon}
            onPressOut={() => navigate.navigate("CreateGame")}
          >
            <MaterialCommunityIcons
              name="bullseye-arrow"
              size={60}
              color={color}
              style={{ marginTop: 20 }}
            />
          </CustomButton>
          <CustomButton
            title="Create Player"
            buttonStyle={[
              styles.childStyle,
              theme === "light" && { backgroundColor: "lightblue" },
            ]}
            textStyle={styles.buttonText}
            buttonIconStyle={styles.buttonIcon}
            onPressOut={() => navigate.navigate("CreatePlayer")}
          >
            <AntDesign
              name="adduser"
              size={60}
              color={color}
              style={{ marginTop: 20 }}
            />
          </CustomButton>
        </View>

        <View style={[styles.container, { flex: 5, flexDirection: "column" }]}>
          <CustomButton
            title="Resume Game"
            buttonStyle={[
              styles.childStyle,
              theme === "light" && { backgroundColor: "lightblue" },
            ]}
            textStyle={styles.buttonText}
            buttonIconStyle={styles.buttonIcon}
            onPressOut={() => {}}
          >
            <FontAwesome5
              name="undo-alt"
              size={60}
              color={color}
              style={{ marginTop: 20 }}
            />
          </CustomButton>
          <CustomButton
            title="Manage Players"
            buttonStyle={[
              styles.childStyle,
              theme === "light" && { backgroundColor: "lightblue" },
            ]}
            textStyle={[styles.buttonText, { padding: 5 }]}
            buttonIconStyle={styles.buttonIcon}
            onPressOut={() => {}}
          >
            <FontAwesome5
              name="user-friends"
              size={60}
              color={color}
              style={{ marginTop: 20 }}
            />
          </CustomButton>
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
  buttonIcon: {
    alignSelf: "center",
  },
});
