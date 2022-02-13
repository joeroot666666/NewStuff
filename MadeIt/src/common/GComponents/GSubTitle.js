import React from "react";
import { StyleSheet, Text } from "react-native";
import { commonFont, GColors, hp } from "../";

export default GSubTitle = ({ headerText, textStyle }) => <Text style={[styles.main, textStyle]}>{headerText || "Provide a headerText"}</Text>;

const styles = StyleSheet.create({
  main: {
    color: GColors.subTitle,
    fontSize: commonFont.fs14,
    fontFamily: commonFont.RRegular,
    marginTop: hp(1.5),
  },
});
