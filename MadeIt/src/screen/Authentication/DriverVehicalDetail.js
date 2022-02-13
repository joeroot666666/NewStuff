import React, { Component } from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import { commonFont, GColors, hp, wp } from "../../common";
import { GButton, GHeader, GImagePicker, GSelectionModal, GShowsHorizontalImg, GSubTitle, GTextInput, GTitle } from "../../common/GComponents";
import { GalleryText } from "../../common/GComponents/GImagePicker";
import { GSelectionItem } from "../../common/GComponents/GSelectionModal";
import { vehicalNumberRegx } from "../../common/GConst";
import { showMsg } from "../../common/GFunction";

export default class DriverVehicalDetail extends Component {
  constructor(props) {
    super(props);
    this.tooltip_upload_id_proof = null;
    this.tooltip_upload_driving_license = null;
    this.state = {
      galleryModal: false,
      idImgData: [],

      licenseImgData: [],
      licenseModal: false,

      vehicleImgData: [],
      vehicleModal: false,

      vehicalTypeData: ["Two wheeler", "Four wheeler"],
      vehicalTypeModal: false,
      vehicalType: "",

      vehicalNumber: "",
      vehicalModal: "",
    };
  }
  validation = () => {
    if (this.state.vehicalType == "") {
      showMsg("Please select vehicle type");
      return false;
    } else if (this.state.vehicalNumber.trim() == "") {
      showMsg("Please enter vehicle number");
      return false;
    } else if (!vehicalNumberRegx.test(this.state.vehicalNumber)) {
      showMsg("Please enter vaild vehicle number");
      return false;
    } else if (this.state.vehicalModal.trim() == "") {
      showMsg("Please enter vehicle model");
      return false;
    }
    return true;
  };
  renderidImgData = ({ item, index }) => {
    return (
      <GShowsHorizontalImg
        source={{ uri: item.image_url }}
        onPress={() => {
          let index = this.state.idImgData.indexOf(item);
          this.state.idImgData.splice(index, 1);
          this.setState({ idImgData: this.state.idImgData });
        }}
      />
    );
  };
  renderlicenseImgData = ({ item, index }) => {
    return (
      <GShowsHorizontalImg
        source={{ uri: item.image_url }}
        onPress={() => {
          let index = this.state.licenseImgData.indexOf(item);
          this.state.licenseImgData.splice(index, 1);
          this.setState({ licenseImgData: this.state.licenseImgData });
        }}
      />
    );
  };
  renderVehicleImgData = ({ item, index }) => {
    return (
      <GShowsHorizontalImg
        source={{ uri: item.image_url }}
        onPress={() => {
          let index = this.state.vehicleImgData.indexOf(item);
          this.state.vehicleImgData.splice(index, 1);
          this.setState({ vehicleImgData: this.state.vehicleImgData });
        }}
      />
    );
  };
  onSelectImageID = (res, err) => {
    if (err) {
      this.setState({ galleryModal: false });
      return;
    }
    this.setState({ galleryModal: false }, () => {
      let addImages = this.state.idImgData;
      let data = {
        image_url: res.url,
      };
      addImages.push(data);
      this.setState({ idImgData: addImages });
    });
  };
  onSelectImageLicens = (res, err) => {
    if (err) {
      this.setState({ licenseModal: false });
      return;
    }
    this.setState({ licenseModal: false }, () => {
      let addImages = this.state.licenseImgData;
      let data = {
        image_url: res.url,
      };
      addImages.push(data);
      this.setState({ licenseImgData: addImages });
    });
  };
  onSelectImageVehicle = (res, err) => {
    if (err) {
      this.setState({ vehicleModal: false });
      return;
    }
    this.setState({ vehicleModal: false }, () => {
      let addImages = this.state.vehicleImgData;
      let data = {
        image_url: res.url,
      };
      addImages.push(data);
      this.setState({ vehicleImgData: addImages });
    });
  };
  render() {
    return (
      <View style={styles.mainContainer}>
        <GHeader onPress={() => this.props.navigation.goBack()} />
        <ScrollView contentContainerStyle={styles.container} bounces={false} showsVerticalScrollIndicator={false}>
          {/* Title View */}
          <View style={styles.titleView}>
            <GTitle headerText={"Become A Driver"} textStyle={{ fontSize: commonFont.fs27 }} />
            <GSubTitle headerText={"Just one step to get started."} textStyle={{ fontSize: commonFont.fs17 }} />
          </View>
          {/* Upload ID proof */}
          <View style={styles.selectImgView}>
            <GalleryText
              setRef={(r) => (this.tooltip_upload_id_proof = r)}
              onPress={() => {
                if (this.tooltip_upload_id_proof !== null) {
                  this.tooltip_upload_id_proof.toggleTooltip();
                }
              }}
              title={"Upload Id Proof"}
              img
              height={hp(12)}
              textTooltip={"Upload Your\nAadhaar Card \nAnd Pan Card"}
            />

            <View style={styles.imgView}>
              <GImagePicker
                onPress={() => this.setState({ galleryModal: true })}
                cancelBtn={() => this.setState({ galleryModal: false })}
                visible={this.state.galleryModal}
                onSelectImage={this.onSelectImageID}
              />
              <FlatList
                data={this.state.idImgData}
                keyExtractor={(_, index) => index.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={this.renderidImgData}
              />
            </View>
          </View>

          {/* Upload driving license */}
          <View style={styles.selectImgView}>
            <GalleryText
              setRef={(r) => (this.tooltip_upload_driving_license = r)}
              onPress={() => {
                if (this.tooltip_upload_driving_license !== null) {
                  this.tooltip_upload_driving_license.toggleTooltip();
                }
              }}
              title={"Upload Driving License"}
              img
              height={hp(8)}
              textTooltip={"Upload Your \nDriving License"}
            />
            <View style={styles.imgView}>
              <GImagePicker
                onPress={() => this.setState({ licenseModal: true })}
                cancelBtn={() => this.setState({ licenseModal: false })}
                visible={this.state.licenseModal}
                onSelectImage={this.onSelectImageLicens}
              />
              <FlatList
                data={this.state.licenseImgData}
                keyExtractor={(_, index) => index.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={this.renderlicenseImgData}
              />
            </View>
          </View>
          {/*Add vehicle details  */}
          <GTitle headerText={"Add Vehicle Details"} textStyle={{ fontSize: commonFont.fs16, marginTop: hp(3) }} />

          <View style={{ marginEnd: wp(7) }}>
            <GTextInput
              title={"Vehicle Type"}
              placeholder={"Select Vehicle Type"}
              editable={false}
              onPressRight={() => this.setState({ vehicalTypeModal: true })}
              onPress={() => this.setState({ vehicalTypeModal: true })}
              value={this.state.vehicalType}
            />
            <GTextInput
              title={"Vehicle Number"}
              placeholder={"Enter Vehicle Number"}
              value={this.state.vehicalNumber}
              onChangeText={(text) => this.setState({ vehicalNumber: text })}
              returnKeyType={"next"}
              onSubmitEditing={() => this.modal.focus()}
            />
            <GTextInput
              title={"Vehicle Model"}
              placeholder={"Enter Vehicle Model"}
              value={this.state.vehicalModal}
              onChangeText={(text) => this.setState({ vehicalModal: text })}
              refInput={(input) => {
                this.modal = input;
              }}
            />
          </View>
          {/* Upload vehicle pictures */}
          <View style={styles.selectImgView}>
            <GalleryText title={"Upload Vehicle Pictures"} />
            <View style={styles.imgView}>
              <GImagePicker
                onPress={() => this.setState({ vehicleModal: true })}
                cancelBtn={() => this.setState({ vehicleModal: false })}
                visible={this.state.vehicleModal}
                onSelectImage={this.onSelectImageVehicle}
              />
              <FlatList
                data={this.state.vehicleImgData}
                keyExtractor={(_, index) => index.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={this.renderVehicleImgData}
              />
            </View>
          </View>

          <Text style={styles.vehicleText} onPress={() => alert("Under Developing")}>
            {"+ Add Vehicle"}
          </Text>
          <GButton
            btnStyle={styles.btn}
            text={"Next"}
            onPress={() => {
              if (this.validation()) {
                this.props.navigation.navigate("DriverPersonalDetail");
              }
            }}
          />
        </ScrollView>
        <GSelectionModal
          visible={this.state.vehicalTypeModal}
          data={this.state.vehicalTypeData}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item, index }) => {
            return <GSelectionItem onPress={() => this.setState({ vehicalType: item, vehicalTypeModal: false })} text={item} />;
          }}
          title={"Select Vehicle type"}
          onPressCancel={() => this.setState({ vehicalTypeModal: false })}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: GColors.white,
  },
  container: {
    marginStart: wp(8),
    marginEnd: wp(1),
  },
  titleView: {
    marginTop: hp(4),
  },
  selectImgView: {
    marginTop: hp(1),
  },
  imgView: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: wp(1),
    paddingVertical: hp(1),
  },
  vehicleText: {
    color: GColors.themColor,
    fontSize: commonFont.fs15,
    fontFamily: commonFont.RRegular,
    marginTop: hp(2),
  },
  btn: {
    width: wp(60),
    marginVertical: hp(5),
    marginEnd: wp(7),
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
});
