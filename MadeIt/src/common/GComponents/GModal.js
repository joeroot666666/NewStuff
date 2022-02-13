import React from "react";
import { Image, Modal, StyleSheet, Text, View } from "react-native";
import { GButton } from ".";
import { commonFont, hp, images, wp } from "../";

export default GModal = ({ visible, source, title, btnText, onPress, titleStyle, children }) => {
  return (
    <Modal animationType="slide" transparent={true} visible={visible} statusBarTranslucent={true}>
      <View style={styles.modalView}>
        <View style={styles.modalSubView}>
          <Image source={source || images.modalSuccessImg} style={styles.img} />
          <Text style={[styles.text, titleStyle]}>{title || "Title"}</Text>
          {onPress && <GButton text={btnText || "Okay"} btnStyle={styles.btn} onPress={onPress} />}
          {children}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    backgroundColor: "rgba(60,60,60,0.5)",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  modalSubView: {
    backgroundColor: "white",
    borderRadius: wp(4),
    width: wp(85),
  },
  img: {
    marginVertical: hp(6),
    alignSelf: "center",
  },
  text: {
    fontFamily: commonFont.RMedium,
    fontSize: commonFont.fs15,
    textAlign: "center",
    marginHorizontal: wp(5),
  },
  btn: {
    width: wp(40),
    marginTop: hp(6),
    marginBottom: hp(3),
  },
});
