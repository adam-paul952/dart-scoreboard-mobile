import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet } from 'react-native';

import { CricketScoreboardColumn } from './CricketScoreboardColumn';

import { Text, View } from '@/components';
import Colors from '@/constants/Colors';
import { IPlayer } from '@/context/Player';
import { useColorScheme } from '@/hooks/useColorScheme';
import { PlayableGameVariants } from '@/hooks/useGame';

interface GameScoreboardBodyProps {
  variant: PlayableGameVariants;
  selectedPlayers: IPlayer[];
  currentPlayer: string;
  playersOut?: IPlayer[];
  hitTargets?: number[];
}

export const DefaultGame = (props: GameScoreboardBodyProps) => {
  const { selectedPlayers, currentPlayer, playersOut, variant, hitTargets } =
    props;
  const colorScheme = useColorScheme() ?? 'light';
  const activePlayerColor = Colors[colorScheme].activePlayer;
  const hitMarkColor = Colors[colorScheme].text;

  const playerStrikeThrough = (player: IPlayer) =>
    (variant === 'baseball' &&
      playersOut !== undefined &&
      playersOut.some((item) => item.id === player.id)) ||
    (variant === 'elimination' && player.lives === 0) ? (
      <View
        style={styles.strikeThrough}
        accessibilityLabel='eliminated player'
      />
    ) : null;

  return (
    <>
      {selectedPlayers.map((player) => (
        <View
          key={player.id}
          style={[
            styles.playerRow,
            player.id === currentPlayer
              ? { backgroundColor: activePlayerColor }
              : {},
            variant === 'baseball'
              ? styles.baseballPlayerRow
              : variant === 'cricket'
                ? styles.cricketPlayerRow
                : variant === 'elimination'
                  ? styles.eliminationPlayerRow
                  : variant === 'killer'
                    ? styles.killerPlayerRow
                    : null,
          ]}
        >
          <>
            {playerStrikeThrough(player)}

            <View
              style={[
                styles.playerColumn,
                variant === 'baseball'
                  ? styles.baseballPlayerColumn
                  : variant === 'cricket'
                    ? styles.cricketPlayerColumn
                    : variant === 'elimination'
                      ? styles.eliminationPlayerColumn
                      : variant === 'killer'
                        ? {
                            flex: 2.1,
                          }
                        : styles.x01PlayerColumn,
              ]}
            >
              <Text
                style={[
                  styles.textStyle,
                  { paddingLeft: 3 },
                  variant === 'cricket'
                    ? { flex: 3 }
                    : variant === 'x01'
                      ? {
                          flex: 4,
                          backgroundColor: 'transparent',
                        }
                      : variant === 'killer' || variant === 'baseball'
                        ? { textAlign: 'left' }
                        : null,
                ]}
                numberOfLines={1}
                ellipsizeMode='tail'
              >
                {player.name}
              </Text>
            </View>

            {variant === 'baseball'
              ? player.scoreList.map((score, index) => (
                  <View
                    key={player.id + index}
                    style={[{ backgroundColor: 'transparent', flex: 1 }]}
                  >
                    <Text style={styles.textStyle}>{score}</Text>
                  </View>
                ))
              : null}

            {variant === 'cricket' ? (
              <CricketScoreboardColumn
                player={player}
                hitTargets={
                  player.id === currentPlayer ? hitTargets : undefined
                }
                hitMarkColor={hitMarkColor}
              />
            ) : null}

            <View
              style={[
                { backgroundColor: 'transparent' },
                variant === 'baseball'
                  ? { flex: 1.5 }
                  : variant === 'cricket'
                    ? { flex: 1 }
                    : variant === 'elimination'
                      ? { flex: 0.6 }
                      : variant === 'x01'
                        ? { flexDirection: 'row', flex: 1 }
                        : { flex: 1 },
              ]}
            >
              {variant === 'x01' ? (
                <Text style={[styles.textStyle, { flex: 1 }]}>0</Text>
              ) : null}

              <Text
                style={[
                  styles.textStyle,
                  variant === 'x01' ? { flex: 1 } : null,
                ]}
              >
                {player.score}
              </Text>
            </View>

            {/* {variant === 'elimination' || variant === 'killer' ? (
              <View
                style={[
                  { backgroundColor: 'transparent' },
                  variant === 'elimination' ? { flex: 0.6 } : { flex: 1 },
                ]}
              >
                <Text
                  style={[
                    styles.textStyle,
                    variant === 'elimination'
                      ? { paddingLeft: 10 }
                      : {
                          //   flex: 1, backgroundColor: "transparent",
                        },
                  ]}
                >
                  {player.lives}
                </Text>
              </View>
            ) : null} */}

            {/* {variant === 'killer' ? (
              <View style={{ flex: 1, backgroundColor: 'transparent' }}>
                <Text style={styles.textStyle}>
                  {player.killer === true ? (
                    <Ionicons
                      name='checkmark'
                      size={24}
                      color={Colors[colorScheme].text}
                      accessibilityLabel={`Player ${player.id} killer`}
                    />
                  ) : (
                    ''
                  )}
                </Text>
              </View>
            ) : null} */}
          </>
        </View>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  strikeThrough: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    width: '105%',
    position: 'absolute',
    top: '55%',
    left: '-2%',
  },
  playerRow: {
    flexDirection: 'row',
  },
  baseballPlayerRow: {
    justifyContent: 'space-evenly',
    padding: 2,
    position: 'relative',
  },
  cricketPlayerRow: {
    marginHorizontal: 5,
  },
  eliminationPlayerRow: {
    justifyContent: 'space-evenly',
    paddingHorizontal: 10,
    position: 'relative',
  },
  killerPlayerRow: {
    justifyContent: 'space-evenly',
    paddingHorizontal: 10,
  },
  playerColumn: {
    backgroundColor: 'transparent',
  },
  baseballPlayerColumn: { flex: 3 },
  cricketPlayerColumn: {
    flex: 2,
  },
  eliminationPlayerColumn: {
    flexDirection: 'row',
    flex: 1.3,
    marginLeft: 2,
  },
  killerPlayerColumn: {
    // flexDirection: "row",
    // justifyContent: "space-evenly",
    // flex: 2,
    // marginLeft: 2,
    // backgroundColor: "purple",
  },
  x01PlayerColumn: {
    flex: 1,
    flexDirection: 'row',
  },
  scoreColumn: {},
  textStyle: { fontSize: 18, textAlign: 'center' },
});
