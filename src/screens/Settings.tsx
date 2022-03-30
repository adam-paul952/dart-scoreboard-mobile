import React from "react";
import { StyleSheet } from "react-native";
// Components
import { Text, View } from "../components/Themed";

const UserSettings = () => {
  return (
    <>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 25 }}>
          This is where registered user settings will be:
        </Text>
        <Text style={{ fontSize: 25 }}>Delete Account, Edit account ....</Text>
      </View>
    </>
  );
};

export default UserSettings;

const styles = StyleSheet.create({});
