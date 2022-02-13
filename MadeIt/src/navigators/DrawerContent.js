import { useIsDrawerOpen } from "@react-navigation/drawer";
import React, { Component } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { commonFont, GColors, hp, icons, images, wp } from "../common";
import { FocusAwareStatusBar, GButton, GModal } from "../common/GComponents";

const MyStatusBar = (props) => {
  const isDrawerOpen = useIsDrawerOpen();
  if (isDrawerOpen) {
    return <FocusAwareStatusBar backgroundColor={GColors.themColor} barStyle={"light-content"} />;
  } else {
    return <FocusAwareStatusBar backgroundColor={GColors.white} barStyle={"dark-content"} />;
  }
};

export default class DrawerContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logoutModal: false,
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.mainContainer} edges={["top"]}>
        <MyStatusBar />

        {/* <StatusBar backgroundColor={GColors.themColor} barStyle={"light-content"} />
        {/* <Animated.View View style={styles.mainContainer}> */}
        <View style={styles.container}>
          {/* user View */}
          <View style={styles.userView}>
            {/* <View style={styles.userImgView}>
              <Image source={images.uesrTempImg2} style={styles.userImg} resizeMode="cover" />
            </View> */}
            <Image source={images.uesrTempImg2} />
            <View style={styles.userTextView}>
              <Text style={styles.userTitle} numberOfLines={1}>
                {"John Doe"}
              </Text>
              <Text style={styles.usserSubTitle} numberOfLines={1}>
                {"#123456"}
              </Text>
            </View>
          </View>
          {/* Button View */}
          <View style={styles.middleView}>
            <GTitleButton title={"Account Details"} source={icons.userWhiteIcn} onPress={() => this.props.navigation.navigate("AccountDetailsStack")} />
            <GTitleButton title={"My Tasks"} source={icons.shoppingBagIcn} onPress={() => this.props.navigation.navigate("MyTaskStack")} />
            <GTitleButton title={"Notifications"} source={icons.ballIcn} onPress={() => this.props.navigation.navigate("Notifications")} />
            <GTitleButton title={"Manage Vehicle"} source={icons.truckIcn} onPress={() => this.props.navigation.navigate("ManageVehicle")} />
            <GTitleButton title={"My Earnings"} source={icons.dollarIcn} onPress={() => this.props.navigation.navigate("MyEarning")} />
            <GTitleButton title={"Share App"} source={icons.shareIcn} onPress={() => this.props.navigation.navigate("ShareScreen")} />
            <GTitleButton title={"Rate the App"} source={icons.starIcn} onPress={() => this.props.navigation.navigate("RateApp")} />
            <GTitleButton title={"Help & FAQ"} source={icons.helpTriangle} onPress={() => this.props.navigation.navigate("FAQ")} />
            <GTitleButton title={"About Us"} source={icons.aboutUsIcn} onPress={() => this.props.navigation.navigate("AboutUs")} />
            <GTitleButton title={"Terms & Privacy Policy"} source={icons.fileIcn} onPress={() => this.props.navigation.navigate("PrivacyPolicy")} />
            <GTitleButton title={"Contact Us"} source={icons.phonewhiteIcn} onPress={() => this.props.navigation.navigate("ContactUs")} />
          </View>
          <View style={{ flex: 1 }} />
          <GTitleButton title={"Logout"} source={icons.logoutIcn} btnStyle={styles.logoutBtn} onPress={() => this.setState({ logoutModal: true })} />
        </View>
        <GModal source={images.deleteImg} title={"Are you sure you want to\nlog out?"} visible={this.state.logoutModal}>
          <View style={styles.modalBtnView}>
            <GButton btnStyle={{ width: wp(35) }} text={"Cancel"} lightBtn onPress={() => this.setState({ logoutModal: false })} />
            <GButton
              btnStyle={{ width: wp(35) }}
              text={"Logout"}
              onPress={() =>
                this.setState({ logoutModal: false }, () => {
                  this.props.navigation.navigate("StartScreen");
                })
              }
            />
          </View>
        </GModal>
        {/* </Animated.View> */}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: GColors.themColor,
  },
  container: {
    marginStart: wp(4),
    flex: 1,
  },
  userImgView: {
    width: wp(18),
    aspectRatio: 1,
    borderRadius: wp(3),
  },
  userImg: {
    height: "100%",
    width: "100%",
    borderRadius: wp(3),
  },
  userView: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: hp(3),
  },
  userTextView: {
    marginHorizontal: wp(2),
    flex: 1,
  },
  userTitle: {
    color: GColors.white,
    fontFamily: commonFont.RBold,
    fontSize: commonFont.fs18,
  },
  usserSubTitle: {
    color: GColors.white,
    fontFamily: commonFont.RRegular,
    fontSize: commonFont.fs13,
    marginTop: hp(1),
  },
  middleView: {
    marginTop: hp(5),
  },
  btnView: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: hp(1.5),
  },
  textView: {
    marginStart: wp(3),
    color: GColors.white,
    fontFamily: commonFont.RRegular,
    fontSize: commonFont.fs16,
  },
  imgView: {
    width: wp(8),
    aspectRatio: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logoutBtn: {
    marginBottom: hp(5),
    marginStart: wp(2),
  },
  modalBtnView: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: hp(3),
  },
});

const GTitleButton = ({ title, source, onPress, btnStyle }) => {
  return (
    <TouchableOpacity style={[styles.btnView, btnStyle]} onPress={onPress}>
      <View style={styles.imgView}>
        <Image source={source} />
      </View>
      <Text style={styles.textView}>{title}</Text>
    </TouchableOpacity>
  );
};
