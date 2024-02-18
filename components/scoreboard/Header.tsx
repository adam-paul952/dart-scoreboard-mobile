import React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '@/components';
import {
  baseballHeader,
  cricketHeader,
  eliminationHeader,
  killerHeader,
  x01Header,
} from '@/constants/ScoreboardHeaders';
import { PlayableGameVariants } from '@/hooks/useGame';

interface GameScoreboardHeaderProps {
  variant: PlayableGameVariants;
}

export const Header = ({ variant }: GameScoreboardHeaderProps) => {
  let data: string[] = [];

  variant === 'baseball'
    ? (data = baseballHeader)
    : variant === 'cricket'
      ? (data = cricketHeader)
      : variant === 'elimination'
        ? (data = eliminationHeader)
        : variant === 'killer'
          ? (data = killerHeader)
          : (data = x01Header);

  return (
    <View style={styles.scoreboardHeader}>
      {data.map((text) => (
        <View
          key={text}
          style={[
            text === 'Name'
              ? { flex: 3 }
              : text === 'Player'
                ? {
                    flex: 2,
                    borderBottomWidth: 1,
                    borderBottomColor: 'gray',
                  }
                : text === 'R'
                  ? { flex: 1.5 }
                  : { flex: 1 },
            { borderBottomColor: 'gray', borderBottomWidth: 1 },
          ]}
        >
          <Text style={{ textAlign: 'center', fontSize: 18 }}>{text}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  scoreboardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingVertical: 3,
  },
});
