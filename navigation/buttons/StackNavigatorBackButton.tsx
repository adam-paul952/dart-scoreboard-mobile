import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

// Hooks
import Colors from "../../constants/Colors";
import useColorScheme from "../../hooks/useColorScheme";
import useGame from "../../hooks/useGame";

const StackNavigatorBackButton = () => {
  const { resetScoreList } = useGame();
  const colorScheme = useColorScheme();
  const navigator = useNavigation();
  return (
    <>
      <Pressable
        onPress={async () => {
          await resetScoreList();
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
