import React, { Component } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { commonFont, hp, icons, wp } from "../../common";
import { GHeader, GSubTitle, GTextInput, GTitle } from "../../common/GComponents";
import { mailRegx } from "../../common/GConst";
import { showMsg } from "../../common/GFunction";

export default class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
    };
  }
  validation = () => {
    if (this.state.email.trim() == "") {
      showMsg("Please enter email");
      return false;
    } else if (!mailRegx.test(this.state.email)) {
      showMsg("Please enter vaild email");
      return false;
    }
    return true;
  };
  render() {
    return (
      <View style={styles.mainContainer}>
        <GHeader onPress={() => this.props.navigation.goBack()} />
        <ScrollView style={styles.container} bounces={false} showsVerticalScrollIndicator={false}>
          <GTitle headerText={"Forgot Password"} textStyle={{ fontSize: commonFont.fs27 }} />
          <GSubTitle headerText={"Please enter your registered email address."} textStyle={{ fontSize: commonFont.fs17 }} />

          <GTextInput
            title={"E-mail"}
            placeholder={"Enter E-mail"}
            source={icons.mailIcn}
            TextInputViewStyle={{ marginTop: hp(3) }}
            value={this.state.email}
            onChangeText={(text) => this.setState({ email: text })}
            keyboardType={"email-address"}
            autoCapitalize="none"
          />
          <GButton
            text={"Send Link"}
            btnStyle={styles.btn}
            onPress={() => {
              if (this.validation()) {
                this.props.navigation.navigate("LogIn");
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
    marginTop: hp(15),
  },
  btn: { marginTop: hp(7), width: wp(60) },
});
