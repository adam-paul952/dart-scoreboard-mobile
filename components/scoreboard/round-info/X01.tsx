import React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '@/components';
import { IPlayer } from '@/context/Player';

interface IX01PlayerInfo {
  currentPlayer: IPlayer;
}

export const X01PlayerInfo = ({ currentPlayer }: IX01PlayerInfo) => {
  return (
    <View style={styles.rowStyle}>
      <Text style={styles.textStyle}>Darts: {currentPlayer.stats.darts}</Text>
      <Text style={styles.textStyle}>
        1-Dart: {currentPlayer.stats.oneDartAverage}%
      </Text>
      <Text style={styles.textStyle}>
        High Score: {currentPlayer.stats.highScore}
      </Text>
      {/* <Text style={styles.textStyle}>
        CO:
        {currentPlayer.stats.checkoutPercent === 0
          ? " --"
          : `${currentPlayer.stats.checkoutPercent}%`}
      </Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  rowStyle: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 5,
    borderTopWidth: 1,
    borderTopColor: 'lightgray',
  },
  textStyle: { fontSize: 15 },
});
