import React, { Component } from "react";
import { Image, Platform, StyleSheet, View } from "react-native";
import { GColors, hp, images, wp } from "../../common";
import { GButton, GSubTitle, GTitle } from "../../common/GComponents";

export default class StartScreen extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        {/* img View */}
        <View style={styles.imgView}>
          <View style={styles.imgSubView}>
            <Image source={images.welcomeImg} style={styles.img} />
          </View>
        </View>
        {/* Title View */}
        <View style={{ marginTop: hp(6), marginHorizontal: wp(8) }}>
          <GTitle headerText={"Welcome"} textStyle={{ textAlign: "center" }} />
          <GSubTitle headerText={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."} textStyle={{ textAlign: "center" }} />
        </View>
        {/* btn View */}
        <View style={{ marginHorizontal: wp(20) }}>
          <GButton text={"Become A Driver"} onPress={() => this.props.navigation.navigate("DriverVehicalDetail")} btnStyle={{ marginTop: hp(4) }} />
          <GButton lightBtn text={"Log In"} onPress={() => this.props.navigation.navigate("LogIn")} btnStyle={{ marginTop: hp(3) }} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: GColors.white,
  },
  imgView: {
    alignItems: "center",
    marginTop: hp(10),
  },
  imgSubView: {
    height: Platform.select({ android: wp(70), ios: wp(80) }),
    aspectRatio: 1,
  },
  img: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
});
