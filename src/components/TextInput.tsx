import React from "react";
import {
  Keyboard,
  KeyboardTypeOptions,
  TextStyle,
  StyleProp,
  StyleSheet,
} from "react-native";

import { Text, TextInput, View } from "../components/Themed";

import window from "../constants/Layout";

const winHeight = window.window.height;
const winWidth = window.window.width;

interface ICustomTextInputProps {
  label: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  labelStyle?: StyleProp<TextStyle>;
  textStyle?: StyleProp<TextStyle>;
  secureTextEntry?: boolean;
  editable?: boolean;
  keyboardType?: KeyboardTypeOptions | undefined;
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
}

const CustomTextInput = (props: ICustomTextInputProps) => {
  return (
    <View accessibilityLabel={props.label}>
      <Text
        style={
          props.labelStyle ? [styles.label, props.labelStyle] : styles.label
        }
      >
        {props.label}
      </Text>
      <TextInput
        accessibilityHint={`Input area for ${props.label}`}
        value={props.value}
        onChangeText={(text) => props.setValue(text)}
        onSubmitEditing={() => {
          Keyboard.dismiss();
        }}
        style={
          props.textStyle
            ? [styles.textInput, props.textStyle]
            : styles.textInput
        }
        secureTextEntry={props.secureTextEntry}
        editable={props.editable}
        keyboardType={props.keyboardType ? props.keyboardType : "default"}
        autoCapitalize={props.autoCapitalize ? props.autoCapitalize : "none"}
      />
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  label: {
    marginLeft: winWidth * 0.1,
    marginRight: winWidth * 0.1,
    marginTop: 15,
  },
  textInput: {
    borderBottomColor: "#707070",
    borderBottomWidth: 1,
    width: winWidth * 0.8,
    // marginLeft: winWidth * 0.1,
    // marginRight: winWidth * 0.1,
    marginHorizontal: winWidth * 0.1,
    height: 30,
  },
});
