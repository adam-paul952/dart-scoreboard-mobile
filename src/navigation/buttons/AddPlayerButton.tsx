import React from "react";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { FontAwesome } from "@expo/vector-icons";

// Hooks
import Colors from "../../constants/Colors";
import useColorScheme from "../../hooks/useColorScheme";

import PlayerInput from "../../components/PlayerInput";
import DisplayModel from "../../components/Modal";

const AddPlayerButton = () => {
  const colorScheme = useColorScheme();
  const [modalVisible, setModalVisible] = React.useState<boolean>(false);
  return (
    <>
      <Pressable
        onPressOut={() => {
          setModalVisible(!modalVisible);
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
      {modalVisible && (
        <DisplayModel
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          modalStyle={{ height: "50%", backgroundColor: "transparent" }}
          transparent
        >
          <PlayerInput
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
          />
        </DisplayModel>
      )}
    </>
  );
};

export default AddPlayerButton;
