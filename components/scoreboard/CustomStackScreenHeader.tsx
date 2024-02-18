import {
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet } from 'react-native';

import { Button, ButtonIcon, Text, View, alert } from '@/components';
import Colors from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { PlayableGameVariants } from '@/hooks/useGame';

interface CustomStackScreenHeaderProps {
  canUndo: boolean;
  onUndo: () => void;
  onResetGame: (variant: PlayableGameVariants) => void;
  currentPlayerScore?: number;
  onAddGame?: () => void;
  variant: PlayableGameVariants;
}

export const CustomStackScreenHeader = ({
  canUndo,
  onUndo,
  onResetGame,
  currentPlayerScore,
  // onAddGame,
  variant,
}: CustomStackScreenHeaderProps) => {
  const colorScheme = useColorScheme() ?? 'light';
  const navigation = useRouter();

  const onGoBack = () => {
    onResetGame(variant);
    navigation.replace('/create-match');
  };

  const saveGameAlert = () => {
    alert('Alert', "You're game is unfinished - would you like to save it?", [
      {
        text: 'No',
        style: 'cancel',
        onPress: () => {
          onGoBack();
        },
      },
      {
        text: 'Yes',
        style: 'default',
        onPress: () => {
          // onAddGame();
          onGoBack();
        },
      },
    ]);
  };

  return (
    <View style={styles.headerContainer}>
      <Button
        title='Go Back'
        textStyle={styles.headerButtonText}
        buttonStyle={styles.headerButton}
        onPress={saveGameAlert}
      >
        <ButtonIcon
          IconComponent={Ionicons}
          name='arrow-back'
          size={24}
          color={Colors[colorScheme].text}
        />
      </Button>
      <Text style={styles.headerText}>
        {variant.charAt(0).toUpperCase() + variant.slice(1)}
      </Text>
      {variant === 'x01' ? (
        <Button
          title='X01 OutChart'
          textStyle={styles.headerButtonText}
          buttonStyle={styles.headerButton}
          // onPressIn={() =>
          //   navigation.navigate("x01-outchart", {
          //     currentPlayerScore:
          //       currentPlayerScore !== undefined && currentPlayerScore <= 170
          //         ? currentPlayerScore
          //         : undefined,
          //   })
          // }
        >
          <ButtonIcon
            IconComponent={FontAwesome5}
            name='clipboard-list'
            size={24}
            color={Colors[colorScheme].text}
          />
        </Button>
      ) : null}
      <Button
        buttonStyle={styles.headerButton}
        textStyle={styles.headerButtonText}
        title='Undo'
        onPress={() => onUndo()}
        disabled={!canUndo}
      >
        <ButtonIcon
          IconComponent={MaterialCommunityIcons}
          name='undo-variant'
          size={24}
          color={Colors[colorScheme].text}
        />
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginHorizontal: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: 'lightgray',
    marginBottom: 5,
    paddingTop: 5,
    paddingBottom: 10,
  },
  headerButton: {
    backgroundColor: 'transparent',
    flex: 0.3,
    paddingVertical: 0,
    marginHorizontal: 5,
  },
  headerButtonText: { display: 'none' },
  headerText: {
    marginBottom: 6,
    fontSize: 20,
    flex: 2,
    marginLeft: 25,
    fontWeight: '600',
    letterSpacing: 0.35,
  },
});
