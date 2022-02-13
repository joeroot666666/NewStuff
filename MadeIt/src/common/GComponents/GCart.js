import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { commonFont, GColors, hp, icons, images, wp } from "../../common";
import { GButton } from "../../common/GComponents";

export default GCart = ({
  opacity,
  itemImg,
  itemText,
  price,
  earning,
  pickupLocation,
  deliveryLocation,
  deliveryImg,
  pickupImg,
  qty,
  acceptOnPress,
  rejectOnPress,
  btnView,
  children,
  onPress,
  cartViewStyle,
  onPressMsg,
  onPressCall,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.cartView, opacity && { shadowOpacity: 0.2, elevation: 3, shadowOffset: { height: 0, width: 0 } }, cartViewStyle]}
      onPress={onPress}>
      {itemImg && (
        <View style={{ flexDirection: "row" }}>
          <View style={styles.cartImgView}>
            <Image source={itemImg || images.recipeImg} style={styles.cartImg} />
          </View>
          <View style={{ flex: 1 }}>
            <Text numberOfLines={1} style={styles.cartTitle}>
              {itemText || "Item Name"}
            </Text>
            <Text numberOfLines={1} style={[styles.cartSubTitle, { fontSize: commonFont.fs11 }]}>
              {"Qty.:" + qty}
            </Text>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <Text style={[styles.cartTitle, { width: wp(20), fontSize: commonFont.fs13 }]} numberOfLines={1}>
                {price || "00"}
              </Text>
              {earning && (
                <Text numberOfLines={1} style={[styles.cartTitle, { width: wp(42), textAlign: "right", fontFamily: commonFont.RRegular }]}>
                  {"Total Earning: " + earning}
                </Text>
              )}
            </View>
          </View>
        </View>
      )}

      <GLocation
        source={deliveryImg || images.uesrTempImg}
        text={deliveryLocation}
        title={"Pickup Location"}
        onPressMsg={onPressMsg}
        onPressCall={onPressCall}
      />
      <GLocation
        source={pickupImg || images.recipeRoundImg}
        text={pickupLocation}
        title={"Delivery Location"}
        onPressMsg={onPressMsg}
        onPressCall={onPressCall}
      />

      {btnView && (
        <View style={styles.btnView}>
          <GButton btnStyle={{ width: wp(40) }} text={"Reject"} lightBtn onPress={rejectOnPress} />
          <GButton btnStyle={{ width: wp(40) }} text={"Accept"} onPress={acceptOnPress} />
        </View>
      )}
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cartView: {
    backgroundColor: GColors.white,
    marginTop: hp(3),
    borderTopStartRadius: wp(2),
    borderRadius: wp(2),
    paddingVertical: hp(2),
    paddingHorizontal: wp(3),
  },
  cartImgView: {
    width: wp(17),
    aspectRatio: 1,
    borderRadius: wp(2),
  },
  cartImg: {
    height: "100%",
    width: "100%",
    borderRadius: wp(2),
  },
  cartTitle: {
    color: GColors.title,
    fontFamily: commonFont.RMedium,
    fontSize: commonFont.fs14,
    marginStart: wp(1),

    marginBottom: hp(0.7),
  },
  cartSubTitle: {
    color: GColors.subTitle,
    fontFamily: commonFont.RRegular,
    fontSize: commonFont.fs13,
    marginStart: wp(1),

    marginBottom: hp(0.7),
    width: wp(55),
  },
  cartSecondView: {
    marginTop: hp(2),
    flexDirection: "row",
  },
  cartSecondImgView: {
    width: wp(10),
    aspectRatio: 1,
    borderRadius: wp(5),
  },
  cartSecondViewImg: {
    height: "100%",
    width: "100%",
    borderRadius: wp(5),
  },
  btnView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: hp(1),
  },
  callContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    justifyContent: "space-between",
  },
  callView: {
    width: wp(9),
    aspectRatio: 1,
    padding: hp(1.2),
    borderRadius: wp(10),
    alignItems: "center",
    backgroundColor: GColors.white,
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0.3,
    elevation: 5,
    justifyContent: "center",
  },
  callImg: {
    height: "100%",
    width: "100%",
  },
});

const GLocation = ({ source, text, title, onPressMsg, onPressCall }) => {
  return (
    <View style={styles.cartSecondView}>
      <View style={styles.cartSecondImgView}>
        <Image source={source} style={styles.cartSecondViewImg} />
      </View>

      <View style={styles.callContainer}>
        <View>
          <Text style={styles.cartTitle}>{title}</Text>
          <Text style={styles.cartSubTitle}>{text}</Text>
        </View>
        {onPressCall && (
          <TouchableOpacity style={styles.callView} onPress={onPressCall}>
            <Image source={icons.callIcn} style={styles.callImg} />
          </TouchableOpacity>
        )}
        {onPressMsg && (
          <TouchableOpacity style={[styles.callView, { marginStart: wp(2) }]} onPress={onPressMsg}>
            <Image source={icons.meassgeIcn} style={styles.callImg} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
