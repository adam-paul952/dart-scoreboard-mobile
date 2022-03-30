import React from "react";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
// Components
import { Text, View } from "../../components/Themed";
import CustomButton from "../../components/CustomButton";
//Auth Context
import { useAuthState } from "../../context/AuthContext";

const guestPayload = {
  id: "1",
  username: "guest",
  userToken: "",
};

const InitialLandingPage = () => {
  const navigation = useNavigation();
  const { dispatch } = useAuthState();

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
        buttonStyle={styles.buttonStyle}
        textStyle={styles.buttonText}
        onPress={() => {
          dispatch({ type: "SIGN_IN", payload: guestPayload });
        }}
      />
      <CustomButton
        title="Login"
        buttonStyle={styles.buttonStyle}
        textStyle={styles.buttonText}
        onPress={() => {
          navigation.navigate("Login");
        }}
      />
      <CustomButton
        title="Sign Up"
        buttonStyle={styles.buttonStyle}
        textStyle={styles.buttonText}
        onPress={() => {
          navigation.navigate("Signup");
        }}
      />
    </View>
  );
};

export default InitialLandingPage;

const styles = StyleSheet.create({
  buttonStyle: {
    width: "70%",
    backgroundColor: "lightblue",
    marginVertical: "4%",
    borderRadius: 10,
    height: 70,
    justifyContent: "center",
  },
  buttonText: { textAlign: "center", fontSize: 30 },
});
