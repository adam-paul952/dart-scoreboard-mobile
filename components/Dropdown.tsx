import React from "react";
import { Dropdown } from "react-native-element-dropdown";
import { Text, View } from "../components/Themed";
import { StyleSheet } from "react-native";
import { RootStackParamList } from "../types";
import { setGlobalCssModule } from "reactstrap/es/utils";

type DropdownArray = { label: string | number; value: string | number };

interface ISelectionDropdown {
  variant?: string;
  array: DropdownArray[];
  labelHeader: string;
  initialPlaceholder: string;
  setGame:
    | React.Dispatch<React.SetStateAction<keyof RootStackParamList | undefined>>
    | React.Dispatch<React.SetStateAction<number>>
    | React.Dispatch<React.SetStateAction<string>>;
  setX01Points?: React.Dispatch<React.SetStateAction<number>>;
}

// Create Game inside renderLabel needs dropdown header text
//

const SelectionDropdown = ({
  variant,
  array,
  labelHeader,
  initialPlaceholder,
  setGame,
  setX01Points,
}: ISelectionDropdown) => {
  const [value, setValue] = React.useState<keyof RootStackParamList>();
  const [isFocus, setIsFocus] = React.useState(false);

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { padding: 4, color: "black" }]}>
          {labelHeader}
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
          data={array}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={
            !isFocus ? (value ? `${value}` : `${initialPlaceholder}`) : "..."
          }
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            if (variant === "x01") {
              setX01Points!(item.value);
            }
            setValue(item.value);
            setIsFocus(false);
            setGame(item.value);
          }}
        />
      </View>
    </>
  );
};

export default SelectionDropdown;

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
