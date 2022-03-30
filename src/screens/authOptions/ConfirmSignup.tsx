import React from "react";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
// Components
import { View } from "../../components/Themed";
import CustomButton from "../../components/CustomButton";
import TextInput from "../../components/TextInput";
import useAWSAuth from "../../hooks/useAWSAuth";
// Types
import { RootStackScreenProps } from "../../../types";
type ConfirmSignupProps = RootStackScreenProps<"ConfirmSignup">;

import { alertMessage } from "./Signup";

const ConfirmSignupPage = ({ route }: ConfirmSignupProps) => {
  const { username } = route.params;
  const { confirmSignUp } = useAWSAuth();
  const navigation = useNavigation();

  const [code, setCode] = React.useState<string>("");

  const handleConfirmSignup = async () => {
    try {
      await confirmSignUp(username, code);
      navigation.navigate("Login", { userEmail: username, isSignedUp: true });
    } catch (err) {
      alertMessage(err);
    }
  };

  return (
    <View
      style={{
        alignItems: "center",
        height: "100%",
        paddingTop: "20%",
      }}
    >
      <TextInput
        label="Email"
        value={username}
        setValue={() => {}}
        editable={false}
      />
      <TextInput
        keyboardType="numeric"
        value={code}
        label="Confirm Account"
        setValue={setCode}
      />
      <CustomButton
        title="Confirm Account"
        buttonStyle={styles.buttonStyle}
        textStyle={{ fontSize: 25 }}
        onPress={() => handleConfirmSignup()}
      />
    </View>
  );
};

export default ConfirmSignupPage;

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
