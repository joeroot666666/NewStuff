import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, Image, StyleSheet} from 'react-native';
import {images, Gcolor, commonFont, hp, wp} from '../../common';
import {GButton, GTextInput} from '../../common/GComponents';
import {showMsg} from '../../common/GFunction';

const ResetPassword = props => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');

  const Validations = () => {
    if (newPassword.trim() == '') {
      showMsg('Please Enter New Password');
      return false;
    } else if (newPassword.length < 8) {
      showMsg('New Password must be 8 characters or more');
      return false;
    } else if (confirmPass.trim() == '') {
      showMsg('Please Enter Confirm Password');
      return false;
    } else if (confirmPass.length < 8) {
      showMsg('Confirm Password must be 8 characters or more');
      return false;
    } else if (newPassword !== confirmPass) {
      showMsg('New Password & Confirm Password must be same');
      return false;
    }
    return true;
  };

  useEffect(() => {
    reRenderSomething = props.navigation.addListener('focus', async () => {
      setNewPassword('');
      setConfirmPass('');
    });
  }, []);

  return (
    <ScrollView style={{backgroundColor: Gcolor.white}}>
      <View style={{backgroundColor: Gcolor.lightblue}}>
        <View
          style={{
            height: hp(38),
            justifyContent: 'center',
          }}>
          <Image style={{alignSelf: 'center'}} source={images.Logo} />
        </View>
        <View style={styles.bodycontent}>
          <Text style={styles.title}>Reset Password</Text>
          <Text style={styles.desc}>Enter your details to proceed further</Text>
          <View style={{marginTop: hp(3.3)}}>
            <Text style={styles.inputtxt}>New Password</Text>
            <GTextInput
              onChangeText={setNewPassword}
              value={newPassword}
              placeholder="Enter Your Password"
              placeholderTextColor={Gcolor.placeholdertext}
              secureTextEntry={true}
            />
            <Text style={[styles.inputtxt, {marginTop: hp(2)}]}>
              Confirm Password
            </Text>
            <GTextInput
              onChangeText={setConfirmPass}
              value={confirmPass}
              placeholder="Enter Your Password"
              placeholderTextColor={Gcolor.placeholdertext}
              secureTextEntry={true}
            />
          </View>
          <GButton
            text={'Save'}
            onPress={() => {
              if (Validations()) {
                props.navigation.navigate('SuccessfulPasswordReset');
              }
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  inputtxt: {
    marginLeft: wp(13),
    color: Gcolor.inputTitle,
    fontSize: commonFont.fs14,
    fontFamily: commonFont.LRegular,
    fontWeight: '400',
  },
  bodycontent: {
    backgroundColor: Gcolor.white,
    width: '100%',
    height: hp(57),
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
  },
  desc: {
    fontSize: commonFont.fs14,
    color: Gcolor.longtitle,
    marginTop: hp(1),
    alignSelf: 'center',
    fontFamily: commonFont.LRegular,
  },
  title: {
    fontSize: commonFont.fs16,
    fontWeight: 'bold',
    color: Gcolor.title,
    marginRight: wp(2.5),
    fontFamily: commonFont.LRegular,
    alignContent: 'center',
    alignSelf: 'center',
    marginTop: hp(3.3),
  },
});

export default ResetPassword;
