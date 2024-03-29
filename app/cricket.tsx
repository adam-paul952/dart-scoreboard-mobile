// import { useKeepAwake } from 'expo-keep-awake';
import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet } from 'react-native';

import {
  CalculatorButtons,
  CricketRoundInfo,
  CustomStackScreenHeader,
  GameScoreboardBody,
  GameScoreboardHeader,
  gameOverAlert,
  Text,
  View,
} from '@/components';
import { usePlayerState } from '@/context/Player';
import useGame, { PlayableGameVariants } from '@/hooks/useGame';
import usePlayerStats from '@/hooks/usePlayerStats';
import useUndoRedo from '@/hooks/useUndoRedo';
// import useResumeGame from "@/hooks/useResumeGame";

const targets = [20, 19, 18, 17, 16, 15, 25];
const variant = 'cricket';

const Cricket = () => {
  // keep device awake during game
  // useKeepAwake();
  const { /* onUpdatePlayerStats, */ setGameOver } = usePlayerStats();
  const { selectedPlayers, setSelectedPlayers } = usePlayerState();
  // const { onAddGame } = useResumeGame();
  const {
    playerScore,
    setPlayerScore,
    gameState,
    setGameState,
    nextPlayer,
    onChangeTurns,
    onDeleteInput,
    onResetGame,
    limitNumberOfHits,
    calculateHits,
  } = useGame();

  const { turn, round, leadingScore, currentPlayer } = gameState;

  const [undoState, { set: setUndoState, undo: undoTurn, canUndo }] =
    useUndoRedo({
      ...gameState,
      nextPlayer: {},
      disabledButtons: [] as boolean[],
      playerScore: '',
    });

  const { present: presentTurn } = undoState;

  const playerScoreArray = playerScore.split(',');

  // assign a ref to turn to enable or disable calculator buttons that are closed
  const previousTurn = useRef(-1);

  // disabled state for calculator buttons
  const [disableButton, setDisableButton] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const onHandleTurnCharge = () => {
    previousTurn.current = turn;
    // convert string array into numbers and push into current player scoreList
    playerScoreArray.forEach((score) => {
      const newScore = parseInt(score, 10);
      !isNaN(newScore) && currentPlayer.scoreList.push(newScore);
    });
    // calculate score
    const newScore = handleScoreChange(currentPlayer.scoreList);
    // determine if player has highest score
    // newScore > leadingScore && setLeadingScore(newScore);
    // set player state with updated values
    setSelectedPlayers((prev) =>
      prev.map((player) => {
        if (player.id !== currentPlayer.id) return player;
        else {
          player.scoreList = currentPlayer.scoreList;
          player.score = newScore;
          if (player.stats.highScore < newScore)
            player.stats.highScore = newScore;
          player.stats.darts += 3;
          return player;
        }
      }),
    );

    // check current player array for maximum marks
    const declareWinner = targets
      .map(
        (target) =>
          currentPlayer.scoreList.filter((num) => num === target).length,
      )
      .every((hit) => hit >= 3);

    // if player has all marks and leading score
    if (declareWinner && currentPlayer.score >= leadingScore) onDeclareWinner();
    // else change turns and rounds
    else onChangeTurns(selectedPlayers, newScore);
  };

  // if player has more then three marks on a number assign score
  const handleScoreChange = (playerArray: number[]) => {
    const newScore: number[] = [];
    targets.forEach((target) => {
      const countedScore = playerArray.filter((hitNum) => hitNum === target);
      countedScore.splice(0, 3);
      newScore.push(countedScore.reduce((a, b) => a + b, 0));
    });

    return newScore.reduce((a, b) => a + b, 0);
  };

  const onHandleSubmit = () => {
    setUndoState({
      ...gameState,
      nextPlayer: JSON.parse(JSON.stringify(nextPlayer)),
      disabledButtons: [...disableButton],
      playerScore,
    });

    onHandleTurnCharge();
  };

  const onDeclareWinner = () => {
    // selectedPlayers.forEach((player) => {
    //   onUpdatePlayerStats(variant, player, currentPlayer);
    // });

    setGameOver({ isOver: true, game: variant });

    gameOverAlert({
      winner: {
        id: currentPlayer.id,
        name: currentPlayer.name,
      },
      gameEnd: resetGame,
      // navigation,
      variant,
      undo: onUndoTurn,
    });
  };

  const resetGame = (variant: PlayableGameVariants) => {
    onResetGame(variant);
    setDisableButton((prev) => prev.map((value) => (value = false)));
  };

  // disable buttons if all players have number closed
  const disableInputButtons = () => {
    if (previousTurn.current !== turn)
      // loop over target array
      for (let i = 0; i < targets.length; i++) {
        // map over playerList
        const checkNumOfMarks: number[] = selectedPlayers.map((player) => {
          // if player.id is equal to currentPlayer
          if (player.id === currentPlayer.id) {
            // make shallow copy of scorelist
            const hitArray = [...player.scoreList];
            // convert current marks to array and push into copy of player scorelist
            playerScoreArray.forEach(
              (num) =>
                !isNaN(parseInt(num, 10)) && hitArray.push(parseInt(num, 10)),
            );
            // filter updated scorelist copy to determine if number should be closed
            return hitArray.filter((hitNum) => hitNum === targets[i]).length;
          }
          // if player is not current player then no need to update or copy playerlist - marks are set
          return player.scoreList.filter((hitNum) => hitNum === targets[i])
            .length;
        });
        // for each target we check against current marks
        const markClosed = checkNumOfMarks.every((num: number) => num >= 3);
        // if the marks are closed
        if (markClosed) {
          setDisableButton((prev) =>
            prev.map((value, index) =>
              // if the index is equal to the index in targets we set mark disabled
              index === i
                ? (value = true)
                : // or just return the value
                  value,
            ),
          );
        }
      }
    else return;
  };

  const onUndoTurn = () => {
    undoTurn();
    setSelectedPlayers((prev) =>
      prev.map((player) =>
        player.id === presentTurn.currentPlayer.id
          ? presentTurn.currentPlayer
          : player,
      ),
    );

    setGameState((prev) => ({
      ...prev,
      currentPlayer: { ...presentTurn.currentPlayer },
      turn: presentTurn.turn,
      round: presentTurn.round,
      leadingScore: presentTurn.leadingScore,
    }));

    setDisableButton(presentTurn.disabledButtons);
    setPlayerScore(presentTurn.playerScore);
  };

  const calculatedHits = calculateHits(playerScoreArray, targets);

  useEffect(() => {
    disableInputButtons();
    limitNumberOfHits(calculatedHits);
  }, [playerScore, selectedPlayers]);

  // const addGame = () => onAddGame(variant, selectedPlayers, undoState);

  // const routes = navigation.getState()?.routes;

  // useEffect(() => {
  //   const unsubscribe = navigation.addListener("focus", () => {
  //     const previousScreen = routes[routes.length - 2].name;
  //     const resumeGameState = route.params;

  //     if (previousScreen === "resume-game" && resumeGameState !== undefined) {
  //       resumeGameState.undoState.past.forEach((item) => setUndoState(item));
  //       setUndoState(resumeGameState.undoState.present);

  //       setGameState((prev) => ({
  //         ...prev,
  //         currentPlayer: presentTurn.currentPlayer,
  //         turn: presentTurn.turn,
  //         round: presentTurn.round,
  //         leadingScore: presentTurn.leadingScore,
  //       }));

  //       setSelectedPlayers(() => resumeGameState.players);
  //       setDisableButton(
  //         () => resumeGameState.undoState.present.disabledButtons
  //       );
  //     } else return;
  //   });

  //   return unsubscribe;
  // }, [navigation]);

  return (
    <View style={styles.container}>
      <CustomStackScreenHeader
        canUndo={canUndo}
        onUndo={onUndoTurn}
        onResetGame={onResetGame}
        variant={variant}
        // onAddGame={addGame}
        // navigation={navigation}
      />
      <View style={styles.scoreboardContainer}>
        <GameScoreboardHeader variant={variant} />
        <GameScoreboardBody
          variant={variant}
          selectedPlayers={selectedPlayers}
          currentPlayer={currentPlayer.id}
          hitTargets={calculatedHits}
        />
      </View>
      <View>
        <CricketRoundInfo
          currentPlayer={currentPlayer}
          round={round}
          leadingScore={leadingScore}
          marks={calculatedHits}
          points={handleScoreChange(
            playerScoreArray.map((item) => parseInt(item, 10)),
          )}
          allMarks={calculateHits(
            currentPlayer.scoreList.map((item) => item.toString()),
            targets,
          )}
        />
        <CalculatorButtons
          variant='cricket'
          value={playerScore}
          setValue={setPlayerScore}
          onHandleSubmit={onHandleSubmit}
          onDeleteInput={() => onDeleteInput(variant)}
          hitTargets={calculatedHits}
          disabled={disableButton}
        />
      </View>
    </View>
  );
};

export default Cricket;

const styles = StyleSheet.create({
  container: { flex: 1, flexDirection: 'column' },
  scoreboardContainer: { flex: 2.75, marginTop: 20 },
});
