import React, {useState} from 'react';
import {View, Text, ScrollView, Image, StyleSheet} from 'react-native';
import {images, Gcolor, icons, commonFont, hp, wp} from '../../common';
import {GButton, GTextInput} from '../../common/GComponents';

const SuccessfulPasswordReset = props => {
  return (
    <ScrollView style={{backgroundColor: Gcolor.white}}>
      <View style={{backgroundColor: Gcolor.lightblue}}>
        <View
          style={{
            height: hp(52),
          }}>
          <Image style={{alignSelf: 'center', top: 140}} source={images.Logo} />
        </View>

        <View style={styles.bodycontent}>
          <Image
            style={{marginTop: hp(3.3), alignSelf: 'center'}}
            source={icons.CheckMark}
          />
          <Text style={styles.title}>Successful Password Reset</Text>
          <Text style={styles.desc}>
            You can now use your new password to log in into your account
          </Text>

          <GButton
            text={'Login'}
            onPress={() => props.navigation.navigate('Signin')}
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
    fontWeight: '400',
    fontFamily: commonFont.LRegular,
  },
  bodycontent: {
    backgroundColor: Gcolor.white,
    width: '100%',
    height: hp(41),
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
  },
  desc: {
    fontSize: commonFont.fs14,
    color: Gcolor.longtitle,
    marginTop: hp(1),
    alignSelf: 'center',
    fontFamily: commonFont.LRegular,
    width: wp(86),
    height: hp(5),
  },
  title: {
    fontSize: commonFont.fs16,
    fontWeight: 'bold',
    color: Gcolor.title,
    marginRight: wp(2.5),
    marginTop: hp(3.3),
    alignSelf: 'center',
    fontFamily: commonFont.LRegular,
  },
});

export default SuccessfulPasswordReset;
