import React from "react";
import { StyleSheet } from "react-native";
// Components
import { View } from "../../components/Themed";
import TextInput from "../../components/TextInput";
import CustomButton from "../../components/CustomButton";
// Auth Context
import { useAuthState } from "../../context/AuthContext";
import useAWSAuth from "../../hooks/useAWSAuth";

const LoginPage = () => {
  const { signIn } = useAWSAuth();
  const { dispatch } = useAuthState();
  const [username, setUsername] = React.useState<string>("adam.paul@live.com");
  const [password, setPassword] = React.useState<string>("password");

  const onHandleLogin = async () => {
    try {
      let payload = { username, password };
      await signIn(dispatch, payload);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <View style={{ flex: 1, alignItems: "center", paddingTop: "20%" }}>
        <TextInput
          label="Username"
          textStyle={{
            marginVertical: "3%",
          }}
          setValue={setUsername}
          value={username}
        />
        <TextInput
          label="Password"
          textStyle={{
            marginVertical: "3%",
          }}
          value={password}
          setValue={setPassword}
        />
        <CustomButton
          title="Sign In"
          onPress={() => onHandleLogin()}
          buttonStyle={{
            width: "70%",
            backgroundColor: "lightgrey",
            alignItems: "center",
            marginTop: 20,
            borderRadius: 10,
            height: 50,
            justifyContent: "center",
          }}
          textStyle={{ fontSize: 25 }}
        />
      </View>
    </>
  );
};

export default LoginPage;

const styles = StyleSheet.create({});
