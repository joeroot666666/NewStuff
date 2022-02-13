import React, { Component } from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import { commonFont, GColors, hp, icons, wp } from "../../common";
import { GButton, GHeader, GModal, GSelectionModal, GSubTitle, GTextInput, GTitle } from "../../common/GComponents";
import { GSelectionItem } from "../../common/GComponents/GSelectionModal";
import { accountNumberRegx, nameRegx, phoneRegx, ifscCodeRegx } from "../../common/GConst";
import { showMsg } from "../../common/GFunction";
import countries from "../../assets/countries.json";
export default class DriverBankDetail extends Component {
  constructor() {
    super();
    this.state = {
      sucessModal: false,
      code: "",
      countryData: countries,
      countryModal: "",
      searchCountryCode: "",
      holderName: "",
      bankName: "",
      accountNumber: "",
      IFSCCode: "",
      mobile: "",
    };
  }
  validation = () => {
    if (this.state.holderName.trim() == "") {
      showMsg("Please enter account holder name");
      return false;
    } else if (!nameRegx.test(this.state.holderName)) {
      showMsg("Please enter vaild account holder name");
      return false;
    } else if (this.state.bankName.trim() == "") {
      showMsg("Please enter bank mame");
      return false;
    } else if (!nameRegx.test(this.state.bankName)) {
      showMsg("Please enter vaild bank name");
      return false;
    } else if (this.state.accountNumber.trim() == "") {
      showMsg("Please enter account number");
      return false;
    } else if (!accountNumberRegx.test(this.state.accountNumber)) {
      showMsg("Please enter vaild account number");
      return false;
    } else if (this.state.IFSCCode.trim() == "") {
      showMsg("Please enter IFSC Code");
      return false;
    } else if (!ifscCodeRegx.test(this.state.IFSCCode)) {
      showMsg("Please enter vaild IFSC code ");
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
    }
    return true;
  };
  render() {
    return (
      <View style={styles.mainContainer}>
        <GHeader onPress={() => this.props.navigation.goBack()} />
        <ScrollView contentContainerStyle={styles.container} bounces={false} showsVerticalScrollIndicator={false}>
          <GTitle headerText={"Add Bank Details"} textStyle={{ fontSize: commonFont.fs27, marginTop: hp(4) }} />
          <GSubTitle headerText={"Lorem ipsum dummy text"} textStyle={{ fontSize: commonFont.fs17 }} />
          <View style={{ marginTop: hp(1) }}>
            <GTextInput
              title={"Account Holder Name"}
              placeholder={"Enter Account Holder Name"}
              value={this.state.holderName}
              onChangeText={(text) => this.setState({ holderName: text })}
              returnKeyType={"next"}
              onSubmitEditing={() => this.bankname.focus()}
            />
            <GTextInput
              title={"Bank Name"}
              placeholder={"Enter Bank Name"}
              value={this.state.bankName}
              onChangeText={(text) => this.setState({ bankName: text })}
              returnKeyType={"next"}
              onSubmitEditing={() => this.accountNumber.focus()}
              refInput={(input) => {
                this.bankname = input;
              }}
            />
            <GTextInput
              title={"Account Number"}
              placeholder={"Enter Account Number"}
              value={this.state.accountNumber}
              onChangeText={(text) => this.setState({ accountNumber: text })}
              returnKeyType={"next"}
              onSubmitEditing={() => this.IFSCCode.focus()}
              refInput={(input) => {
                this.accountNumber = input;
              }}
              keyboardType={"phone-pad"}
            />
            <GTextInput
              title={"IFSC Code"}
              placeholder={"Enter IFSC Code"}
              value={this.state.IFSCCode}
              onChangeText={(text) => this.setState({ IFSCCode: text })}
              returnKeyType={"next"}
              onSubmitEditing={() => this.mobile.focus()}
              refInput={(input) => {
                this.IFSCCode = input;
              }}
              autoCapitalize="characters"
            />
            {/* <GTextInput
              title={"Mobile"}
              placeholder={"Enter Mobile"}
              value={this.state.mobile}
              keyboardType={"phone-pad"}
              onChangeText={(text) => this.setState({ mobile: text })}
              refInput={(input) => {
                this.mobile = input;
              }}
            /> */}
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <GTextInput
                title={"Mobile "}
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
              />
            </View>
            <GButton
              text={"Submit"}
              btnStyle={styles.btn}
              onPress={() => {
                if (this.validation()) {
                  this.setState({ sucessModal: true });
                }
              }}
            />
          </View>
        </ScrollView>
        <GModal
          visible={this.state.sucessModal}
          title={"Your bank account added \nsuccessfully"}
          onPress={() =>
            this.setState({ sucessModal: false }, () => {
              this.props.navigation.navigate("DrawerNavigator");
            })
          }
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    marginHorizontal: wp(8),
    // marginTop: hp(4),
    paddingBottom: hp(2),
  },
  btn: {
    marginTop: hp(6),
    width: wp(60),
    marginBottom: hp(2),
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
