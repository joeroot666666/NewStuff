import React, { Component } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { commonFont, hp, icons, wp } from "../../common";
import { GButton, GHeader, GSubTitle, GTextInput, GTitle } from "../../common/GComponents";
import { mailRegx, passwordRegx } from "../../common/GConst";
import { showMsg } from "../../common/GFunction";

export default class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      pwd: "",
    };
  }
  validation = () => {
    if (this.state.email.trim() == "") {
      showMsg("Please enter email");
      return false;
    } else if (!mailRegx.test(this.state.email)) {
      showMsg("Please enter vaild email");
      return false;
    } else if (this.state.pwd.trim() == "") {
      showMsg("Please enter password");
      return false;
    }
    // else if (this.state.pwd.length < 8) {
    //   showMsg("Please enter at least 8 characters in password");
    //   return false;
    // } else if (!passwordRegx.test(this.state.pwd)) {
    //   showMsg("Please Use password a mix of letters (uppercase and lowercase), numbers, and symbols");
    //   return false;
    // }
    return true;
  };
  render() {
    return (
      <View style={styles.mainContainer}>
        <GHeader onPress={() => this.props.navigation.goBack()} />
        <ScrollView style={styles.container} bounces={false} showsVerticalScrollIndicator={false}>
          <GTitle headerText={"Log in"} textStyle={{ fontSize: commonFont.fs27 }} />
          <GSubTitle headerText={"Welcome back!"} textStyle={{ fontSize: commonFont.fs17 }} />
          <GTextInput
            title={"E-mail"}
            placeholder={"Enter E-mail"}
            source={icons.mailIcn}
            TextInputViewStyle={{ marginTop: hp(5) }}
            value={this.state.email}
            onChangeText={(text) => this.setState({ email: text })}
            returnKeyType={"next"}
            onSubmitEditing={() => this.pwd.focus()}
            keyboardType={"email-address"}
            autoCapitalize="none"
          />
          <GTextInput
            title={"Password"}
            secureTextEntry={true}
            placeholder={"Enter Password"}
            source={icons.pwdIcn}
            rightText={"Forgot?"}
            onPressRight={() => this.props.navigation.navigate("ForgotPassword")}
            value={this.state.pwd}
            onChangeText={(text) => this.setState({ pwd: text })}
            refInput={(input) => {
              this.pwd = input;
            }}
          />
          <GButton
            text={"Log In"}
            btnStyle={styles.btn}
            onPress={() => {
              if (this.validation()) {
                this.props.navigation.navigate("DrawerNavigator");
              }
            }}
          />
        </ScrollView>
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
    marginTop: hp(6),
  },
  btn: { marginTop: hp(7), width: wp(60) },
});
