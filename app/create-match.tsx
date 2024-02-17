import { Picker } from '@react-native-picker/picker';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';

import { ActivePlayerList, Text, View } from '@/components';
import CustomButton from '@/components/Button';
import {
  gameData,
  x01Data,
  eliminationData,
  GameType,
} from '@/constants/GameData';
import { usePlayerState } from '@/context/Player';

const CreateMatch = () => {
  const { selectedPlayers, setSelectedPlayers, togglePlayerSelect } =
    usePlayerState();
  const navigation = useRouter();
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

  const resetPlayerState = () => {
    setSelectedPlayers((prev) =>
      prev.map((player) => {
        player.score = 0;
        player.scoreList = [];
        player.lives = 0;
        player.killer = false;
        return player;
      }),
    );
  };

  // handle conditions for setting state and navigation
  const onHandleSelect = () => {
    if (game !== null) {
      switch (game) {
        case 'x01':
          setX01Points();
          navigation.navigate(game);
          break;
        case 'elimination':
          setEliminationLives();
          navigation.navigate(game);
          break;
        case 'killer':
          navigation.navigate('killer-setup');
          break;
        default:
          navigation.navigate(game);
      }
    }
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

  //   useEffect(() => {
  //     const unsubscribe = navigation.addListener("focus", () =>
  //       resetPlayerState()
  //     );

  //     return unsubscribe;
  //   }, [navigation]);

  // because draggable flatlist uses useLayoutEffect we need to wait until we're sure we're on the client
  useEffect(() => {
    setShowPlayerList(true);
  }, []);

  return (
    <View style={styles.container}>
      <View
        style={{
          minHeight: '20%',
        }}
      >
        <Picker
          selectedValue={game}
          onValueChange={(itemValue, itemIndex) => {
            setGame(itemValue);
          }}
        >
          {gameData.map((item, index) => {
            return (
              <Picker.Item label={item.label} value={item.value} key={index} />
            );
          })}
        </Picker>
        {game === 'x01' ? (
          <Picker>
            {x01Data.map((item, index) => {
              return (
                <Picker.Item
                  label={item.label}
                  value={item.value}
                  key={index}
                />
              );
            })}
          </Picker>
        ) : game === 'elimination' ? (
          <Picker>
            {eliminationData.map((item, index) => {
              return (
                <Picker.Item
                  label={item.label}
                  value={item.value}
                  key={index}
                />
              );
            })}
          </Picker>
        ) : null}
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingVertical: 10,
        }}
      >
        <Text style={{ fontSize: 20 }}>- Or -</Text>
        <CustomButton
          title='Randomize Game'
          buttonStyle={{
            backgroundColor: 'transparent',
            alignSelf: 'flex-end',
            flexBasis: '70%',
            borderWidth: 1,
            borderColor: '#ddd',
          }}
          onPressOut={() => onRandomGame()}
        />
      </View>
      <View style={{ flexGrow: 1, paddingVertical: 10 }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              fontSize: 25,
              textDecorationLine: 'underline',
              paddingBottom: 5,
            }}
          >
            Players to play:
          </Text>
          <CustomButton
            title='Shuffle'
            buttonStyle={{
              backgroundColor: 'transparent',
              paddingRight: 10,
              paddingBottom: 10,
            }}
            onPressIn={() =>
              setSelectedPlayers((prev) =>
                shuffleList(prev).map((player) => player),
              )
            }
          />
        </View>
        {showPlayerList ? (
          <ActivePlayerList
            selectedPlayers={selectedPlayers}
            setSelectedPlayers={setSelectedPlayers}
            togglePlayerSelect={togglePlayerSelect}
          />
        ) : (
          false
        )}
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          title='Continue to Game'
          buttonStyle={styles.buttonStyle}
          disabled={disableButton()}
          onPressOut={() => onHandleSelect()}
        />
      </View>
    </View>
  );
};

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
});
