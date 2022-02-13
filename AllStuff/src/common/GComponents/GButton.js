import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {commonFont, Gcolor, hp, wp} from '../';
import {Button} from 'native-base';

const GButton = ({text, btnStyle, textStyle, onPress}) => {
  return (
    <Button style={[styles.btn, btnStyle]} onPress={onPress}>
      <Text style={[styles.btntext, textStyle]}>{text}</Text>
    </Button>
  );
};

const styles = StyleSheet.create({
  btn: {
    marginTop: hp(3.5),
    backgroundColor: Gcolor.btncolor,
    borderRadius: 8,
    width: wp(78),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    height: hp(6.4),
  },
  btntext: {
    color: Gcolor.white,
    fontSize: commonFont.fs14,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: commonFont.LRegular,
  },
});

export default GButton;
