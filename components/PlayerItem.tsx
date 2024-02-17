import { MaterialIcons } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
import React from 'react';
import { StyleSheet } from 'react-native';

import { View } from '../components/Themed';

import CustomButton from '@/components/Button';
import Colors from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

interface PlayerItemProps {
  player: any;
  togglePlayerSelect: (id: string) => void;
  deletePlayer: (id: string) => void;
}

const PlayerItem = ({
  player,
  togglePlayerSelect,
  deletePlayer,
}: PlayerItemProps) => {
  const colorScheme = useColorScheme() as 'light' | 'dark';

  return (
    <View style={styles.rowContainer}>
      <CustomButton
        title={player.name}
        buttonStyle={styles.buttonStyle}
        onPressOut={() => togglePlayerSelect(player.id)}
      />
      <Checkbox
        value={player.selected}
        onChange={() => togglePlayerSelect(player.id)}
      />
      <CustomButton
        title='delete'
        buttonStyle={styles.delButtonStyle}
        buttonChildrenStyle={styles.delChildButtonStyle}
        onPressOut={() => deletePlayer(player.id)}
        textStyle={{ display: 'none' }}
      >
        <MaterialIcons
          name='delete'
          size={32}
          color={Colors[colorScheme].text}
        />
      </CustomButton>
    </View>
  );
};

export default PlayerItem;

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  buttonStyle: {
    paddingHorizontal: 20,
    width: '60%',
    alignItems: 'flex-start',
    backgroundColor: 'transparent',
  },
  delButtonStyle: { backgroundColor: 'transparent' },
  delChildButtonStyle: { flexDirection: 'row', alignSelf: 'center' },
});
