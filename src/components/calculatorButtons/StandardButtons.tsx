import { FlatList, Pressable, StyleSheet } from "react-native";
import { Text, View } from "../Themed";

interface IStandardCalculatorButtons {
  onHandleScoreSubmit: (input: string) => void;
}

const calculatorButtons = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "Del",
  "0",
  "Enter",
];

const StandardCalculatorButtons = (props: IStandardCalculatorButtons) => {
  return (
    <>
      <View style={styles.buttonGroup}>
        <View style={styles.buttonRow}>
          <FlatList
            data={calculatorButtons}
            numColumns={3}
            keyExtractor={(item) => item}
            renderItem={(item) => (
              <Pressable
                style={styles.button}
                onPress={() => {
                  props.onHandleScoreSubmit(item.item);
                }}
              >
                <Text>{item.item}</Text>
              </Pressable>
            )}
          />
        </View>
      </View>
    </>
  );
};

export default StandardCalculatorButtons;

const styles = StyleSheet.create({
  buttonGroup: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: 20,
    height: 300,
  },
  buttonRow: {
    flexDirection: "row",
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgrey",
    padding: 1,
    margin: 4,
    minHeight: 60,
    borderRadius: 5,
  },
});
