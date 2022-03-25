import React from "react";

import { Auth } from "aws-amplify";

const useAWSAuth = () => {
  const [isError, setIsError] = React.useState<boolean>(false);
  const [errorMessage, setErrorMessage] = React.useState<string>("");

  const signUp = async (username: string, password: string) => {
    try {
      const { user } = await Auth.signUp({
        username,
        password,
      });
      console.log(user);
    } catch (error) {
      console.log(error);
      setIsError(true);
      setErrorMessage(`User with email ${username} already exists`);
    }
  };

  const confirmSignUp = async (username: string, code: string) => {
    try {
      await Auth.confirmSignUp(username, code);
      console.log("confirmed sign up");
    } catch (error) {
      setIsError(true);
      console.log("error confirming sign up", error);
    }
  };

  return {
    isError,
    errorMessage,
    signUp,
    confirmSignUp,
  };
};

export default useAWSAuth;
