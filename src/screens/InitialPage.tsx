import React from "react";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Text, View } from "../components/Themed";

import CustomButton from "../components/CustomButton";

const InitialLandingPage = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Text
        style={{
          fontSize: 20,
          marginTop: "30%",
          width: "60%",
          marginBottom: "10%",
        }}
      >
        Continue as a guest or make an account to sign in
      </Text>
      <CustomButton
        title="Continue as Guest"
        buttonStyle={{
          width: "70%",
          backgroundColor: "lightblue",
          marginVertical: "4%",
          borderRadius: 10,
          height: 70,
          justifyContent: "center",
        }}
        textStyle={{ textAlign: "center", fontSize: 30 }}
        onPress={() => {
          navigation.navigate("LandingPage");
        }}
      />
      <CustomButton
        title="Login"
        buttonStyle={{
          width: "70%",
          backgroundColor: "lightblue",
          marginVertical: "4%",
          borderRadius: 10,
          height: 70,
          justifyContent: "center",
        }}
        textStyle={{ textAlign: "center", fontSize: 30 }}
        onPress={() => {
          navigation.navigate("Login");
        }}
      />
      <CustomButton
        title="Sign Up"
        buttonStyle={{
          width: "70%",
          backgroundColor: "lightblue",
          marginVertical: "4%",
          borderRadius: 10,
          height: 70,
          justifyContent: "center",
        }}
        textStyle={{ textAlign: "center", fontSize: 30 }}
        onPress={() => {
          navigation.navigate("Signup");
        }}
      />
    </View>
  );
};

export default InitialLandingPage;

const styles = StyleSheet.create({});
