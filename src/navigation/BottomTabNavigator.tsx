import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { Pressable } from "react-native";
// Theme Providers
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";

// Screens
import Rules from "../screens/Rules";
import Landing from "../screens/Landing";

// Tab Icons
import { TabBarIconHome, TabBarIconRules } from "./buttons/TabIcons";

// Types
import { RootTabParamList, RootTabScreenProps } from "../../types";

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
          headerTitle: "Dart Scoreboard",
          tabBarIcon: ({ color }) => (
            <TabBarIconRules name="text-document" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
