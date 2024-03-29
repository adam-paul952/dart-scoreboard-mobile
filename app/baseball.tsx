// import { useKeepAwake } from 'expo-keep-awake';
import React, { useEffect, useRef } from 'react';
import { Alert, StyleSheet } from 'react-native';

import {
  BaseballRoundInfo,
  CalculatorButtons,
  CustomStackScreenHeader,
  gameOverAlert,
  GameScoreboardBody,
  GameScoreboardHeader,
  View,
} from '@/components';
import { usePlayerState } from '@/context/Player';
import useGame from '@/hooks/useGame';
import usePlayerStats from '@/hooks/usePlayerStats';
import useUndoRedo from '@/hooks/useUndoRedo';
// import useResumeGame from "../../hooks/useResumeGame";

let winner: { id: string; name: string } = {
  id: '',
  name: '',
};
const variant = 'baseball';

const Baseball = () => {
  // keep device awake while on game screen
  //   useKeepAwake();

  const { selectedPlayers, setSelectedPlayers } = usePlayerState();
  const { /* onUpdatePlayerStats, */ setGameOver } = usePlayerStats();
  //   const { onAddGame } = useResumeGame();
  const {
    playerScore,
    setPlayerScore,
    onDeleteInput,
    assignCurrentPlayerHighScore,
    playerIsOut,
    setPlayerIsOut,
    onResetGame,
    nextPlayer,
    gameState,
    setGameState,
    onChangeTurns,
    skipPlayer,
  } = useGame();

  const { turn, round, leadingScore, currentPlayer } = gameState;

  const [undoState, { set: setUndoState, undo: undoTurn, canUndo }] =
    useUndoRedo({
      ...gameState,
      nextPlayer: { ...nextPlayer },
    });

  const { past, present } = undoState;

  const roundRef = useRef(round);

  // set initial player scorelist filled with 0 - for display purposes
  useEffect(() => {
    setSelectedPlayers((prev) =>
      prev.map((player) => {
        player.scoreList = new Array(10).fill(0);
        return player;
      }),
    );
  }, []);

  // handle score input
  const handleScoreInput = () => {
    // convert playerscore to number
    let roundScore = parseInt(playerScore, 10);
    // if score is NaN - score = 0
    if (isNaN(roundScore)) roundScore = 0;
    // assign score to proper index in scorelist
    if (round <= 9) {
      currentPlayer.scoreList[round - 1] = roundScore;
    } else {
      currentPlayer.scoreList[9] += roundScore;
    }

    // calculate total by reducing scorelist
    const overallScore = currentPlayer.scoreList
      .filter(String)
      .reduce((a, b) => a + b, 0);

    assignCurrentPlayerHighScore(currentPlayer);

    // assign new totals to current player
    setSelectedPlayers((prev) =>
      prev.map((player) =>
        player.id === currentPlayer.id
          ? {
              ...player,
              score: overallScore,
              scoreList: [...currentPlayer.scoreList],
            }
          : player,
      ),
    );

    onChangeTurns(selectedPlayers, overallScore);
  };

  // handle turn change
  const onHandleTurnChange = () => {
    handleScoreInput();
    roundRef.current = round;

    // if round is = 9 and turn is last turn check for duplicates or winner
    if (round === 9 && turn === selectedPlayers.length - 1) {
      if (
        selectedPlayers.filter((player) => player.score === leadingScore)
          .length > 1
      ) {
        playExtraInnings();
      } else {
        declareWinner();
      }
    } else if (
      round > 9 &&
      round === present.round &&
      // since state update is batched we need to manually add
      // if not always returns true
      currentPlayer.score + parseInt(playerScore, 10) !== leadingScore &&
      selectedPlayers.filter((player) => player.score === leadingScore)
        .length === 1
    )
      declareWinner();
  };

  // handle score submit
  const onHandleSubmit = () => {
    onHandleTurnChange();

    // assign state to undo redo
    setUndoState({
      ...gameState,
      nextPlayer: { ...nextPlayer },
    });
  };

  // declare winning player
  const declareWinner = () => {
    // find winner's name
    selectedPlayers.forEach((player) => {
      if (player.score === leadingScore) {
        winner = { id: player.id, name: player.name };
      }
    });

    // alert game over with winner name
    gameOverAlert({
      winner,
      // navigation,
      variant,
      undo: onUndoGameEnd,
      gameEnd: onHandleGameEnd,
    });
  };

  const onUndoGameEnd = () => {
    undoTurn();

    setSelectedPlayers((prev) =>
      prev.map((player) =>
        player.id === present.currentPlayer.id ? present.currentPlayer : player,
      ),
    );

    setGameState((prev) => ({
      ...prev,
      currentPlayer: { ...past[past.length - 1].currentPlayer },
      turn: (present.turn + 1) % selectedPlayers.length,
      round: present.round,
      leadingScore: present.leadingScore,
    }));
  };

  const onHandleGameEnd = () => {
    // selectedPlayers.forEach((player) => {
    //   onUpdatePlayerStats(variant, player, winner);
    // });

    setGameOver({ isOver: true, game: variant });
    onResetGame(variant);
  };

  // set state for undo
  const onUndo = () => {
    undoTurn();
    setSelectedPlayers((prev) =>
      prev.map((player) =>
        player.id === present.currentPlayer.id ? present.currentPlayer : player,
      ),
    );

    setGameState((prev) => ({
      ...prev,
      currentPlayer: { ...present.currentPlayer },
      turn: present.turn,
      round: present.round,
      leadingScore: present.leadingScore,
    }));
  };

  // set players for extra innings
  const playExtraInnings = () => {
    selectedPlayers.forEach((player) => {
      if (
        !playerIsOut.some((value) => value.name === player.name) &&
        player.score < leadingScore
      ) {
        setPlayerIsOut((prev) => prev.concat(player));
      }
    });

    Alert.alert('', 'Extra Innings!', [{ text: 'Ok', style: 'cancel' }]);
  };

  // extra innings - if player is out - skip turn
  useEffect(() => {
    if (playerIsOut.length >= 1)
      playerIsOut.forEach((player) => {
        if (player.name === currentPlayer.name) skipPlayer();
      });
  }, [currentPlayer]);

  //   // set resume game state
  //   useEffect(() => {
  //     const unsubscribe = navigation.addListener('focus', () => {
  //       const routes = navigation.getState()?.routes;
  //       const previousScreen = routes[routes.length - 2].name;
  //       const resumeGameState = route.params;
  //       if (previousScreen === 'resume-game' && resumeGameState !== undefined) {
  //         // loop over undo past to assign to undo state
  //         // maybe create an extra function in useUndoRedo to handle this?
  //         resumeGameState.undoState.past.forEach((item: any) =>
  //           setUndoState(item),
  //         );
  //         setUndoState(resumeGameState.undoState.present);
  //         setGameState({
  //           ...gameState,
  //           currentPlayer: { ...present.currentPlayer },
  //           turn: present.turn,
  //           round: present.round,
  //           leadingScore: present.leadingScore,
  //         });
  //         setSelectedPlayers(() => resumeGameState.players);
  //       } else return;
  //     });

  //     return unsubscribe;
  //   }, [navigation]);

  // // save or update game state to resume
  // const addGame = () =>
  //   route.params?.id !== undefined
  //     ? onAddGame(variant, selectedPlayers, undoState, route.params.id)
  //     : onAddGame(variant, selectedPlayers, undoState);

  return (
    <View style={styles.container}>
      <CustomStackScreenHeader
        canUndo={canUndo}
        onUndo={onUndo}
        onResetGame={onResetGame}
        // onAddGame={addGame}
        variant={variant}
        // navigation={navigation}
      />
      <View style={styles.scoreboardContainer}>
        <GameScoreboardHeader variant={variant} />
        <GameScoreboardBody
          variant={variant}
          selectedPlayers={selectedPlayers}
          currentPlayer={currentPlayer.id}
          playersOut={playerIsOut}
        />
      </View>
      <View>
        <BaseballRoundInfo
          currentPlayer={currentPlayer}
          round={round}
          playerScore={playerScore}
          leadingScore={leadingScore}
        />
        <CalculatorButtons
          variant='baseball'
          onHandleSubmit={onHandleSubmit}
          onDeleteInput={() => onDeleteInput(variant)}
          setValue={setPlayerScore}
        />
      </View>
    </View>
  );
};

export default Baseball;

const styles = StyleSheet.create({
  container: { flex: 1 },
  scoreboardContainer: { flex: 2, marginHorizontal: 5 },
});
