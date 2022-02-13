import React, {useState} from 'react';
import {View, Text, ScrollView, StyleSheet, Image} from 'react-native';
import {wp, hp, commonFont, Gcolor, icons, images} from '../../../common';
import {GTextInput, GButton} from '../../../common/GComponents';

const AddNewItem2 = props => {
  const [itemPrice, setItemPrice] = useState('₹ 250');
  const [packCharge, setPackCharge] = useState('₹ 15');
  const [gst, setGst] = useState('3%');

  return (
    <ScrollView style={{backgroundColor: Gcolor.placeholdertext}}>
      <View style={styles.view}>
        <View style={{flexDirection: 'row'}}>
          <Image style={styles.picon} source={icons.Tag} />
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.bdetails}>Item Pricing</Text>
            <Text style={styles.bcontent}>
              Name, Category, Description, Image
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.line} />
          <View style={[styles.line1, {borderBottomColor: Gcolor.btncolor}]} />
          <View style={styles.line1} />
          <View style={styles.line1} />
        </View>
      </View>
      <View style={styles.mainview}>
        <Text style={styles.maindetail}>Item Pricing</Text>
        <View style={styles.horline} />
        <Text style={styles.add1}>Item Price</Text>
        <GTextInput onChangeText={setItemPrice} value={itemPrice} />
        <Text style={styles.add1}>Packing Charges</Text>
        <GTextInput onChangeText={setPackCharge} value={packCharge} />
        <Text style={styles.add1}>GST</Text>
        <GTextInput onChangeText={setGst} value={gst} />
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
      </View>
      <View style={styles.btnview}>
        <GButton
          btnStyle={styles.btn}
          textStyle={{color: Gcolor.btncolor}}
          text={'Back'}
          onPress={() => props.navigation.navigate('AddNewItem1')}
        />
        <GButton
          btnStyle={styles.btn1}
          textStyle={{color: Gcolor.white}}
          text={'Next Step'}
          onPress={() => props.navigation.navigate('AddNewItem3')}
        />
      </View>
    </ScrollView>
  );
};

export default AddNewItem2;

const styles = StyleSheet.create({
  mainview: {
    height: hp(88),
    width: wp(87),
    alignSelf: 'center',
    borderRadius: 12,
    backgroundColor: Gcolor.white,
    marginTop: hp(1.5),
  },
  horline: {
    borderBottomColor: Gcolor.borderColors,
    borderBottomWidth: 1,
    marginTop: hp(2.2),
    width: '100%',
    alignSelf: 'center',
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
  add1: {
    fontSize: commonFont.fs14,
    fontWeight: '400',
    fontFamily: commonFont.LRegular,
    color: Gcolor.inputTitle,
    marginTop: hp(2),
    marginLeft: wp(4),
  },
  view: {
    marginTop: hp(2),
    width: wp(87),
    height: hp(12.5),
    backgroundColor: Gcolor.white,
    alignSelf: 'center',
    borderRadius: 12,
  },
  picon: {
    marginLeft: wp(4),
    marginTop: hp(2),
    position: 'relative',
    top: 10,
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
});
