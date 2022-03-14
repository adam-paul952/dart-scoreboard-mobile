import React from "react";
import { FlatList, Pressable, StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";

import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

import useGame, { PlayerList, IPlayers } from "../hooks/useGame";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";

import BaseballCalculatorButtons from "../components/calculatorButtons/BaseballButtons";

const Killer = () => {
  const {
    playerList,
    setPlayerList,
    nextTurn,
    getCurrentPlayer,
    turn,
    round,
    changeRounds,
    winner,
    setWinner,
  } = useGame();
  return (
    <>
      <View style={styles.container}>
        <Scoreboard
          playerList={playerList}
          getCurrentPlayer={getCurrentPlayer}
        />
        <KillerScoreCalculator
          playerList={playerList}
          //   setPlayerList={setPlayerList}
          //   nextTurn={nextTurn}
          //   getCurrentPlayer={getCurrentPlayer}
          //   turn={turn}
          //   round={round}
          //   changeRounds={changeRounds}
          //   winner={winner}
          //   setWinner={setWinner}
        />
      </View>
    </>
  );
};

export default Killer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    padding: 16,
  },
  listContainer: {
    backgroundColor: "white",
    marginBottom: 20,
  },
  listRow: {
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 20,
    justifyContent: "space-between",
    backgroundColor: "white",
  },
  listCol: {
    marginLeft: 20,
    marginRight: 20,
    color: "black",
    fontWeight: "bold",
  },

  // ---- Scoreboard ---- //
  playerIndicator: {
    marginLeft: 10,
  },
  killerIcon: {
    marginRight: 10,
  },
  // ---- ScoreCalculator ---- //
  scoreDisplay: {
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonGroup: {
    backgroundColor: "black",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: 60,
    // height: 300,
  },
  buttonRow: {
    flexDirection: "row",
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
    padding: 1,
    margin: 4,
    minHeight: 60,
    // width: "50%",
  },
});

// ---- Scoreboard ---- //

interface IScoreboard {
  playerList: PlayerList;
  getCurrentPlayer: () => IPlayers;
}

const Scoreboard = ({ playerList, getCurrentPlayer }: IScoreboard) => {
  //   const colorScheme = useColorScheme();
  let currentPlayerById = getCurrentPlayer();

  return (
    <>
      <View style={styles.listContainer}>
        <FlatList
          extraData={playerList}
          data={playerList}
          renderItem={(item) => (
            <View key={item.item.id} style={styles.listRow}>
              {item.item.id === currentPlayerById.id ? (
                <AntDesign
                  name="caretright"
                  size={18}
                  color="black"
                  style={styles.playerIndicator}
                />
              ) : (
                <AntDesign
                  name="caretright"
                  size={18}
                  color="white"
                  style={styles.playerIndicator}
                />
              )}
              <Text style={styles.listCol}>{item.item.name}</Text>
              <Text style={styles.listCol}>{item.item.score}</Text>
              <Text style={styles.listCol}>{item.item.lives}</Text>

              {item.item.id === currentPlayerById.id ? (
                <MaterialCommunityIcons
                  name="sword-cross"
                  size={20}
                  color="black"
                  style={styles.killerIcon}
                />
              ) : (
                <MaterialCommunityIcons
                  name="sword-cross"
                  size={20}
                  color="black"
                  style={styles.killerIcon}
                />
              )}
            </View>
          )}
          ListHeaderComponent={KillerScoreboardHeader}
          ListHeaderComponentStyle={{
            borderBottomColor: "black",
            borderBottomWidth: 2,
          }}
        />
      </View>
    </>
  );
};

const KillerScoreboardHeader = () => {
  return (
    <>
      <View style={styles.listRow}>
        <Text style={styles.listCol}></Text>
        <Text style={styles.listCol}>Player Name</Text>
        <Text style={styles.listCol}>Target</Text>
        <Text style={styles.listCol}>Lives</Text>
        <Text style={styles.listCol}>Killer</Text>
      </View>
    </>
  );
};

// ---- ScoreCalculator ---- //

interface IKillerScoreCalculator {
  playerList: PlayerList;
}

export const KillerScoreCalculator = (props: IKillerScoreCalculator) => {
  const { killerTargets } = useGame();
  const [playerScore, setPlayerScore] = React.useState<string>("");
  const [playerTargets, setPlayerTargets] = React.useState(killerTargets);

  // React.useEffect(() => {
  //   const assignTargets: { label: number; value: number }[] =
  //     props.playerList.map((player) => {
  //       return { label: player.score, value: player.score };
  //     });
  //   setPlayerTargets(assignTargets);
  // }, []);

  React.useEffect(() => {
    console.log(playerTargets);
  }, [playerTargets]);

  const onHandleScoreSubmit = () => {
    return;
  };

  return (
    <>
      <View style={styles.scoreDisplay}>
        <Text>Player Score: {playerScore}</Text>
        {/* {props.winner && <Text>The winner is {props.winner.name}</Text>} */}
      </View>
      <>
        <View style={styles.buttonGroup}>
          <View style={styles.buttonRow}>
            <FlatList
              extraData={playerTargets}
              data={playerTargets}
              numColumns={2}
              keyExtractor={(item) => item.value.toString()}
              renderItem={(item) => (
                <Pressable
                  style={styles.button}
                  onPress={() => {
                    onHandleScoreSubmit();
                  }}
                >
                  <Text>{item.item.value}</Text>
                </Pressable>
              )}
            />
          </View>
        </View>
      </>
    </>
  );
};
