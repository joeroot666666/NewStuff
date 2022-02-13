import React from "react";
import { FlatList, Image, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { GButton } from ".";
import { commonFont, GColors, hp, icons, wp } from "../";

export default GSelectionModal = ({
  visible,
  data,
  renderItem,
  keyExtractor,
  title,
  save,
  search,
  onChangeText,
  keyboardType,
  ListEmptyComponent,
  onPressCancel,
}) => {
  return (
    <Modal visible={visible} transparent={true} statusBarTranslucent={true}>
      <View style={styles.modalContainer}>
        <View style={{ marginHorizontal: wp(5), marginVertical: hp(15) }}>
          <TouchableOpacity style={styles.cancelBtn} onPress={onPressCancel}>
            <Image source={icons.cancelIcn} style={styles.cancelIcn} />
          </TouchableOpacity>

          <View style={styles.modalView}>
            {search ? (
              <View style={styles.searchView}>
                <Image source={icons.searchIcon} style={styles.searchIcon} />
                <TextInput
                  placeholder={title}
                  style={styles.textinput}
                  placeholderTextColor={GColors.grey}
                  onChangeText={onChangeText}
                  keyboardType={keyboardType}
                />
              </View>
            ) : (
              <Text style={styles.text}>{title}</Text>
            )}

            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={keyExtractor}
              showsVerticalScrollIndicator={false}
              ListEmptyComponent={ListEmptyComponent}
              bounces={false}
            />
            {save && <GButton text={"save"} />}
          </View>
        </View>
      </View>
    </Modal>
  );
};

export const GSelectionItem = ({ onPress, text }) => {
  return (
    <TouchableOpacity style={styles.itemBtn}>
      <Text onPress={onPress} style={styles.itemText}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "center",
  },
  modalView: {
    backgroundColor: GColors.white,
    borderRadius: wp(3),
    marginTop: hp(2),
    paddingVertical: hp(2),
    marginBottom: hp(15),
  },
  searchView: {
    flexDirection: "row",
    alignItems: "center",
  },
  searchIcon: {
    marginVertical: hp(2),
    marginHorizontal: wp(4),
  },
  textinput: {
    color: GColors.grey,
    flex: 1,
    marginEnd: wp(3),
    color: GColors.black,
    fontSize: commonFont.fs14,
    fontFamily: commonFont.RRegular,
  },
  text: {
    color: GColors.black,
    textAlign: "center",
    paddingBottom: hp(2),
    paddingTop: hp(1),
    fontSize: commonFont.fs14,
    fontFamily: commonFont.RMedium,
  },
  itemBtn: {
    borderTopWidth: wp(0.5),
    borderColor: GColors.grey,
  },
  itemText: {
    paddingVertical: hp(1),
    fontSize: 18,
    width: "100%",
    textAlign: "center",
  },
  cancelBtn: {
    backgroundColor: GColors.white,
    height: hp(4),
    aspectRatio: 1,
    borderRadius: wp(2),
    padding: hp(1.2),
    alignSelf: "flex-end",
    marginHorizontal: wp(2),
  },
  cancelIcn: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
    tintColor: GColors.black,
  },
});
