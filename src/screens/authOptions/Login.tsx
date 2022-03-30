import React from "react";
import { Alert, Keyboard, Pressable, StyleSheet } from "react-native";
// Components
import { Text, View } from "../../components/Themed";
import TextInput from "../../components/TextInput";
import CustomButton from "../../components/CustomButton";
// Auth Context
import { useAuthState } from "../../context/AuthContext";
import useAWSAuth from "../../hooks/useAWSAuth";
// Types
import { RootStackScreenProps } from "../../../types";
type LoginProps = RootStackScreenProps<"Login">;

import { alertMessage } from "./Signup";

const LoginPage = ({ route }: LoginProps) => {
  const { userEmail, isSignedUp } = route.params;
  const { signIn } = useAWSAuth();
  const { dispatch } = useAuthState();

  const [username, setUsername] = React.useState<string>(userEmail);
  const [password, setPassword] = React.useState<string>("");

  const onHandleLogin = async () => {
    try {
      let payload = { username, password };
      await signIn(dispatch, payload);
    } catch (err) {
      alertMessage(err);
    }
  };

  return (
    <>
      <View style={{ flex: 1, alignItems: "center", paddingTop: "20%" }}>
        <Pressable onPress={Keyboard.dismiss}>
          {isSignedUp && (
            <Text
              style={{ alignSelf: "center", fontSize: 20, paddingBottom: 20 }}
            >
              Please enter password below to log in
            </Text>
          )}
          <TextInput
            label="Username"
            textStyle={styles.label}
            setValue={setUsername}
            value={username}
          />
          <TextInput
            label="Password"
            textStyle={styles.label}
            value={password}
            setValue={setPassword}
            secureTextEntry
          />
        </Pressable>
        <CustomButton
          title="Sign In"
          onPress={() => onHandleLogin()}
          buttonStyle={styles.buttonStyle}
          textStyle={{ fontSize: 25 }}
        />
      </View>
    </>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  buttonStyle: {
    width: "70%",
    backgroundColor: "lightgrey",
    alignItems: "center",
    marginTop: 20,
    borderRadius: 10,
    height: 50,
    justifyContent: "center",
  },
  label: {
    marginVertical: "3%",
  },
});
