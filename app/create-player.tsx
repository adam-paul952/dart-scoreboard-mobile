import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Platform, StyleSheet } from 'react-native';
import uuid from 'react-native-uuid';

import {
  Button,
  KeyboardAvoidingView,
  Text,
  TextInput,
  View,
} from '@/components';
import { usePlayerState } from '@/context/Player';

const initialState = {
  id: '',
  name: '',
  score: 0,
  scoreList: [],
  lives: 0,
  killer: false,
  selected: true,
  stats: {
    highScore: 0,
    oneDartAverage: 0,
    darts: 0,
  },
};

const disableButton = (name: string) => name.length < 3;

const CreatePlayer = () => {
  const { onAddPlayer } = usePlayerState();
  const navigation = useRouter();

  const [playerName, setPlayerName] = useState(initialState);
  const { name } = playerName;

  const addPlayer = () => {
    onAddPlayer({ ...playerName, id: uuid.v4() as string });
    navigation.navigate('/manage-players');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.container}
    >
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Enter Name:</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={(text: string) =>
            setPlayerName({ ...playerName, name: text })
          }
          keyboardType='default'
          onSubmitEditing={addPlayer}
          autoCapitalize='words'
          autoFocus
          placeholder='Player name'
        />
        <View style={styles.buttonContainer}>
          <Button
            title='Add Player'
            buttonStyle={styles.buttonStyle}
            onPress={addPlayer}
            disabled={disableButton(name ?? '')}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default CreatePlayer;

const styles = StyleSheet.create({
  container: { flex: 1 },
  inputContainer: {
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 90,
  },
  inputLabel: { fontSize: 25, paddingBottom: 10 },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    alignItems: 'center',
    paddingTop: 20,
  },
  buttonStyle: {
    width: '60%',
  },
});
