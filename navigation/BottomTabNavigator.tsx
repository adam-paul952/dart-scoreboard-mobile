/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
import { Foundation } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import * as React from "react";
// import { Pressable } from "react-native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";

import Rules from "../screens/Rules";
import Landing from "../screens/Landing";

import { RootTabParamList, RootTabScreenProps } from "../types";

const BottomTab = createBottomTabNavigator<RootTabParamList>();

const BottomTabNavigator = () => {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="GetStarted"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}
    >
      <BottomTab.Screen
        name="GetStarted"
        component={Landing}
        options={({ navigation }: RootTabScreenProps<"GetStarted">) => ({
          title: "Dart Scoreboard",
          tabBarIcon: ({ color }) => (
            <TabBarIconHome name="target" color={color} />
          ),
          // headerRight: () => (
          //   <Pressable
          //     onPress={() => navigation.navigate("Modal")}
          //     style={({ pressed }) => ({
          //       opacity: pressed ? 0.5 : 1,
          //     })}
          //   >
          //     <FontAwesome
          //       name="info-circle"
          //       size={25}
          //       color={Colors[colorScheme].text}
          //       style={{ marginRight: 15 }}
          //     />
          //   </Pressable>
          // ),
        })}
      />
      <BottomTab.Screen
        name="Rules"
        component={Rules}
        options={{
          title: "Rules",
          tabBarIcon: ({ color }) => (
            <TabBarIconRules name="text-document" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
const TabBarIconRules = (props: {
  name: React.ComponentProps<typeof Entypo>["name"];
  color: string;
}) => {
  return <Entypo size={30} style={{ marginBottom: -3 }} {...props} />;
};

const TabBarIconHome = (props: {
  name: React.ComponentProps<typeof Foundation>["name"];
  color: string;
}) => {
  return <Foundation size={30} style={{ marginBottom: -3 }} {...props} />;
};
