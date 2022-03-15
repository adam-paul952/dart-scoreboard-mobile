import { Modal, StyleSheet } from "react-native";
import { View } from "../components/Themed";

import { RootStackParamList } from "../../types";

import GameSelection from "../screens/SelectGame";

interface ISelectGameProps {
  setSelectedGame: React.Dispatch<
    React.SetStateAction<keyof RootStackParamList | undefined>
  >;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  modalVisible: boolean;
  selectedGame: keyof RootStackParamList | undefined;
}

const DisplayModel = ({
  setSelectedGame,
  modalVisible,
  setModalVisible,
  selectedGame,
}: ISelectGameProps) => {
  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <GameSelection
              setSelectedGame={setSelectedGame}
              selectedGame={selectedGame}
              setModalVisible={setModalVisible}
              modalVisible={modalVisible}
            />
          </View>
        </View>
      </Modal>
    </>
  );
};

export default DisplayModel;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "100%",
    height: "100%",
  },
});
