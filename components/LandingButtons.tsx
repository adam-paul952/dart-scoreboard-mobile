import React from 'react';
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';

import Button from './Button';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
// import window from "../constants/Layout";

// const height = window.window.height;

interface ILandingButtonProps {
  variant:
    | 'New Game'
    | 'Resume Game'
    | 'Manage Players'
    | 'Stats'
    | 'Overall'
    | 'Baseball'
    | 'Cricket'
    | 'Elimination'
    | 'Killer'
    | 'X01';
  children: React.ReactNode;
  buttonOverrideStyle?: StyleProp<ViewStyle>;
  disabled?: boolean;
}

const LandingPageButton = (props: ILandingButtonProps) => {
  const colorScheme = useColorScheme();
  const buttonBG = Colors[colorScheme as 'light' | 'dark'].buttonColor;

  return (
    <Button
      title={props.variant}
      textStyle={styles.buttonTextStyle}
      buttonStyle={[
        styles.buttonStyle,
        props.buttonOverrideStyle,
        { backgroundColor: buttonBG },
      ]}
      buttonChildrenStyle={{ backgroundColor: 'transparent' }}
      buttonIconStyle={[
        styles.buttonIconStyle,
        { backgroundColor: 'transparent' },
      ]}
      disabled={props.disabled}
    >
      {props.children}
    </Button>
  );
};

export default LandingPageButton;

const styles = StyleSheet.create({
  buttonStyle: {
    width: '48%',
    height: '80%',
    marginBottom: 5,
    justifyContent: 'center',
  },
  buttonTextStyle: {
    marginTop: 20,
    fontSize: 20,
    textAlign: 'center',
  },
  buttonIconStyle: {
    alignSelf: 'center',
  },
});
