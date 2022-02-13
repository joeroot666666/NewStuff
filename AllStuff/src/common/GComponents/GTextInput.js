import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {Gcolor, wp, hp} from '../';

const GTextInput = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  keyboardType,
  placeholderTextColor,
  inputStyle,
}) => {
  return (
    <View>
      <TextInput
        placeholder={placeholder}
        style={[styles.input, inputStyle]}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        placeholderTextColor={placeholderTextColor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: wp(78),
    height: hp(6.5),
    borderRadius: 6,
    borderWidth: 1,
    marginTop: hp(1),
    borderColor: Gcolor.borderColors,
    alignSelf: 'center',
    paddingLeft: wp(5),
  },
});

export default GTextInput;
