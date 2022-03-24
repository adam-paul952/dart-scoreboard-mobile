import { Modal, StyleSheet, StyleProp, ViewStyle } from "react-native";
import { View } from "./Themed";

interface ISelectGameProps {
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  modalVisible: boolean;
  children: React.ReactNode;
  modalStyle?: StyleProp<ViewStyle>;
  transparent?: boolean;
}

const DisplayModel = (props: ISelectGameProps) => {
  return (
    <>
      <Modal
        animationType="slide"
        transparent={props.transparent}
        visible={props.modalVisible}
        onRequestClose={() => {
          props.setModalVisible(!props.modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View
            style={
              props.modalStyle
                ? [styles.modalView, props.modalStyle]
                : styles.modalView
            }
          >
            {props.children}
          </View>
        </View>
      </Modal>
    </>
  );
};

export default DisplayModel;

const styles = StyleSheet.create({
  centeredView: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "transparent",
    // borderRadius: 20,
    // padding: 35,
    alignItems: "center",
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 4,
    // elevation: 5,
    width: "100%",
    // height: "100%",
  },
});
