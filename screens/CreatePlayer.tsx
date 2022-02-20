import React from "react";
import { Button, StyleSheet, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
// import {
//   Table,
//   TableWrapper,
//   Row,
//   Rows,
//   Col,
// } from "react-native-table-component";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

const CONTENT = {
  tableHead: ["Id", "Player Name", "", "Delete"],
  tableTitle: ["1", "2", "3", "4"],
  tableData: [
    ["Adam", "", "3"],
    ["Raelene", "", "c"],
    ["Greg", "", "3"],
    ["Emily", "", "c"],
  ],
};

const CreatePlayer = ({ navigation }: RootTabScreenProps<"GetStarted">) => {
  const navigator = useNavigation();
  const [playerName, setPlayerName] = React.useState<string>("");
  return (
    <>
      <View style={styles.container}>
        <Text>Enter Playername:</Text>
        <TextInput
          style={styles.input}
          value={playerName}
          onChangeText={() => setPlayerName(playerName)}
          keyboardType="default"
        />
        <Button title="Add Player" onPress={() => {}} />
      </View>
      <Button
        title="Create Game"
        onPress={() => {
          navigator.navigate("CreateGame");
        }}
      />
      {/* <View style={styles.tableContainer}>
        <Table borderStyle={{ borderWidth: 1 }}>
          <Row
            data={CONTENT.tableHead}
            flexArr={[1, 2, 1, 1]}
            // style={styles.head}
            // textStyle={styles.text}
          />
          <TableWrapper style={styles.wrapper}>
            <Col
              data={CONTENT.tableTitle}
              // style={styles.tableTitle}
              heightArr={[28, 28]}
              // textStyle={styles.text}
            />
            <Rows
              data={CONTENT.tableData}
              flexArr={[2, 1, 1]}
              // style={styles.row}
              // textStyle={styles.text}
            />
          </TableWrapper>
        </Table> */}
      {/* </View> */}
    </>
  );
};

export default CreatePlayer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    marginTop: 50,
    marginBottom: 0,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white",
    width: "50%",
  },
  tableContainer: {
    flex: 1,
    padding: 16,
    paddingTop: 100,
    color: "white",
    // backgroundColor: "#fff",
  },
  head: { height: 40, backgroundColor: "orange" },
  wrapper: { flexDirection: "row" },
  tableTitle: { flex: 1, backgroundColor: "#2ecc71" },
  row: { height: 28 },
  text: { textAlign: "center", color: "white" },
});
