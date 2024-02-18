import { Link } from 'expo-router';
import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { Button, PlayerItem, Text, View } from '@/components';
import { IPlayer, usePlayerState } from '@/context/Player';

const ManagePlayerScreen = () => {
  const { playerList, onDeletePlayer, toggleSelectedPlayers } =
    usePlayerState();

  const disableButton = () => {
    const selected = playerList.filter(
      (player) => player.selected === true,
    ).length;

    return selected <= 1;
  };

  const renderItem = ({ item }: { item: IPlayer }) => {
    return (
      <PlayerItem
        player={item}
        togglePlayerSelect={toggleSelectedPlayers}
        deletePlayer={onDeletePlayer}
      />
    );
  };

  return (
    <View
      style={[
        styles.container,
        playerList.length === 0
          ? styles.emptyListContainer
          : styles.filledListContainer,
      ]}
    >
      <FlatList
        data={playerList}
        renderItem={renderItem}
        keyExtractor={(item) => `${item.id}`}
        ListEmptyComponent={ListEmpty}
      />
      <Link href='/create-match' asChild disabled={disableButton()}>
        <Button title='Continue to Game' buttonStyle={styles.buttonStyle} />
      </Link>
    </View>
  );
};

export default ManagePlayerScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },
  emptyListContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: '50%',
  },
  filledListContainer: { paddingTop: 20 },
  buttonStyle: {
    marginBottom: 20,
    width: '90%',
    alignSelf: 'center',
  },
});

const ListEmpty = () => {
  return (
    <Text style={{ fontSize: 22 }}>
      No players added -- {'\n'}Please add players to continue
    </Text>
  );
};
