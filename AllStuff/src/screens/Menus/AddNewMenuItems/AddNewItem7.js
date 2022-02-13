import React, {useState} from 'react';
import {View, Text, ScrollView, StyleSheet, Image} from 'react-native';
import {wp, hp, commonFont, Gcolor, icons, images} from '../../../common';
import {GTextInput, GButton} from '../../../common/GComponents';
import {RadioButton} from 'react-native-paper';

const AddNewItem7 = props => {
  const [checked, setChecked] = useState('first');

  return (
    <ScrollView style={{backgroundColor: Gcolor.placeholdertext}}>
      <View style={styles.view}>
        <View style={{flexDirection: 'row'}}>
          <Image style={styles.picon} source={icons.Clock} />
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.bdetails}>Availability</Text>
            <Text style={styles.bcontent}>Available timings</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.line} />
          <View style={[styles.line1, {borderBottomColor: Gcolor.btncolor}]} />
          <View style={[styles.line1, {borderBottomColor: Gcolor.btncolor}]} />
          <View style={styles.line1} />
        </View>
      </View>
      <View style={styles.mainview}>
        <Text style={styles.maindetail}>Item Timing</Text>
        <View style={styles.horline} />
        <Text style={styles.add1}>
          Please specify the timinings when this item is available on ONDWAY
        </Text>
        <View
          style={{
            marginTop: hp(3),
            marginLeft: wp(6),
            flexDirection: 'row',
          }}>
          <Image style={{marginTop: hp(0.3)}} source={icons.Ibox} />
          <Text style={styles.time}>
            Each day can have only maximimum of 3 timeslots
          </Text>
        </View>
        <View
          style={{marginTop: hp(4), marginLeft: wp(3), flexDirection: 'row'}}>
          <RadioButton
            value="first"
            color={Gcolor.btncolor}
            status={checked === 'first' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('first')}
          />
          <Text style={styles.mixtxt}>
            Item is available at all time when the restaurant is open on
            On-d-way
          </Text>
        </View>
        <View
          style={{marginTop: hp(3), marginLeft: wp(3), flexDirection: 'row'}}>
          <RadioButton
            value="second"
            color={Gcolor.btncolor}
            status={checked === 'second' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('second')}
          />
          <Text style={styles.mixtxt}>
            Item is available at same time for all days of the week
          </Text>
        </View>
        <View
          style={{marginTop: hp(3), marginLeft: wp(3), flexDirection: 'row'}}>
          <RadioButton
            value="third"
            color={Gcolor.btncolor}
            status={checked === 'third' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('third')}
          />
          <Text style={styles.mixtxt}>
            Item is available different times during different days of the week
          </Text>
        </View>
      </View>
      <View style={styles.btnview}>
        <GButton
          btnStyle={styles.btn}
          textStyle={{color: Gcolor.btncolor}}
          text={'Back'}
          onPress={() => props.navigation.navigate('AddNewItem6')}
        />
        <GButton
          btnStyle={styles.btn1}
          textStyle={{color: Gcolor.white}}
          text={'Submit'}
          onPress={() => props.navigation.navigate('AddNewItem8')}
        />
      </View>
    </ScrollView>
  );
};

export default AddNewItem7;

const styles = StyleSheet.create({
  view: {
    marginTop: hp(2),
    width: wp(87),
    height: hp(12.5),
    backgroundColor: Gcolor.white,
    alignSelf: 'center',
    borderRadius: 12,
  },
  time: {
    marginLeft: wp(2),
    fontFamily: commonFont.LRegular,
    fontSize: commonFont.fs12,
    color: Gcolor.addressTxt,
  },
  btnview: {
    marginTop: hp(5.5),
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    backgroundColor: Gcolor.white,
    width: '100%',
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
  mixtxt: {
    fontSize: commonFont.fs14,
    fontWeight: 'bold',
    fontFamily: commonFont.LRegular,
    color: Gcolor.inputTitle,
    width: 272,
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
  mainview: {
    height: hp(52),
    width: wp(87),
    borderRadius: 12,
    backgroundColor: Gcolor.white,
    alignSelf: 'center',
    marginTop: hp(1.6),
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
  horline: {
    borderBottomColor: Gcolor.borderColors,
    borderBottomWidth: 1,
    marginTop: hp(2.2),
    width: '100%',
    alignSelf: 'center',
  },
});
