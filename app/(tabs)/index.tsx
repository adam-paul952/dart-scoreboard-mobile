import {
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import { Link } from 'expo-router';
import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';

import { ButtonIcon, LandingPageButton, View } from '@/components';
import Colors from '@/constants/Colors';
import { usePlayerState } from '@/context/Player';
import { useColorScheme } from '@/hooks/useColorScheme';

/**
 * @component
 * @description Main Landing Screen - Renders buttons to direct the user
 *  New Game - route "/create-match"
 *  Manage Players - route "/manage-players"
 *  Resume Game - route "/resume-game" (Not used yet)
 *  Stats - route "/statistics" (Not used yet)
 */

const Landing = () => {
  const { playerList } = usePlayerState();

  const colorScheme = useColorScheme() ?? 'light';
  const color = Colors[colorScheme].text;

  const iconProps = {
    size: 60,
    color,
    style: { alignSelf: 'center', backgroundColor: 'transparent' } as ViewStyle,
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonRow}>
        <Link
          href={playerList.length < 2 ? `/create-player` : `/create-match`}
          asChild
        >
          <LandingPageButton variant='New Game'>
            <ButtonIcon
              IconComponent={MaterialCommunityIcons}
              name='bullseye-arrow'
              {...iconProps}
            />
          </LandingPageButton>
        </Link>
        <Link href='/' disabled asChild>
          <LandingPageButton variant='Resume Game'>
            <ButtonIcon
              IconComponent={FontAwesome5}
              name='undo-alt'
              {...iconProps}
            />
          </LandingPageButton>
        </Link>
        <Link href='/manage-players' asChild>
          <LandingPageButton variant='Manage Players'>
            <ButtonIcon
              IconComponent={FontAwesome5}
              name='user-friends'
              {...iconProps}
            />
          </LandingPageButton>
        </Link>
        <Link href='/' disabled asChild>
          <LandingPageButton variant='Stats'>
            <ButtonIcon
              IconComponent={Ionicons}
              name='stats-chart'
              {...iconProps}
            />
          </LandingPageButton>
        </Link>
      </View>
    </View>
  );
};

export default Landing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    overflow: 'hidden',
  },
  buttonRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    height: '60%',
  },
});
