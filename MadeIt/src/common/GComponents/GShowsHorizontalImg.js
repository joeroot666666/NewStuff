import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { GColors, hp, icons, wp } from "../../common";

export default GShowsHorizontalImg = ({ onPress, source }) => {
  return (
    <View>
      <View style={styles.imgBtn}>
        <Image source={source} style={styles.img} />
        {/* <Image source={images.otpScreenImg} style={styles.img} /> */}
      </View>
      <TouchableOpacity style={styles.cancelBtn} onPress={onPress}>
        <Image source={icons.cancelIcn} style={styles.cancelBtnImg} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  imgBtn: {
    width: wp(18),
    aspectRatio: 1,
    marginTop: hp(2),
    borderRadius: wp(3),
    shadowOpacity: 0.3,
    elevation: 3,
    shadowOffset: { height: 0, width: 0 },
    marginEnd: wp(2),
  },
  img: {
    height: "100%",
    width: "100%",
    borderRadius: wp(3),
  },
  cancelBtn: {
    backgroundColor: GColors.white,
    position: "absolute",
    alignSelf: "flex-end",
    width: wp(5),
    aspectRatio: 1,
    borderRadius: wp(5),
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    top: hp(1),
    shadowOpacity: 0.1,
    elevation: 5,
  },
  cancelBtnImg: {
    height: "100%",
    width: "100%",
  },
});
