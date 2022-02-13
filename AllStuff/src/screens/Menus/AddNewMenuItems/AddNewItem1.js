import React, {useState} from 'react';
import {View, Text, ScrollView, StyleSheet, Image, Picker} from 'react-native';
import {wp, hp, commonFont, Gcolor, icons, images} from '../../../common';
import {GTextInput, GButton} from '../../../common/GComponents';
import {RadioButton} from 'react-native-paper';

const AddNewItem1 = props => {
  const [checked, setChecked] = React.useState('first');
  const [gravy, setGravy] = useState('Select Gravy');
  const [preTime, setPreTime] = useState('Select Time');
  const [itemName, setItemName] = useState('Paneer Butter Masala.');

  return (
    <ScrollView style={{backgroundColor: Gcolor.placeholdertext}}>
      <View style={styles.view}>
        <View style={{flexDirection: 'row'}}>
          <Image style={styles.picon} source={icons.Profile} />
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.bdetails}>Basic Details</Text>

            <Text style={styles.bcontent}>
              Name, Category, Description, Image
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.line} />
          <View style={styles.line1} />
          <View style={styles.line1} />
          <View style={styles.line1} />
        </View>
      </View>
      <View style={styles.mainview}>
        <Text style={styles.maindetail}>Basic Details</Text>
        <View style={styles.horline} />
        <Text style={styles.add1}>Item Name</Text>
        <GTextInput onChangeText={setItemName} value={itemName} />
        <Text style={styles.add1}>Food Type</Text>
        <View style={{flexDirection: 'row', marginLeft: wp(4)}}>
          <View style={{marginTop: hp(1.2), flexDirection: 'row'}}>
            <RadioButton
              value="first"
              color={Gcolor.btncolor}
              status={checked === 'first' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('first')}
            />
            <Text style={styles.radio}>Veg</Text>
          </View>
          <View style={styles.radiotext}>
            <RadioButton
              value="second"
              color={Gcolor.btncolor}
              status={checked === 'second' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('second')}
            />
            <Text style={styles.radio}>Non Veg</Text>
          </View>
          <View style={styles.radiotext}>
            <RadioButton
              value="third"
              color={Gcolor.btncolor}
              status={checked === 'third' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('third')}
            />
            <Text style={styles.radio}>Egg</Text>
          </View>
        </View>
        <Text style={styles.add1}>Description</Text>
        <GTextInput onChangeText={setItemName} value={itemName} />
        <Text style={styles.add1}>Category</Text>
        <View style={styles.pick}>
          <Picker
            selectedValue={gravy}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) => setGravy(itemValue)}>
            <Picker.Item label="Veg Gravy" value="veg gurry" />
            <Picker.Item label="Paneer Butter" value="paneer butter" />
          </Picker>
        </View>
        <Text style={styles.add1}>Preparation Time</Text>
        <View style={styles.pick}>
          <Picker
            selectedValue={preTime}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) => setPreTime(itemValue)}>
            <Picker.Item label="30 Minutes" value="30 Minutes" />
            <Picker.Item label="1 Hours" value="1 Hours" />
            <Picker.Item
              label="1 Hours 30 Minutes"
              value="1 Hours 30 Minutes"
            />
          </Picker>
        </View>
        <Text style={styles.txt}>Item Image</Text>
        <Text style={styles.imgtxt}>
          Image of resolution 148x148 is required
        </Text>
        <Image
          style={{marginTop: hp(2), marginLeft: wp(4)}}
          source={images.Rice}
        />
      </View>
      <View style={styles.btnview}>
        <GButton
          btnStyle={styles.btn}
          textStyle={{color: Gcolor.btncolor}}
          text={'Back'}
          onPress={() => alert('Button Click')}
        />
        <GButton
          btnStyle={styles.btn1}
          textStyle={{color: Gcolor.white}}
          text={'Next Step'}
          onPress={() => props.navigation.navigate('AddNewItem2')}
        />
      </View>
    </ScrollView>
  );
};

export default AddNewItem1;

const styles = StyleSheet.create({
  view: {
    marginTop: hp(2),
    width: wp(87),
    height: hp(12.5),
    backgroundColor: Gcolor.white,
    alignSelf: 'center',
    borderRadius: 12,
  },
  btnview: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    backgroundColor: Gcolor.white,
    width: '100%',
    position: 'absolute',
    bottom: 10,
  },
  btn: {
    backgroundColor: Gcolor.white,
    width: wp(41),
    height: hp(7),
    borderColor: Gcolor.btncolor,
    borderWidth: 1,
    marginBottom: hp(1.5),
    marginLeft: wp(4),
  },
  btn1: {
    backgroundColor: Gcolor.btncolor,
    width: wp(41),
    height: hp(7),
    borderColor: Gcolor.btncolor,
    marginBottom: hp(1.5),
    marginRight: wp(4),
  },
  horline: {
    borderBottomColor: Gcolor.borderColors,
    borderBottomWidth: 1,
    marginTop: hp(2.2),
    width: '100%',
    alignSelf: 'center',
  },
  imgtxt: {
    marginLeft: wp(4),
    marginTop: hp(0.5),
    fontFamily: commonFont.LRegular,
    fontSize: commonFont.fs12,
    color: Gcolor.grey2,
  },
  picker: {
    height: hp(6.5),
    width: wp(70),
  },
  pick: {
    borderColor: Gcolor.grey3,
    borderWidth: 1,
    width: wp(78),
    height: hp(6.5),
    marginTop: hp(1),
    borderColor: Gcolor.borderColors,
    alignSelf: 'center',
    paddingLeft: wp(5),
  },
  radiotext: {
    marginTop: hp(1.2),
    flexDirection: 'row',
    marginLeft: wp(4),
  },
  radio: {
    fontFamily: commonFont.LRegular,
    fontSize: commonFont.fs14,
    marginTop: hp(1.2),
    marginLeft: wp(2),
  },
  add1: {
    fontSize: commonFont.fs14,
    fontWeight: '400',
    fontFamily: commonFont.LRegular,
    color: Gcolor.inputTitle,
    marginTop: hp(2),
    marginLeft: wp(4),
  },
  picon: {
    marginLeft: wp(4),
    marginTop: hp(2),
    position: 'relative',
    top: 10,
  },
  line: {
    borderBottomColor: Gcolor.btncolor,
    borderBottomWidth: 3,
    width: wp(18),
    marginTop: hp(2.5),
    marginLeft: wp(4),
  },
  line1: {
    borderBottomColor: Gcolor.borderBottomLine,
    borderBottomWidth: 3,
    width: wp(18),
    marginTop: hp(2.5),
    marginLeft: wp(1.5),
  },
  bdetails: {
    marginLeft: wp(3),
    marginTop: hp(2),
    color: Gcolor.inputTitle,
    fontSize: commonFont.fs14,
    fontFamily: commonFont.LRegular,
  },
  bcontent: {
    marginLeft: wp(3),
    color: Gcolor.grey3,
    fontSize: commonFont.fs12,
    fontFamily: commonFont.LRegular,
  },
  mainview: {
    height: hp(120),
    width: wp(87),
    alignSelf: 'center',
    borderRadius: 12,
    backgroundColor: Gcolor.white,
    marginTop: hp(1.5),
  },
  maindetail: {
    marginTop: hp(2),
    marginLeft: wp(4),
    fontFamily: commonFont.LRegular,
    fontSize: commonFont.fs16,
    fontWeight: 'bold',
    color: Gcolor.addressTxt,
  },
  txt: {
    marginTop: hp(2),
    marginLeft: wp(4),
    fontFamily: commonFont.LRegular,
    fontSize: commonFont.fs16,
    fontWeight: 'bold',
    color: Gcolor.addressTxt,
    marginTop: hp(5),
  },
});
