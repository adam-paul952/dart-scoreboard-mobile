import { AntDesign, Feather } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { Button, ButtonIcon } from '@/components';
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

  const renderButton = (
    item: string,
    variant: string,
    color: string,
    disabled?: boolean,
    hits?: number,
  ) => {
    const commonProps = {
      buttonStyle: styles.item,
      title: item,
      onPress: () => onButtonPress(item),
    };

    if (item === '') {
      return (
        <Button
          {...commonProps}
          buttonStyle={[styles.item, { opacity: 1 }]}
          disabled
        />
      );
    }

    if (item === 'Del') {
      return (
        <Button
          {...commonProps}
          buttonChildrenStyle={styles.buttonChildrenStyle}
          buttonIconStyle={styles.buttonIconStyle}
          textStyle={styles.buttonTextStyle}
        >
          <ButtonIcon
            IconComponent={Feather}
            name='delete'
            size={30}
            color={color}
          />
        </Button>
      );
    }

    if (item === 'Enter') {
      return (
        <Button
          {...commonProps}
          buttonChildrenStyle={styles.buttonChildrenStyle}
          buttonIconStyle={styles.buttonIconStyle}
          textStyle={styles.buttonTextStyle}
          disabled={disabled}
        >
          <ButtonIcon
            IconComponent={AntDesign}
            name='enter'
            size={30}
            color={color}
          />
        </Button>
      );
    }

    if (variant === 'cricket' || variant === 'killer') {
      return (
        <Button
          {...commonProps}
          buttonChildrenStyle={{ backgroundColor: 'transparent' }}
          buttonIconStyle={[hits === 0 ? { display: 'none' } : styles.hitsTag]}
          disabled={disabled}
        >
          <Text style={styles.hitsTagText}>x{hits}</Text>
        </Button>
      );
    }

    return <Button {...commonProps} />;
  };

  return renderButton(item, variant, color, disabled, hits);
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
    right: -40,
    padding: 3,
    paddingHorizontal: 5,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
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
