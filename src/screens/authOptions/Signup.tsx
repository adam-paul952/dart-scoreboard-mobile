import React from "react";
import { Alert, Keyboard, Pressable, StyleSheet } from "react-native";
// Hooks
import { useNavigation } from "@react-navigation/native";
import useAWSAuth from "../../hooks/useAWSAuth";
// Components
import { View } from "../../components/Themed";
import TextInput from "../../components/TextInput";
import CustomButton from "../../components/CustomButton";

const SignupPage = () => {
  const { signUp } = useAWSAuth();
  const navigation = useNavigation();

  const [username, setUsername] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = React.useState<string>("");

  const verifyPassword = async () => {
    if (password !== passwordConfirm) {
      return alertMessage("Passwords do not match");
    } else if (password.length < 5 || passwordConfirm.length < 5) {
      return alertMessage("Password must be at least 5 characters");
    } else {
      await registerUser(username, password);
    }
  };

  const registerUser = async (username: string, password: string) => {
    try {
      await signUp(username, password);
      navigation.navigate("ConfirmSignup", { username: username });
    } catch (err) {
      alertMessage(err);
    }
  };

  return (
    <Pressable onPress={Keyboard.dismiss}>
      <View
        style={{
          alignItems: "center",
          height: "100%",
          paddingVertical: "20%",
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
          buttonStyle={styles.buttonStyle}
          textStyle={{ fontSize: 30 }}
          onPressIn={async () => await verifyPassword()}
        />
      </View>
    </Pressable>
  );
};

export default SignupPage;

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: "grey",
    width: "50%",
    alignItems: "center",
    marginTop: "10%",
    height: "11%",
    justifyContent: "center",
    borderRadius: 10,
  },
});

export const alertMessage = (message: any) => {
  return Alert.alert("Error", `${message}`, [
    {
      text: "OK",
      style: "cancel",
    },
  ]);
};
