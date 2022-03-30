import React from "react";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { ColorSchemeName } from "react-native";
import LinkingConfiguration from "./LinkingConfiguration";

// Auth Context
import useAWSAuth from "../hooks/useAWSAuth";
import { useAuthState } from "../context/AuthContext";
import useCachedResources from "../hooks/useCachedResources";
// Navigation
import RootNavigator from "./RootNavigator";
import AuthNavigator from "./AuthNavigator";

interface IPayloadContent {
  userToken: string | null;
  username: string | null;
  id: string | null;
}

const Navigation = ({ colorScheme }: { colorScheme: ColorSchemeName }) => {
  const { checkAuth } = useAWSAuth();
  const { state, dispatch } = useAuthState();
  const { userToken } = state;
  const isLoadingComplete = useCachedResources();

  React.useEffect(() => {
    const checkIfAuthenticated = async () => {
      try {
        const { token, name, userId } = await checkAuth();
        let payload: IPayloadContent = {
          userToken: token,
          username: name,
          id: userId,
        };
        dispatch({ type: "RESTORE_TOKEN", payload });
      } catch (err) {
        dispatch({
          type: "RESTORE_TOKEN",
          payload: { username: null, userToken: null, id: null },
        });
      }
    };

    checkIfAuthenticated();
  }, []);

  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      {isLoadingComplete && userToken === null ? (
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
