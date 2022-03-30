import React from "react";
// Components
import { View } from "../../components/Themed";
import CustomButton from "../../components/CustomButton";
import TextInput from "../../components/TextInput";
import useAWSAuth from "../../hooks/useAWSAuth";
// Types
import { RootStackScreenProps } from "../../../types";
type ConfirmSignupProps = RootStackScreenProps<"ConfirmSignup">;

const ConfirmSignupPage = ({ route }: ConfirmSignupProps) => {
  const { username } = route.params;
  const { confirmSignUp } = useAWSAuth();
  const [code, setCode] = React.useState<string>("");
  return (
    <View>
      <TextInput label="Email" value={username} setValue={() => {}} />
      <TextInput
        keyboardType="numeric"
        value={code}
        label="Confirm Account"
        setValue={setCode}
      />
      <CustomButton
        title="Confirm Account"
        buttonStyle={{ width: "50%", alignItems: "center", marginTop: 3 }}
        onPress={() => confirmSignUp(username, code)}
      />
    </View>
  );
};

export default ConfirmSignupPage;
