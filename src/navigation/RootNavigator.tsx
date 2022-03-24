import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BottomTabNavigator from "./BottomTabNavigator";

// Components
import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import ManagePlayer from "../screens/ManagePlayer";
import CreateGame from "../screens/CreateMatch";
import Baseball from "../games/Baseball";
import X01 from "../games/X01";
import Elimination from "../games/Elimination";
import KillerSetUp from "../screens/gameOptions/KillerSetup";
import Killer from "../games/Killer";
import X01GameSelection from "../screens/gameOptions/X01Setup";
import EliminationSetUp from "../screens/gameOptions/EliminationSetUp";

// Navigation Buttons
import ResetScoreListButton from "./buttons/ResetScoreListButton";
import StackNavigatorBackButton from "./buttons/StackNavigatorBackButton";
import AddPlayerButton from "./buttons/AddPlayerButton";

import { RootStackParamList } from "../../types";
import Cricket from "../games/Cricket";

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
      <Stack.Screen
        name="CreatePlayer"
        component={ManagePlayer}
        options={{
          title: "Select Players",
          headerRight: () => <AddPlayerButton />,
        }}
      />
      <Stack.Screen
        name="CreateGame"
        component={CreateGame}
        options={{
          title: "Create Match",
          headerRight: () => <AddPlayerButton />,
        }}
      />
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
      <Stack.Screen
        name="EliminationGame"
        component={Elimination}
        options={{
          headerLeft: () => <StackNavigatorBackButton />,
          title: "Elimination",
          headerRight: () => <ResetScoreListButton />,
        }}
      />
      <Stack.Screen
        name="Killer"
        component={KillerSetUp}
        options={{
          headerLeft: () => <StackNavigatorBackButton />,
          title: "Killer Setup",
          // headerRight: () => <ResetScoreListButton />,
        }}
      />
      <Stack.Screen
        name="KillerGame"
        component={Killer}
        options={{
          headerLeft: () => <StackNavigatorBackButton />,
          title: "Killer",
          headerRight: () => <ResetScoreListButton />,
        }}
      />
      <Stack.Screen
        name="Cricket"
        component={Cricket}
        options={{
          headerLeft: () => <StackNavigatorBackButton />,
          title: "Cricket",
          headerRight: () => <ResetScoreListButton />,
        }}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default RootNavigator;
