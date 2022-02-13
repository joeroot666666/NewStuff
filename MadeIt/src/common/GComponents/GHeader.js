import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { commonFont, GColors, hp, icons, wp } from "../";

export default BackBtn = ({ onPress, source, title, rightIcn, onPressRight, containerStyle }) => {
  return (
    <View style={{ height: hp(11) }}>
      <View style={[styles.container, containerStyle]}>
        <TouchableOpacity style={[styles.main]} onPress={onPress}>
          <Image source={source || icons.backIcn} style={styles.img} />
        </TouchableOpacity>
        {title && <Text style={styles.title}>{title}</Text>}
        {/* <View style={{ flex: 1 }} /> */}
        {rightIcn ? (
          <TouchableOpacity style={[styles.main, { right: 0 }]} onPress={onPressRight}>
            <Image source={rightIcn || icons.backIcn} style={styles.img} />
          </TouchableOpacity>
        ) : (
          <View style={{ width: wp(10), aspectRatio: 1 }} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    marginTop: hp(5),
    marginHorizontal: wp(4),
  },
  main: {
    width: wp(10),
    aspectRatio: 1,
    padding: hp(1.5),
    borderRadius: wp(2),
    alignItems: "center",
    backgroundColor: GColors.white,
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0.3,
    elevation: 6,
    justifyContent: "center",
  },
  img: {
    height: "100%",
    width: "100%",
  },
  title: {
    flex: 1,
    textAlign: "center",
    color: GColors.title,
    fontSize: commonFont.fs18,
    fontFamily: commonFont.RMedium,
  },
});
