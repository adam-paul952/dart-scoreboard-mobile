import React from 'react';
import {
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from 'react-native';

import { Text, View } from '@/components';
import Colors from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export interface CustomButtonProps extends PressableProps {
  title: string;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  buttonIconStyle?: StyleProp<ViewStyle>;
  buttonChildrenStyle?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
  selected?: boolean;
}

export const CustomButton = React.forwardRef<
  React.ElementRef<typeof Pressable>,
  CustomButtonProps
>((props, ref) => {
  const colorScheme = useColorScheme() ?? 'light';
  const background = Colors[colorScheme].buttonColor;
  const textColor = Colors[colorScheme].text;
  const disabledBackground = Colors[colorScheme].disabledButtonColor;

  return (
    <Pressable
      {...props}
      ref={ref}
      accessibilityLabel={props.title}
      accessibilityRole='button'
      accessibilityState={
        props.disabled
          ? { disabled: true }
          : props.selected
            ? { selected: true }
            : { disabled: false, selected: false }
      }
      accessibilityActions={[{ name: 'activate' }]}
      // onAccessibilityAction={() => !props.disabled && props.onPressOut!()}
      style={
        props.disabled
          ? [
              styles.button,
              styles.disabledButton,
              { backgroundColor: disabledBackground },
              props.buttonStyle,
            ]
          : props.selected
            ? [
                props.buttonStyle,
                styles.selectedButton,
                styles.button,
                { backgroundColor: background },
              ]
            : ({ pressed }) => [
                { opacity: pressed ? 0.5 : 1 },
                props.buttonStyle
                  ? [
                      styles.button,
                      { backgroundColor: background },
                      props.buttonStyle,
                    ]
                  : [styles.button, { backgroundColor: background }],
              ]
      }
    >
      {props.children ? (
        <View
          style={[
            {
              alignSelf: 'center',
              padding: 5,
            },
            props.buttonChildrenStyle,
          ]}
        >
          <View style={props.buttonIconStyle}>{props.children}</View>
          <View style={props.buttonChildrenStyle}>
            <Text
              style={
                props.selected
                  ? [
                      styles.buttonText,
                      props.textStyle,
                      styles.selectedButtonText,
                      { color: textColor },
                    ]
                  : props.textStyle
                    ? [styles.buttonText, { color: textColor }, props.textStyle]
                    : [styles.buttonText, { color: textColor }]
              }
            >
              {props.title}
            </Text>
          </View>
        </View>
      ) : (
        <Text
          style={
            props.disabled
              ? [
                  styles.disabledButtonText,
                  styles.buttonText,
                  { color: textColor },
                ]
              : props.textStyle
                ? [styles.buttonText, props.textStyle, { color: textColor }]
                : [styles.buttonText, { color: textColor }]
          }
        >
          {props.title}
        </Text>
      )}
    </Pressable>
  );
});

const styles = StyleSheet.create({
  button: {
    // backgroundColor: "lightblue",
    // width: winWidth * 0.8,
    alignItems: 'center',
    borderRadius: 15,
    paddingVertical: 8,
    borderWidth: 0,
    // borderColor: "lightBlue",
  },
  buttonText: {
    fontSize: 25,
    // alignSelf: "center",
    // color: "#FCF2CE",
  },
  disabledButton: {
    // backgroundColor: "transparent",
    // borderStyle: "solid",
    // borderColor: "#707070",
    // borderWidth: 1,
    opacity: 0.5,
    // width: winWidth * 0.8,
    // alignSelf: "center",
    // borderRadius: 20,
    // padding: 5,
  },
  disabledButtonText: {
    //   color: "#5D6758", fontSize: 30, alignSelf: "center"
  },
  selectedButton: {
    // backgroundColor: "#BCCEAB",
    // width: winWidth * 0.8,
    // alignSelf: "center",
    // borderRadius: 20,
    // padding: 5,
  },
  selectedButtonText: {
    //   backgroundColor: "#BCCEAB"
  },
});
