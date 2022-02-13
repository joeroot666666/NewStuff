import React from "react";
import { StyleSheet, Text } from "react-native";
import { commonFont, GColors } from "../";

export default GTitle = ({ headerText, textStyle }) => <Text style={[styles.main, textStyle]}>{headerText || "Provide a HeaderText"}</Text>;

const styles = StyleSheet.create({
  main: {
    color: GColors.title,
    fontSize: commonFont.fs22,
    fontFamily: commonFont.RBold,
  },
});
