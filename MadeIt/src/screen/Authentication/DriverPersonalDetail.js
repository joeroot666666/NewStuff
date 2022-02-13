import React, { Component } from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import { commonFont, GColors, hp, icons, wp } from "../../common";
import { GButton, GHeader, GSelectionModal, GSubTitle, GTextInput, GTitle } from "../../common/GComponents";
import { GSelectionItem } from "../../common/GComponents/GSelectionModal";
import { mailRegx, nameRegx, phoneRegx } from "../../common/GConst";
import { showMsg } from "../../common/GFunction";
import countries from "../../assets/countries.json";

export default class DriverPersonalDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genderData: ["Male", "Female"],
      genderModal: false,
      gender: "",

      name: "",
      email: "",
      mobile: "",
      address: "",

      code: "",
      countryData: countries,
      countryModal: "",
      searchCountryCode: "",
    };
  }
  validation = () => {
    if (this.state.name.trim() == "") {
      showMsg("Please enter name");
      return false;
    } else if (!nameRegx.test(this.state.name)) {
      showMsg("Please enter vaild name");
      return false;
    } else if (this.state.email.trim() == "") {
      showMsg("Please enter email");
      return false;
    } else if (!mailRegx.test(this.state.email)) {
      showMsg("Please enter vaild email");
      return false;
    } else if (this.state.code.trim() == "") {
      showMsg("Please select country code");
      return false;
    } else if (this.state.mobile.trim() == "") {
      showMsg("Please enter mobile number");
      return false;
    } else if (!phoneRegx.test(this.state.mobile)) {
      showMsg("Please enter vaild mobile number");
      return false;
    } else if (this.state.gender == "") {
      showMsg("Please select gender");
      return false;
    } else if (this.state.address.trim() == "") {
      showMsg("Please enter address");
      return false;
    }
    return true;
  };
  render() {
    return (
      <View style={styles.mainContainer}>
        <GHeader onPress={() => this.props.navigation.goBack()} />
        <ScrollView contentContainerStyle={styles.container} bounces={false} showsVerticalScrollIndicator={false}>
          <View style={styles.titleView}>
            <GTitle headerText={"Become A Driver"} textStyle={{ fontSize: commonFont.fs27 }} />
            <GSubTitle headerText={"Just one step to get started."} textStyle={{ fontSize: commonFont.fs17 }} />
          </View>
          <GTitle headerText={"Personal Details"} textStyle={styles.datilTiltle} />
          <GTextInput
            title={"Name"}
            placeholder={"Enter Name"}
            source={icons.userIcn}
            value={this.state.name}
            onChangeText={(text) => this.setState({ name: text })}
            returnKeyType={"next"}
            onSubmitEditing={() => this.email.focus()}
          />
          <GTextInput
            title={"E-mail"}
            placeholder={"Enter E-mail"}
            keyboardType={"email-address"}
            autoCapitalize="none"
            source={icons.mailIcn}
            value={this.state.email}
            onChangeText={(text) => this.setState({ email: text })}
            returnKeyType={"next"}
            onSubmitEditing={() => this.mobile.focus()}
            refInput={(input) => {
              this.email = input;
            }}
          />
          {/* <GTextInput
            title={"Mobile"}
            placeholder={"Enter Mobile"}
            keyboardType={"phone-pad"}
            source={icons.phoneIcn}
            value={this.state.mobile}
            onChangeText={(text) => this.setState({ mobile: text })}
            refInput={(input) => {
              this.mobile = input;
            }}
          /> */}
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <GTextInput
              title={"Mobile"}
              placeholder={"Code"}
              editable={false}
              onPress={() => this.setState({ countryModal: true })}
              onPressSource={() => this.setState({ countryModal: true })}
              source={icons.phoneIcn}
              value={this.state.code}
              TextInputViewStyle={{ width: wp(20), marginEnd: wp(2) }}
            />
            <GTextInput
              placeholder={"Enter Mobile Number"}
              keyboardType={"phone-pad"}
              value={this.state.mobile}
              onChangeText={(text) => this.setState({ mobile: text })}
              refInput={(input) => {
                this.mobile = input;
              }}
              TextInputViewStyle={{ flex: 6, marginTop: Platform.OS == "ios" ? hp(1) : 0 }}
              maxLength={13}
              returnKeyType={"next"}
              onSubmitEditing={() => this.address.focus()}
            />
          </View>
          <GTextInput
            title={"Gender"}
            placeholder={"Select Gender"}
            source={icons.userIcn}
            editable={false}
            onPressRight={() => this.setState({ genderModal: true })}
            onPress={() => this.setState({ genderModal: true })}
            value={this.state.gender}
          />
          <GTextInput
            title={"Address"}
            placeholder={"Enter Address"}
            source={icons.mapPinIcn}
            value={this.state.address}
            onChangeText={(text) => this.setState({ address: text })}
            refInput={(input) => {
              this.address = input;
            }}
          />
          <GButton
            text={"Submit"}
            btnStyle={{ width: wp(60), marginTop: hp(5), marginBottom: hp(2) }}
            onPress={() => {
              if (this.validation()) {
                this.props.navigation.navigate("DriverBankDetail");
              }
            }}
          />
          <GSelectionModal
            visible={this.state.genderModal}
            data={this.state.genderData}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item, index }) => {
              return <GSelectionItem onPress={() => this.setState({ gender: item, genderModal: false })} text={item} />;
            }}
            title={"Select Gender"}
            onPressCancel={() => this.setState({ genderModal: false })}
          />
          <GSelectionModal
            visible={this.state.countryModal}
            // data={this.state.countryData}
            data={this.state.countryData.filter(({ name }) =>
              this.state.searchCountryCode.length == 0 ? true : name.toLowerCase().includes(this.state.searchCountryCode.toLowerCase())
            )}
            keyExtractor={(_, index) => index.toString()}
            search
            onChangeText={(text) => this.setState({ searchCountryCode: text })}
            title={"Enter Country Name"}
            ListEmptyComponent={<Text style={styles.searchEmptyText}>{"No found Data"}</Text>}
            renderItem={({ item, index }) => {
              return <GSelectionItem onPress={() => this.setState({ code: item.dial, countryModal: false })} text={item.dial} />;
            }}
            onPressCancel={() => this.setState({ countryModal: false })}
          />
        </ScrollView>
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
    marginHorizontal: wp(8),
    paddingBottom: hp(2),
  },
  titleView: {
    marginTop: hp(4),
  },
  datilTiltle: {
    fontSize: commonFont.fs17,
    marginTop: hp(4),
  },
  searchEmptyText: {
    fontFamily: commonFont.RMedium,
    fontSize: commonFont.fs15,
    textAlign: "center",
    borderTopWidth: 1,
    boredrColor: GColors.boredrColor,
    paddingTop: hp(1),
  },
});
