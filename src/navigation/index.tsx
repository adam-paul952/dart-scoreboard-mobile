import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import React from "react";
import { ColorSchemeName } from "react-native";

import LinkingConfiguration from "./LinkingConfiguration";
// Auth Context
import useAWSAuth from "../hooks/useAWSAuth";
import { useAuthState } from "../context/AuthContext";
// Navigation
import RootNavigator from "./RootNavigator";
import AuthNavigator from "./AuthNavigator";

interface IPayloadContent {
  userToken: string;
  username: string;
  id: string;
}

const Navigation = ({ colorScheme }: { colorScheme: ColorSchemeName }) => {
  const { checkAuth } = useAWSAuth();
  const { state, dispatch } = useAuthState();
  const { userToken } = state;

  const isLoading = false;

  React.useEffect(() => {
    const checkIfAuthenticated = async () => {
      let userToken,
        username,
        id = null;

      try {
        const { token, name, userId } = await checkAuth();
        userToken = token;
        username = name;
        id = userId;
      } catch (e) {
        console.log("error", e);
      }
      let payload: IPayloadContent = { userToken, username, id };
      console.log(`the payload is: `, payload);
      dispatch({ type: "RESTORE_TOKEN", payload });
    };

    checkIfAuthenticated();
  }, []);

  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      {/* {isLoading && (
            // We haven't finished checking for the token yet
            <Stack.Screen name="Splash" component={SplashScreen} />
          )} */}
      {!isLoading && userToken == null ? (
        // No token found, user isn't signed in
        <AuthNavigator />
      ) : (
        // User is signed in
        <RootNavigator />
      )}
    </NavigationContainer>
  );
};

export default Navigation;
