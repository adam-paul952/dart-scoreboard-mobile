import {
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, useRouter } from 'expo-router';
import React from 'react';
import { Alert, StyleSheet } from 'react-native';

import { IconButton } from '@/components/ButtonIcons';
import LandingPageButton from '@/components/LandingButtons';
import { View } from '@/components/Themed';
import Colors from '@/constants/Colors';
import { usePlayerState } from '@/context/Player';
import { useColorScheme } from '@/hooks/useColorScheme';

/**
 * @component
 * @description Main Landing Screen - Renders buttons to direct the user
 *  New Game - route "/create-match"
 *  Manage Players - route "/manage-players"
 *  Resume Game - route "/resume-game" (Not used yet)
 *  Stats - route "/statistics"
 */

const Landing = () => {
  const { playerList } = usePlayerState();

  const colorScheme = useColorScheme() as 'light' | 'dark';
  const color = Colors[colorScheme].text;

  return (
    <View style={styles.container}>
      <View style={styles.buttonRow}>
        <LandingPageButton variant='New Game'>
          <Link
            href={`${playerList.length < 2 ? '/create-player' : '/new-game'}`}
          >
            <IconButton
              IconComponent={MaterialCommunityIcons}
              name='bullseye-arrow'
              size={60}
              color={color}
            />
          </Link>
        </LandingPageButton>
        <LandingPageButton variant='Resume Game' disabled>
          <Link href='/'>
            <IconButton
              IconComponent={FontAwesome5}
              name='undo-alt'
              size={60}
              color={color}
            />
          </Link>
        </LandingPageButton>
        <LandingPageButton variant='Manage Players'>
          <Link href='/manage-players'>
            <IconButton
              IconComponent={FontAwesome5}
              name='user-friends'
              size={60}
              color={color}
            />
          </Link>
        </LandingPageButton>
        <LandingPageButton variant='Stats' disabled>
          <Link href='/'>
            <IconButton
              IconComponent={Ionicons}
              name='stats-chart'
              size={60}
              color={color}
            />
          </Link>
        </LandingPageButton>
      </View>
    </View>
  );
};

export default Landing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingTop: '20%',
  },
  buttonRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
});
