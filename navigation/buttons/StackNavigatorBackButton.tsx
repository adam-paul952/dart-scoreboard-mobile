import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

// Hooks
import Colors from "../../constants/Colors";
import useColorScheme from "../../hooks/useColorScheme";

const StackNavigatorBackButton = () => {
  const colorScheme = useColorScheme();
  const navigator = useNavigation();
  return (
    <>
      <Pressable
        onPress={() => {
          navigator.navigate("CreateGame");
        }}
        style={({ pressed }) => ({
          opacity: pressed ? 0.5 : 1,
        })}
      >
        <MaterialCommunityIcons
          name="keyboard-backspace"
          size={24}
          color={Colors[colorScheme].text}
        />
      </Pressable>
    </>
  );
};

export default StackNavigatorBackButton;
