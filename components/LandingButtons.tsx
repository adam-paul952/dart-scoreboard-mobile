import React from 'react';
import { Pressable, PressableProps, StyleSheet } from 'react-native';

import { Text } from '@/components';
import Colors from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

interface LandingButtonProps extends PressableProps {
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
}

export const LandingPageButton = React.forwardRef<
  React.ElementRef<typeof Pressable>,
  LandingButtonProps
>(({ variant, children, ...rest }, ref) => {
  const colorScheme = useColorScheme() ?? 'light';
  const buttonBG = Colors[colorScheme].buttonColor;
  const disabledBackground = Colors[colorScheme].disabledButtonColor;

  const { disabled, onPress } = rest;

  return (
    <Pressable
      ref={ref}
      style={
        disabled
          ? [
              { opacity: 0.5 },
              { backgroundColor: disabledBackground },
              styles.buttonStyle,
            ]
          : ({ pressed }) => [
              { opacity: pressed ? 0.5 : 1 },
              [styles.buttonStyle, { backgroundColor: buttonBG }],
            ]
      }
      onPress={onPress}
    >
      {children}
      <Text style={styles.buttonTextStyle}>{variant}</Text>
    </Pressable>
  );
});

const styles = StyleSheet.create({
  buttonStyle: {
    width: '48%',
    marginBottom: 5,
    justifyContent: 'center',
    borderRadius: 10,
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
