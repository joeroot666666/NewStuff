import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {images, Gcolor, icons, commonFont, hp, wp} from '../../common';
import {GButton, GTextInput} from '../../common/GComponents';
import {showMsg} from '../../common/GFunction';
import {phoneNumberRegx, passwordRegx} from '../../common/GValidations';

const Signin = props => {
  const [phno, setPhno] = useState('');
  const [pass, setPass] = useState('');

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
    } else if (pass.trim() == '') {
      showMsg('Please Enter Password');
      return false;
    } else if (pass.length < 8) {
      showMsg('Password must be 8 characters or more');
      return false;
    }
    return true;
  };

  useEffect(() => {
    reRenderSomething = props.navigation.addListener('focus', async () => {
      setPhno('');
      setPass('');
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
          <View style={styles.content}>
            <Text style={styles.title}>Nice to meet you!</Text>
            <Image source={icons.WavingHand} />
          </View>
          <Text style={styles.desc}>
            Sign in to manage restaurants & customers
          </Text>
          <View style={{marginTop: hp(3.6)}}>
            <Text style={styles.inputtxt}>Mobile Number</Text>
            <GTextInput
              onChangeText={setPhno}
              value={phno}
              keyboardType="numeric"
              placeholder="+91"
            />
            <Text style={[styles.inputtxt, {marginTop: hp(2)}]}>Password</Text>
            <GTextInput
              onChangeText={setPass}
              value={pass}
              placeholder="Enter Your Password"
              placeholderTextColor={Gcolor.placeholdertext}
              secureTextEntry={true}
            />
          </View>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('LostPassword')}>
            <Text style={styles.forpass}>Forgot Password?</Text>
          </TouchableOpacity>
          <GButton
            text={'Sign In'}
            onPress={() => {
              if (Validations()) {
                props.navigation.navigate('MenuStack');
              }
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    alignContent: 'center',
    alignSelf: 'center',
    marginTop: hp(3.3),
  },
  inputtxt: {
    marginLeft: wp(13),
    color: Gcolor.inputTitle,
    fontSize: commonFont.fs14,
    fontFamily: commonFont.LRegular,
    fontWeight: '400',
  },
  forpass: {
    marginTop: hp(1),
    color: Gcolor.btncolor,
    fontSize: commonFont.fs14,
    fontWeight: '400',
    alignSelf: 'flex-end',
    marginRight: wp(8),
    fontFamily: commonFont.LRegular,
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
    marginRight: wp(2),
    fontFamily: commonFont.LRegular,
  },
});

export default Signin;
