import React from "react";
import { Dropdown } from "react-native-element-dropdown";
import { Text, View } from "../components/Themed";
import { Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../types";

const games = [
  { label: "Baseball", value: "Baseball" },
  { label: "Cricket", value: "Cricket" },
  { label: "Elimination", value: "Elimination" },
  { label: "Killer", value: "Killer" },
  { label: "X01", value: "X01" },
];

const CreateGame = () => {
  const navigator = useNavigation();
  const [value, setValue] = React.useState<keyof RootStackParamList>();
  const [isFocus, setIsFocus] = React.useState(false);

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { padding: 4, color: "black" }]}>
          Available Games
        </Text>
      );
    }
    return null;
  };

  return (
    <>
      <View style={styles.container}></View>
      <View style={styles.container}>
        {isFocus && renderLabel()}
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: "black" }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          data={games}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={
            !isFocus ? (value ? `${value}` : `Select a game`) : "..."
          }
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setValue(item.value);
            setIsFocus(false);
          }}
        />
      </View>
      <View>
        <Text>Game selected: {value}</Text>
        <Button
          title="Continue"
          onPress={() => {
            navigator.navigate(value!);
          }}
          disabled={!value ? true : false}
        ></Button>
      </View>
    </>
  );
};

export default CreateGame;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    backgroundColor: "white",
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
});
