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

const AddNewItem6 = props => {
  const [optionName, setOptionName] = useState('New Addon Name');
  const [checked, setChecked] = useState('first');
  const [minimum, setMinimum] = useState('01');
  const [maximum, setMaximum] = useState('05');

  return (
    <ScrollView style={{backgroundColor: Gcolor.placeholdertext}}>
      <View style={styles.mainview}>
        <Text style={styles.quality}>Make your own Add on</Text>
        <View style={styles.horline} />
        <Text style={styles.add1}>Title of the addon group</Text>
        <GTextInput onChangeText={setOptionName} value={optionName} />

        <Text style={styles.add1}>Customisation Behaviour</Text>
        <View style={{flexDirection: 'row', marginLeft: wp(4)}}>
          <View style={{marginTop: hp(1.2), flexDirection: 'row'}}>
            <RadioButton
              value="first"
              color={Gcolor.btncolor}
              status={checked === 'first' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('first')}
            />
            <Text style={styles.radio}>Compulsory</Text>
          </View>
          <View style={styles.radiotext}>
            <RadioButton
              value="second"
              color={Gcolor.btncolor}
              status={checked === 'second' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('second')}
            />
            <Text style={styles.radio}>Optional</Text>
          </View>
        </View>
        <Text style={styles.add1}>Minimum Selection</Text>
        <GTextInput onChangeText={setMinimum} value={minimum} />
        <Text style={styles.add1}>Maximum Selection</Text>
        <GTextInput onChangeText={setMaximum} value={maximum} />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.add1}>Add-Ons</Text>
          <Text style={styles.selectadons}>+Select Add-Ons</Text>
        </View>

        <View style={[styles.addview, {marginTop: hp(1.5)}]}>
          <View style={styles.checkview}>
            <Text style={styles.checktext}>Cheese</Text>
            <Image
              style={{marginTop: hp(1.7), marginLeft: wp(3)}}
              source={icons.Veg}
            />
          </View>
          <View style={styles.card}>
            <Text style={styles.price}>₹ 50</Text>
            <Image style={{marginRight: wp(3)}} source={icons.Delete} />
          </View>
        </View>
        <View style={[styles.addview, {marginTop: hp(1.5)}]}>
          <View style={styles.checkview}>
            <Text style={styles.checktext}>Coleslaw</Text>
            <Image
              style={{marginTop: hp(1.7), marginLeft: wp(3)}}
              source={icons.Veg}
            />
          </View>
          <View style={styles.card}>
            <Text style={styles.price}>₹ 50</Text>
            <Image style={{marginRight: wp(3)}} source={icons.Delete} />
          </View>
        </View>
      </View>
      <View style={styles.btnview}>
        <GButton
          btnStyle={styles.btn}
          textStyle={{color: Gcolor.btncolor}}
          text={'Back'}
          onPress={() => props.navigation.navigate('AddNewItem5')}
        />
        <GButton
          btnStyle={styles.btn1}
          textStyle={{color: Gcolor.white}}
          text={'Next Step'}
          onPress={() => props.navigation.navigate('AddNewItem7')}
        />
      </View>
    </ScrollView>
  );
};

export default AddNewItem6;

const styles = StyleSheet.create({
  mainview: {
    height: hp(102),
    width: wp(87),
    alignSelf: 'center',
    borderRadius: 12,
    backgroundColor: Gcolor.white,
    marginTop: hp(2),
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp(1),
    marginLeft: wp(5),
  },
  price: {
    fontFamily: commonFont.LRegular,
    fontSize: commonFont.fs14,
    color: Gcolor.longtitle,
  },
  checkview: {
    flexDirection: 'row',
    marginLeft: wp(2),
  },
  checktext: {
    fontFamily: commonFont.LRegular,
    fontSize: commonFont.fs16,
    color: Gcolor.black3,
    marginTop: hp(1),
    marginLeft: wp(2),
  },
  addview: {
    width: wp(78),
    height: hp(10),
    backgroundColor: Gcolor.white,
    alignSelf: 'center',
    borderRadius: 6,
    borderColor: Gcolor.borderColors,
    borderWidth: 1,
  },
  selectadons: {
    marginTop: hp(2),
    fontFamily: commonFont.LRegular,
    fontSize: commonFont.fs12,
    fontWeight: 'bold',
    color: Gcolor.btncolor,
    marginRight: wp(4),
  },
  close: {
    alignSelf: 'flex-end',
    marginTop: hp(2),
    marginRight: wp(4),
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
    marginTop: hp(2),
  },
  variant: {
    fontSize: commonFont.fs14,
    fontFamily: commonFont.LRegular,
    color: Gcolor.inputTitle,
    marginRight: wp(4),
  },
  horline: {
    borderBottomColor: Gcolor.borderColors,
    borderBottomWidth: 1,
    marginTop: hp(2.2),
    width: '100%',
    alignSelf: 'center',
  },
});
