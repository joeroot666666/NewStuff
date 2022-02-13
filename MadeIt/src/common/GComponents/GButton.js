import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { commonFont, GColors, hp, wp } from "../";

export default GButton = ({ text, btnStyle, textStyle, activeOpacity, onPress, lightBtn }) => {
  return (
    <TouchableOpacity
      style={[
        styles.main,
        {
          backgroundColor: lightBtn ? GColors.lightThemBtn : GColors.themColor,
        },
        btnStyle,
      ]}
      activeOpacity={activeOpacity}
      onPress={onPress}>
      <Text style={[styles.mainText, { color: lightBtn ? GColors.themColor : GColors.white }, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  main: {
    height: Platform.OS == "ios" ? hp(6) : hp(7),
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: wp(2),
    backgroundColor: GColors.themColor,
    alignSelf: "center",
  },
  mainText: {
    fontFamily: commonFont.RBold,
    fontSize: commonFont.fs15,
    color: GColors.white,
  },
});
