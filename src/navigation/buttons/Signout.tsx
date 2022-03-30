import React from "react";

import CustomButton from "../../components/CustomButton";
import { SimpleLineIcons } from "@expo/vector-icons";
// Auth Context
import useAWSAuth from "../../hooks/useAWSAuth";
import { useAuthState } from "../../context/AuthContext";

const SignoutButton = () => {
  const { signOut } = useAWSAuth();
  const { dispatch } = useAuthState();

  const handleLogOut = async () => {
    dispatch({ type: "SIGN_OUT" });
    await signOut();
  };

  return (
    <CustomButton
      title=""
      buttonStyle={{ paddingTop: 10, paddingBottom: -10 }}
      onPress={() => handleLogOut()}
    >
      <SimpleLineIcons name="logout" size={24} color="black" />
    </CustomButton>
  );
};

export default SignoutButton;
