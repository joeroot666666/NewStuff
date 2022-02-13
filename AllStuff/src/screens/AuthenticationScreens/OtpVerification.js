import React, {useState} from 'react';
import {View, Text, ScrollView, Image, StyleSheet} from 'react-native';
import {images, Gcolor, commonFont, hp, wp} from '../../common';
import {GButton} from '../../common/GComponents';
import OTPTextView from 'react-native-otp-textinput';

const OtpVerification = props => {
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
          <Text style={styles.title}>OTP Verification</Text>
          <Text style={styles.desc}>6 digit code sent to 9989788787</Text>
          <View
            style={{
              marginTop: hp(3.3),
              width: '80%',
              alignSelf: 'center',
              alignContent: 'center',
              alignItems: 'center',
            }}>
            <OTPTextView
              handleTextChange={e => {}}
              containerStyle={styles.textInputContainer}
              textInputStyle={styles.roundedTextInput}
              inputCount={6}
            />
          </View>
          <Text style={styles.timer}>(00:52)</Text>
          <View
            style={{
              flexDirection: 'row',
              marginTop: hp(3.4),
              alignSelf: 'center',
            }}>
            <Text
              style={{
                fontSize: commonFont.fs14,
                fontWeight: '400',
                color: '#565656',
                fontFamily: commonFont.LRegular,
              }}>
              Didn’t not received OTP?
            </Text>
            <Text
              style={{
                fontSize: commonFont.fs16,
                fontWeight: '400',
                color: '#85A5FF',
                marginLeft: wp(3.2),
                fontFamily: commonFont.LRegular,
              }}>
              Resend Now
            </Text>
          </View>
          <GButton
            text={'Submit'}
            onPress={() => props.navigation.navigate('Signin')}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  bodycontent: {
    backgroundColor: Gcolor.white,
    width: '100%',
    height: hp(51),
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
  },
  desc: {
    fontSize: commonFont.fs14,
    color: Gcolor.longtitle,
    marginTop: hp(1),
    alignSelf: 'center',
    height: hp(3),
    fontFamily: commonFont.LRegular,
  },
  title: {
    fontSize: commonFont.fs16,
    fontWeight: 'bold',
    color: Gcolor.title,
    alignContent: 'center',
    alignSelf: 'center',
    marginTop: hp(3.3),
    fontFamily: commonFont.LRegular,
  },

  roundedTextInput: {
    borderRadius: 8,
    borderWidth: 2,
  },
  timer: {
    marginTop: hp(3.3),
    fontSize: commonFont.fs20,
    color: Gcolor.inputTitle,
    height: hp(3.7),
    alignSelf: 'center',
    fontFamily: commonFont.LRegular,
  },
});

export default OtpVerification;
