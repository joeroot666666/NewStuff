import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {wp, hp, commonFont, Gcolor, icons, images} from '../../../common';
import {GTextInput, GButton} from '../../../common/GComponents';
import {RadioButton} from 'react-native-paper';

const AddNewItem4 = props => {
  const [optionName, setOptionName] = useState('Paneer');
  const [checked, setChecked] = useState('first');
  const [itemPrice, setItemPrice] = useState('₹ 260');
  const [additionalPrice, setAdditionalPrice] = useState('₹ 50');

  return (
    <ScrollView style={{backgroundColor: Gcolor.placeholdertext}}>
      <View style={styles.mainview}>
        <View style={styles.rowview}>
          <Text style={styles.quality}>Quality</Text>
          <Text style={styles.variant}>Title of the Varient</Text>
        </View>
        <View style={styles.horline} />
        <Text style={styles.add1}>Item Price</Text>
        <GTextInput onChangeText={setOptionName} value={optionName} />

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
        <View style={[styles.horline, {width: wp(78)}]} />
        <Text style={styles.maindetail}>Item Pricing</Text>
        <Text style={styles.add1}>Item Price</Text>
        <GTextInput onChangeText={setItemPrice} value={itemPrice} />
        <Text style={styles.add1}>Additional Price</Text>
        <GTextInput onChangeText={setAdditionalPrice} value={additionalPrice} />
        <View style={styles.dborder}>
          <Text style={styles.maindetail}>Final Price</Text>
          <View
            style={{
              flexDirection: 'row',
              marginTop: hp(1.5),
              marginLeft: wp(5),
            }}>
            <Text style={styles.zero}>₹ 0.00</Text>
            <Text style={styles.gstpacprice}>Price + Packing + GST</Text>
          </View>
          <Text
            style={[styles.gstpacprice, {marginLeft: wp(6), marginTop: hp(3)}]}>
            Please ensure the item price matches the price in your menu to avoid
            rejection of changes.
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('AddNewItem4Child')}>
          <Text style={styles.options}>+ Add More Option</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.btnview}>
        <GButton
          btnStyle={styles.btn}
          textStyle={{color: Gcolor.btncolor}}
          text={'Back'}
          onPress={() => props.navigation.navigate('AddNewItem3')}
        />
        <GButton
          btnStyle={styles.btn1}
          textStyle={{color: Gcolor.white}}
          text={'Next Step'}
          onPress={() => props.navigation.navigate('AddNewItem5')}
        />
      </View>
    </ScrollView>
  );
};

export default AddNewItem4;

const styles = StyleSheet.create({
  mainview: {
    height: hp(109),
    width: wp(87),
    alignSelf: 'center',
    borderRadius: 12,
    backgroundColor: Gcolor.white,
    marginTop: hp(2),
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
  options: {
    color: Gcolor.btncolor,
    marginTop: hp(2),
    fontWeight: 'bold',
    marginLeft: wp(4),
    fontSize: commonFont.fs16,
    fontFamily: commonFont.LRegular,
  },
  zero: {
    fontFamily: commonFont.LRegular,
    fontSize: commonFont.fs16,
    color: Gcolor.btncolor,
    fontWeight: 'bold',
  },
  gstpacprice: {
    fontFamily: commonFont.LRegular,
    fontSize: commonFont.fs12,
    color: Gcolor.inputTitle,
    marginLeft: wp(4),
    fontWeight: '400',
  },
  dborder: {
    marginTop: hp(4),
    marginLeft: wp(4),
    width: wp(78),
    height: hp(19.5),
    borderWidth: 2,
    borderStyle: 'dashed',
    borderRadius: 8,
    borderColor: Gcolor.borderColors,
  },
  maindetail: {
    marginTop: hp(2),
    marginLeft: wp(4),
    fontFamily: commonFont.LRegular,
    fontSize: commonFont.fs16,
    fontWeight: 'bold',
    color: Gcolor.addressTxt,
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
  quality: {
    marginLeft: wp(4),
    fontSize: commonFont.fs16,
    fontFamily: commonFont.LRegular,
    color: Gcolor.black3,
  },
  variant: {
    fontSize: commonFont.fs14,
    fontFamily: commonFont.LRegular,
    color: Gcolor.inputTitle,
    marginRight: wp(4),
  },
  rowview: {
    flexDirection: 'row',
    marginTop: hp(2),
    justifyContent: 'space-between',
  },
  horline: {
    borderBottomColor: Gcolor.borderColors,
    borderBottomWidth: 1,
    marginTop: hp(2.2),
    width: '100%',
    alignSelf: 'center',
  },
});
