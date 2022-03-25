import React from "react";
import { Alert, Keyboard, Platform, Pressable, StyleSheet } from "react-native";
// Hooks
import { useNavigation } from "@react-navigation/native";
import useAWSAuth from "../hooks/useAWSAuth";
// Components
import { KeyboardAvoidingView, View } from "../components/Themed";
import TextInput from "../components/TextInput";
import CustomButton from "../components/CustomButton";

const SignupPage = () => {
  const { isError, signUp, errorMessage } = useAWSAuth();
  const navigation = useNavigation();
  const [username, setUsername] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = React.useState<string>("");

  const registerUser = async (username: string, password: string) => {
    await signUp(username, password);
    if (isError) {
      return Alert.alert("Error", `${errorMessage}`, [
        {
          text: "OK",
          style: "cancel",
        },
      ]);
    } else {
      navigation.navigate("ConfirmSignup", { username: username });
    }
  };

  const verifyPassword = async () => {
    if (password !== passwordConfirm) {
      Alert.alert("Error", "Passwords do not match", [
        {
          text: "OK",
          style: "cancel",
        },
      ]);
    } else {
      await registerUser(username, password);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={{ flex: 1 }}
    >
      <Pressable onPress={Keyboard.dismiss}>
        <View
          style={{
            alignItems: "center",
            height: "100%",
            marginVertical: "20%",
          }}
        >
          <TextInput
            label="Email"
            value={username}
            setValue={setUsername}
            keyboardType="email-address"
          />
          <TextInput
            label="Password"
            value={password}
            setValue={setPassword}
            secureTextEntry
          />
          <TextInput
            label="Password Confirm"
            value={passwordConfirm}
            setValue={setPasswordConfirm}
            secureTextEntry
          />

          <CustomButton
            title="Register"
            buttonStyle={{
              backgroundColor: "grey",
              width: "50%",
              alignItems: "center",
              marginTop: "10%",
              height: "7%",
              justifyContent: "center",
              borderRadius: 10,
            }}
            textStyle={{ fontSize: 30 }}
            onPressIn={async () => await verifyPassword()}
          />
        </View>
      </Pressable>
    </KeyboardAvoidingView>
  );
};

export default SignupPage;

const styles = StyleSheet.create({});

/* ---------- Sign Out ---------- */
/*
<Pressable style={{ backgroundColor: "grey", marginVertical: "5%" }}>
          <Text>Sign Out</Text>
        </Pressable>
        */
/*           EndSignOut                        */
