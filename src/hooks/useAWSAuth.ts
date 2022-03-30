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
      console.log(`The error is: `, error);
      return { result: undefined, error: error };
    }
  };
  // TODO: Error handling
  const confirmSignUp = async (username: string, code: string) => {
    try {
      await Auth.confirmSignUp(username, code);
      console.log("confirmed sign up");
    } catch (error) {
      console.log("error confirming sign up", error);
    }
  };
  // TODO: Error handling
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
      console.log(`successfull login`);
      return user;
    } catch (error) {
      console.log("error signing in", error);
    }
  };

  const signOut = async () => {
    try {
      await Auth.signOut();
      console.log(`User has been signed out`);
      return true;
    } catch (error) {
      console.log("error signing out: ", error);
      return error;
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
