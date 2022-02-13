import React from "react";
import { Image, Modal, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Text as RNEText, Tooltip } from "react-native-elements";
import ImagePicker from "react-native-image-crop-picker";
import { commonFont, GColors, hp, icons, width, wp } from "..";
import { cameraPermission, cameraPermissionMsg, galleryPermission, galleryPermissionMsg } from "../GConst";
import { CheckPermission } from "../GFunction";
export const ImagePickerType = {
  CAMERA: 1,
  GALLERY: 2,
};
const showImagePicker = (type) => {
  switch (type) {
    case ImagePickerType.CAMERA:
      return ImagePicker.openCamera({
        mediaType: "photo",
      });
    case ImagePickerType.GALLERY:
      return ImagePicker.openPicker({
        mediaType: "photo",
      });
  }
};

const selectImage = (type, callback) => {
  showImagePicker(type)
    .then((res) => callback({ ...res, url: res.path }, null))
    .catch((e) => {
      callback(null, e);
    });
};

const GalleryText = ({ title, img, onPress, setRef, textTooltip, height }) => {
  return (
    <View style={styles.gaellryTextView}>
      <Text style={styles.gaellryText}>{title}</Text>
      {img && (
        <Tooltip
          ref={setRef}
          onOpen={() => StatusBar.setBackgroundColor("rgba(60,60,60,0.5)")}
          onClose={() => StatusBar.setBackgroundColor(GColors.white)}
          backgroundColor={GColors.white}
          height={height}
          overlayColor={"rgba(60,60,60,0.5)"}
          popover={<RNEText>{textTooltip}</RNEText>}>
          <TouchableOpacity
            onPress={() => {
              onPress();
            }}>
            <Image source={icons.questionCircle} />
          </TouchableOpacity>
        </Tooltip>
      )}
    </View>
  );
};

const GImagePicker = ({ onPress, cancelBtn, visible, onSelectImage }) => {
  return (
    <View>
      {onPress && (
        <View>
          <TouchableOpacity style={styles.gaellryBtn} onPress={onPress}>
            <Image source={icons.GalleryIcn} />
          </TouchableOpacity>
        </View>
      )}
      <Modal animationType="slide" transparent={true} visible={visible} statusBarTranslucent={true}>
        <View style={styles.modalView}>
          <View style={styles.modalSubView}>
            <Text style={styles.modalTitle}>{"Select Type"}</Text>
            <View style={{ height: StyleSheet.hairlineWidth, backgroundColor: "black" }} />

            <Text
              style={styles.modalText}
              onPress={() => {
                CheckPermission(cancelBtn, cameraPermission, cameraPermissionMsg);
                selectImage(ImagePickerType.CAMERA, onSelectImage);
              }}>
              {"Take Photo..."}
            </Text>
            <View style={{ height: StyleSheet.hairlineWidth, backgroundColor: "black" }} />

            <Text
              style={styles.modalText}
              onPress={() => {
                CheckPermission(cancelBtn, galleryPermission, galleryPermissionMsg);
                selectImage(ImagePickerType.GALLERY, onSelectImage);
              }}>
              {"Choose from Gallery..."}
            </Text>
          </View>
          <TouchableOpacity style={styles.modalCancelBtn} onPress={cancelBtn}>
            <Text style={styles.modalCancelText}>{"Cancel"}</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  gaellryTextView: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: hp(2),
  },
  gaellryText: {
    color: GColors.subTitle,
    fontFamily: commonFont.RRegular,
    fontSize: commonFont.fs14,
    marginEnd: wp(2),
  },
  gaellryBtn: {
    backgroundColor: GColors.white,
    width: wp(18),
    aspectRatio: 1,
    marginTop: hp(2),
    borderRadius: wp(2),
    shadowOpacity: 0.3,
    elevation: 5,
    shadowOffset: { height: 0, width: 0 },
    alignItems: "center",
    justifyContent: "center",
    marginEnd: wp(2),
  },
  modalView: {
    backgroundColor: "rgba(60,60,60,0.5)",
    justifyContent: "flex-end",
    alignItems: "center",
    flex: 1,
  },
  modalSubView: {
    width,
    backgroundColor: GColors.white,
    borderRadius: wp(2),
  },
  modalTitle: {
    marginVertical: hp(3),
    textAlign: "center",
    fontSize: commonFont.fs18,
    fontFamily: commonFont.RMedium,
  },
  modalText: {
    paddingVertical: hp(2),
    textAlign: "center",
    fontSize: commonFont.fs15,
    fontFamily: commonFont.RRegular,
  },
  modalCancelBtn: {
    width,
    backgroundColor: "white",
    marginTop: hp(1),
    borderRadius: wp(2),
    marginBottom: 2,
  },
  modalCancelText: {
    marginVertical: hp(2),
    textAlign: "center",
    fontSize: commonFont.fs15,
    fontFamily: commonFont.RMedium,
  },
  content: {
    paddingHorizontal: wp(3),
    backgroundColor: GColors.white,
    borderRadius: wp(2),
    paddingVertical: hp(2),
  },
  arrow: {
    borderTopColor: GColors.white,
  },
  background: {
    backgroundColor: "rgba(10, 10, 10, 0.5)",
  },
});
export { GImagePicker, GalleryText };
export default GImagePicker;
