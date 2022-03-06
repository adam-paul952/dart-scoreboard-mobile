import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BottomTabNavigator from "./BottomTabNavigator";

// Components
import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import CreatePlayer from "../screens/CreatePlayer";
import CreateGame from "../screens/CreateGame";
import Baseball from "../screens/games/Baseball";
import X01 from "../screens/games/X01";

// Navigation Buttons
import ResetScoreListButton from "./buttons/ResetScoreListButton";
import StackNavigatorBackButton from "./buttons/StackNavigatorBackButton";

import { RootStackParamList } from "../types";
import X01GameSelection from "../screens/gameOptions/X01Setup";
import EliminationSetUp from "../screens/gameOptions/EliminationSetUp";

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <Stack.Screen name="CreatePlayer" component={CreatePlayer} />
      <Stack.Screen name="CreateGame" component={CreateGame} />
      <Stack.Screen
        name="Baseball"
        component={Baseball}
        options={{
          headerLeft: () => <StackNavigatorBackButton />,
          headerRight: () => <ResetScoreListButton />,
        }}
      />
      <Stack.Screen
        name="X01"
        component={X01GameSelection}
        options={{
          headerLeft: () => <StackNavigatorBackButton />,
          title: "X01 Setup",
          //   headerRight: () => <ResetScoreListButton />,
        }}
      />
      <Stack.Screen
        name="X01Game"
        component={X01}
        options={{
          headerLeft: () => <StackNavigatorBackButton />,
          headerRight: () => <ResetScoreListButton />,
        }}
      />
      <Stack.Screen
        name="Elimination"
        component={EliminationSetUp}
        options={{
          headerLeft: () => <StackNavigatorBackButton />,
          title: "Elimination Setup",
          // headerRight: () => <ResetScoreListButton />,
        }}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default RootNavigator;
