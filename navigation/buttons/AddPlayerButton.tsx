import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { FontAwesome } from "@expo/vector-icons";

// Hooks
import Colors from "../../constants/Colors";
import useColorScheme from "../../hooks/useColorScheme";

const AddPlayerButton = () => {
  const colorScheme = useColorScheme();
  const navigator = useNavigation();
  return (
    <>
      <Pressable
        onPressOut={() => {
          navigator.navigate("CreatePlayer");
        }}
        style={({ pressed }) => ({
          opacity: pressed ? 0.5 : 1,
        })}
      >
        <FontAwesome
          name="user-o"
          size={24}
          color={Colors[colorScheme].text}
          style={{ marginRight: 30 }}
        />
      </Pressable>
    </>
  );
};

export default AddPlayerButton;
