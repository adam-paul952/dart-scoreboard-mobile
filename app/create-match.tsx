import { Picker } from '@react-native-picker/picker';
import { Link } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';

import { ActivePlayerList, Button, Text, View } from '@/components';
import {
  gameData,
  x01Data,
  eliminationData,
  GameType,
} from '@/constants/GameData';
import { usePlayerState } from '@/context/Player';

const CreateMatch = () => {
  const { selectedPlayers, setSelectedPlayers, toggleSelectedPlayers } =
    usePlayerState();
  // const navigation = useRouter();
  // game to be selected
  const [game, setGame] = useState<GameType>(gameData[0].value);
  // x01 points - elimination lives
  const [points, setPoints] = useState<number | null>(null);
  const [showPlayerList, setShowPlayerList] = useState<boolean>(false);

  // disable button if game is null or specific game options are not set
  const disableButton = () =>
    game === null
      ? true
      : game === 'x01' && points === null
        ? true
        : game === 'elimination' && points === null;

  // if x01 is selected set points to player
  const setX01Points = () =>
    points !== null &&
    setSelectedPlayers((prev) =>
      prev.map((player) => {
        player.score = points;
        return player;
      }),
    );

  // if elimination - set lives to player
  const setEliminationLives = () =>
    points !== null &&
    setSelectedPlayers((prev) =>
      prev.map((player) => {
        player.lives = points;
        return player;
      }),
    );

  // const resetPlayerState = () => {
  //   setSelectedPlayers((prev) =>
  //     prev.map((player) => {
  //       player.score = 0;
  //       player.scoreList = [];
  //       player.lives = 0;
  //       player.killer = false;
  //       return player;
  //     }),
  //   );
  // };

  // handle conditions for setting state and navigation
  const onHandleSelect = ():
    | '/baseball'
    | '/elimination'
    | '/killer-setup'
    | '/cricket'
    | '/x01'
    | '/killer' => {
    if (game === 'x01') {
      setX01Points();
    } else if (game === 'elimination') {
      setEliminationLives();
    }

    if (game === 'killer') {
      return '/killer-setup';
    }

    return `/${game}`;
  };

  const shuffleList = <T,>(array: T[]) => {
    let currentIndex = array.length;
    let randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };

  const onRandomGame = () => {
    const games = [...gameData];
    const randomGame = shuffleList(games);

    setGame(randomGame[0].value);
  };

  // because draggable flatlist uses useLayoutEffect we need to wait until we're sure we're on the client
  useEffect(() => {
    setShowPlayerList(true);
  }, []);

  const onShufflePlayers = () => {
    setSelectedPlayers((prev) => shuffleList(prev).map((player) => player));
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 0.5, justifyContent: 'space-evenly' }}>
        <Picker
          selectedValue={game}
          onValueChange={(itemValue) => {
            setGame(itemValue);
          }}
          style={styles.pickerStyle}
        >
          {gameData.map((item, index) => {
            return (
              <Picker.Item label={item.label} value={item.value} key={index} />
            );
          })}
        </Picker>
        {game === 'x01'
          ? renderPicker(x01Data, setPoints)
          : game === 'elimination'
            ? renderPicker(eliminationData, setPoints)
            : null}
      </View>
      <View style={styles.randomizeContainer}>
        <Text style={{ fontSize: 20 }}>- Or -</Text>
        <Button
          title='Randomize Game'
          buttonStyle={styles.randomizeButton}
          onPress={onRandomGame}
        />
      </View>
      <View style={{ flexGrow: 1, paddingVertical: 10 }}>
        <View style={styles.shuffleButtonContainer}>
          <Text style={styles.textStyle}>Players to play:</Text>
          <Button
            title='Shuffle'
            buttonStyle={styles.shuffleButton}
            onPress={onShufflePlayers}
          />
        </View>
        {showPlayerList ? (
          <ActivePlayerList
            selectedPlayers={selectedPlayers}
            setSelectedPlayers={setSelectedPlayers}
            togglePlayerSelect={toggleSelectedPlayers}
          />
        ) : (
          false
        )}
      </View>
      <View style={styles.buttonContainer}>
        <Link href={onHandleSelect()} asChild disabled={disableButton()}>
          <Button title='Continue to Game' buttonStyle={styles.buttonStyle} />
        </Link>
      </View>
    </View>
  );
};

const renderPicker = (
  data: { label: string; value: string }[],
  setData: React.Dispatch<React.SetStateAction<number | null>>,
) => (
  <Picker
    selectedValue={data[0]}
    onValueChange={(itemValue) => setData(parseInt(itemValue.value, 2))}
    style={[styles.pickerStyle, { marginTop: 20 }]}
  >
    {data.map((item, index) => (
      <Picker.Item label={item.label} value={item.value} key={index} />
    ))}
  </Picker>
);

export default CreateMatch;

const styles = StyleSheet.create({
  container: { flex: 1, flexDirection: 'column', padding: 5 },
  buttonContainer: {
    alignSelf: 'center',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    borderTopWidth: 1,
    borderTopColor: 'lightgray',
  },
  buttonStyle: {
    marginVertical: 10,
    width: '80%',
    alignSelf: 'center',
  },
  pickerStyle: {
    backgroundColor: 'transparent',
    borderColor: 'none',
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 20,
  },
  randomizeButton: {
    backgroundColor: 'transparent',
    alignSelf: 'flex-end',
    flexBasis: '70%',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  randomizeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  shuffleButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  shuffleButton: {
    backgroundColor: 'transparent',
    paddingRight: 10,
    paddingBottom: 10,
  },
  textStyle: {
    fontSize: 25,
    textDecorationLine: 'underline',
    paddingBottom: 5,
  },
});
