import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginPage from "../screens/authOptions/Login";
import InitialLandingPage from "../screens/authOptions/InitialPage";
import ConfirmSignupPage from "../screens/authOptions/ConfirmSignup";
import SignupPage from "../screens/authOptions/Signup";

import { RootStackParamList } from "../../types";

const Stack = createNativeStackNavigator<RootStackParamList>();

const AuthNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="InitialLanding">
      <Stack.Screen
        name="InitialLanding"
        component={InitialLandingPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Login" component={LoginPage} />
      <Stack.Screen name="Signup" component={SignupPage} />
      <Stack.Screen name="ConfirmSignup" component={ConfirmSignupPage} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
