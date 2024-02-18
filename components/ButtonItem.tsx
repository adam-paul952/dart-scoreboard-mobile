import { AntDesign, Feather } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text } from 'react-native';

import CustomButton from './Button';
import { IconButton } from './ButtonIcons';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

interface ButtonItemProps {
  item: string;
  onButtonPress: (inputValue: string) => void;
  disabled?: boolean;
  variant: string;
  hits?: number;
}

export const ButtonItem = ({
  item,
  onButtonPress,
  disabled,
  variant,
  hits,
}: ButtonItemProps) => {
  const colorScheme = useColorScheme() ?? 'light';
  const color = Colors[colorScheme].text;

  if (item === '') {
    return (
      <CustomButton
        buttonStyle={[styles.item, { opacity: 1 }]}
        disabled
        title={item}
      />
    );
  }
  if (item === 'Del') {
    return (
      <CustomButton
        buttonStyle={styles.item}
        buttonChildrenStyle={styles.buttonChildrenStyle}
        buttonIconStyle={styles.buttonIconStyle}
        title={item}
        textStyle={styles.buttonTextStyle}
        onPressOut={() => onButtonPress(item)}
      >
        <IconButton
          IconComponent={Feather}
          name='delete'
          size={30}
          color={color}
        />
      </CustomButton>
    );
  } else if (item === 'Enter') {
    return (
      <CustomButton
        buttonStyle={styles.item}
        buttonChildrenStyle={styles.buttonChildrenStyle}
        buttonIconStyle={styles.buttonIconStyle}
        title={item}
        textStyle={styles.buttonTextStyle}
        onPressOut={() => onButtonPress(item)}
        disabled={disabled}
      >
        <IconButton
          IconComponent={AntDesign}
          name='enter'
          size={30}
          color={color}
        />
      </CustomButton>
    );
  } else if (variant === 'cricket' || variant === 'killer') {
    return (
      <CustomButton
        buttonStyle={styles.item}
        title={item}
        onPressOut={() => onButtonPress(item)}
        buttonChildrenStyle={{
          backgroundColor: 'transparent',
        }}
        buttonIconStyle={[hits === 0 ? { display: 'none' } : styles.hitsTag]}
        disabled={disabled}
      >
        <Text style={styles.hitsTagText}>x{hits}</Text>
      </CustomButton>
    );
  } else
    return (
      <CustomButton
        buttonStyle={styles.item}
        title={item}
        onPressOut={() => onButtonPress(item)}
      />
    );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    maxWidth: '33.33%',
    justifyContent: 'center',
    borderRadius: 0,
    padding: 10,
    borderWidth: 1.5,
    borderColor: '#fff',
    height: 70,
    alignItems: 'center',
  },
  hitsTag: {
    display: 'flex',
    backgroundColor: '#fff',
    position: 'absolute',
    top: -8,
    right: -36,
    padding: 2,
    borderRadius: 30,
    width: '35%',
  },
  hitsTagText: { fontSize: 17, textAlign: 'center' },
  buttonChildrenStyle: {
    backgroundColor: 'transparent',
    paddingVertical: 6,
    marginRight: 8,
  },
  buttonIconStyle: {
    backgroundColor: 'transparent',
    height: 60,
  },
  buttonTextStyle: { display: 'none' },
});
