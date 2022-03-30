import React from "react";
import { Alert, Keyboard, Platform, Pressable, StyleSheet } from "react-native";
// Hooks
import { useNavigation } from "@react-navigation/native";
import useAWSAuth from "../../hooks/useAWSAuth";
// Components
import { KeyboardAvoidingView, View } from "../../components/Themed";
import TextInput from "../../components/TextInput";
import CustomButton from "../../components/CustomButton";
import { CognitoUser } from "amazon-cognito-identity-js";

interface IUser extends CognitoUser {
  result?: undefined;
  error?: string;
}

const SignupPage = () => {
  const { signUp } = useAWSAuth();
  const navigation = useNavigation();
  const [username, setUsername] = React.useState<string>("adam.paul@live.com");
  const [password, setPassword] = React.useState<string>("password");
  const [passwordConfirm, setPasswordConfirm] =
    React.useState<string>("password");

  const verifyPassword = async () => {
    if (password !== passwordConfirm) {
      return Alert.alert("Error", "Passwords do not match", [
        {
          text: "OK",
          style: "cancel",
        },
      ]);
    } else if (password.length < 5 || passwordConfirm.length < 5) {
      return Alert.alert("Error", "Password must be at least 5 characters", [
        {
          text: "OK",
          style: "cancel",
        },
      ]);
    } else {
      await registerUser(username, password);
    }
  };

  const registerUser = async (username: string, password: string) => {
    const user = (await signUp(username, password)) as IUser;
    if (user.result === undefined) {
      return Alert.alert("Error", `${user.error}`, [
        {
          text: "OK",
          style: "cancel",
        },
      ]);
    } else {
      navigation.navigate("ConfirmSignup", { username: username });
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
