import React from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { GSubTitle } from ".";
import { commonFont, GColors, hp, icons, wp } from "..";

export default GTextInput = ({
  title,
  placeholder,
  source,
  onPressSource,
  rightText,
  onPress,
  secureTextEntry,
  editable,
  value,
  onChangeText,
  multiline,
  textinputView,
  TextInputViewStyle,
  mainTextinputStyle,
  returnKeyType,
  onSubmitEditing,
  refInput,
  keyboardType,
  maxLength,
  onPressRight,
  textStyle,
  autoCapitalize,
}) => {
  // const [ph, setPH] = React.useState(placeholder);
  return (
    <View style={[styles.container, TextInputViewStyle]}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.8}
        style={[styles.textinputView, { alignItems: multiline ? "flex-start" : "center" }, textinputView]}>
        {source && (
          <TouchableOpacity onPress={onPressSource}>
            <Image source={source} style={{ marginEnd: wp(2) }} />
          </TouchableOpacity>
        )}
        <TextInput
          // ref={(r) => setRef(r)}
          // onFocus={() => setPH("")}
          // onBlur={() => setPH(placeholder)}
          placeholder={placeholder}
          style={[styles.textinput, mainTextinputStyle]}
          placeholderTextColor={GColors.placeholder}
          secureTextEntry={secureTextEntry}
          editable={editable}
          value={value}
          onChangeText={onChangeText}
          multiline={multiline}
          returnKeyType={returnKeyType}
          onSubmitEditing={onSubmitEditing}
          ref={refInput}
          keyboardType={keyboardType}
          maxLength={maxLength}
          onPressIn={onPress}
          autoCapitalize={autoCapitalize}
        />
        {onPressRight && (
          <TouchableOpacity style={styles.imgBtn} onPress={onPressRight}>
            {rightText ? <GSubTitle headerText={rightText} textStyle={{ color: GColors.themColor }} /> : <Image source={icons.downArrow} />}
          </TouchableOpacity>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: GColors.subTitle,
    fontSize: commonFont.fs15,
    fontFamily: commonFont.RRegular,
    marginTop: hp(4),
    marginBottom: hp(1),
  },
  textinputView: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: GColors.boredrColor,
    paddingVertical: hp(1),
  },
  textinput: {
    flex: 1,
    padding: 0,
    margin: 0,
    color: GColors.title,
    fontSize: commonFont.fs15,
    fontFamily: commonFont.RMedium,
    textAlignVertical: "top",
  },
  imgBtn: {
    width: wp(18),
    alignItems: "flex-end",
    marginStart: wp(1),
    paddingVertical: hp(1),
  },
});
