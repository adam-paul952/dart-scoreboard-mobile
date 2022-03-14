import React from "react";

import { Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// Hooks
import useGame from "../../hooks/useGame";
import Colors from "../../constants/Colors";
import useColorScheme from "../../hooks/useColorScheme";

const ResetScoreListButton = () => {
  const { resetScoreList } = useGame();
  const colorScheme = useColorScheme();
  return (
    <>
      <Pressable
        onPress={() => {
          resetScoreList();
        }}
        style={({ pressed }) => ({
          opacity: pressed ? 0.5 : 1,
        })}
      >
        <MaterialCommunityIcons
          name="delete-sweep"
          size={24}
          color={Colors[colorScheme].text}
        />
      </Pressable>
    </>
  );
};

export default ResetScoreListButton;
