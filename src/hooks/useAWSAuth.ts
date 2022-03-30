import React from "react";
import { Auth } from "aws-amplify";
import { IActions } from "../context/authReducer";

const useAWSAuth = () => {
  const signUp = async (username: string, password: string) => {
    try {
      const { user } = await Auth.signUp({
        username,
        password,
      });
      console.log(user);
      return user;
    } catch (error) {
      throw new Error(`${error}`);
    }
  };

  const confirmSignUp = async (username: string, code: string) => {
    try {
      await Auth.confirmSignUp(username, code);
    } catch (error) {
      throw new Error(`${error}`);
    }
  };

  const signIn = async (
    dispatch: React.Dispatch<IActions>,
    payloadOptions: { username: string; password: string }
  ) => {
    try {
      let { username, password } = payloadOptions;
      const user = await Auth.signIn(username, password);
      dispatch({
        type: "SIGN_IN",
        payload: {
          id: user.signInUserSession.idToken.payload.sub,
          username: username,
          userToken: user.signInUserSession.idToken.jwtToken,
        },
      });
      return user;
    } catch (error) {
      throw new Error(`${error}`);
    }
  };

  const signOut = async () => {
    try {
      await Auth.signOut();
      return true;
    } catch (error) {
      throw new Error(`${error}`);
    }
  };

  const checkAuth = async () => {
    try {
      const response = await Auth.currentAuthenticatedUser();
      const {
        signInUserSession: { idToken },
      } = response;
      return {
        token: idToken.jwtToken,
        userId: idToken.payload.sub,
        name: idToken.payload.email,
      };
    } catch (error) {
      throw new Error(`${error}`);
    }
  };

  return {
    signUp,
    confirmSignUp,
    signIn,
    signOut,
    checkAuth,
  };
};

export default useAWSAuth;
