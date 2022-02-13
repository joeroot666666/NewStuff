import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, Image, StyleSheet} from 'react-native';
import {images, Gcolor, commonFont, hp, wp} from '../../common';
import {GButton, GTextInput} from '../../common/GComponents';
import {showMsg} from '../../common/GFunction';
import {phoneNumberRegx} from '../../common/GValidations';

const LostPassword = props => {
  const [phno, setPhno] = useState('');

  const Validations = () => {
    if (phno.trim() == '') {
      showMsg('Please Enter Phone Number');
      return false;
    } else if (phno.length !== 10) {
      showMsg('Please Enter 10 digit number');
      return false;
    } else if (!phoneNumberRegx.test(phno)) {
      showMsg('Please enter vaild Phone Number');
      return false;
    }
    return true;
  };

  useEffect(() => {
    reRenderSomething = props.navigation.addListener('focus', async () => {
      setPhno('');
    });
  });

  return (
    <ScrollView style={{backgroundColor: Gcolor.white}}>
      <View style={{backgroundColor: Gcolor.lightblue}}>
        <View
          style={{
            height: 365,
          }}>
          <Image style={{alignSelf: 'center', top: 50}} source={images.Logo} />
        </View>
        <View style={styles.bodycontent}>
          <Text style={styles.title}>Lost your password?</Text>
          <Text style={styles.desc}>Enter your details to proceed further</Text>
          <View style={{marginTop: hp(3)}}>
            <Text style={styles.inputtxt}>Registered Mobile Number</Text>
            <GTextInput
              onChangeText={setPhno}
              value={phno}
              keyboardType="numeric"
              placeholder={'+91'}
            />
          </View>
          <GButton
            text={'Get Reset Link'}
            onPress={() => {
              if (Validations()) {
                props.navigation.navigate('ResetPassword');
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
  },
  title: {
    fontSize: commonFont.fs16,
    fontWeight: 'bold',
    color: Gcolor.title,
    marginRight: 10,
    marginTop: hp(3.5),
    alignSelf: 'center',
    fontFamily: commonFont.LRegular,
  },
});

export default LostPassword;
