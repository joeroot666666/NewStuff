import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import {wp, hp, commonFont, Gcolor, icons, images} from '../../../common';
import {GTextInput, GButton} from '../../../common/GComponents';
import {RadioButton} from 'react-native-paper';
import Modal from 'react-native-modal';
import CheckBox from '@react-native-community/checkbox';

const AddNewItem5 = props => {
  const [optionName, setOptionName] = useState('New Addon Name');
  const [checked, setChecked] = useState('first');
  const [search, setSearch] = useState('');
  const [minimum, setMinimum] = useState('01');
  const [maximum, setMaximum] = useState('05');
  const [isModalVisible, setModalVisible] = useState(false);
  const [isSelected, setSelection] = useState(true);
  const [notSelected, setNotSelection] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

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
        <TouchableOpacity onPress={() => toggleModal()}>
          <View style={styles.dborder}>
            <Image source={icons.Plus} />
            <Text style={[styles.add1, {fontSize: commonFont.fs12}]}>
              Add some addons to complete this group
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.btnview}>
        <GButton
          btnStyle={styles.btn}
          textStyle={{color: Gcolor.btncolor}}
          text={'Back'}
          onPress={() => props.navigation.navigate('AddNewItem4')}
        />
        <GButton
          btnStyle={styles.btn1}
          textStyle={{color: Gcolor.white}}
          text={'Next Step'}
          onPress={() => props.navigation.navigate('AddNewItem6')}
        />
      </View>

      <Modal style={styles.modal} isVisible={isModalVisible}>
        <ScrollView>
          <View style={{marginBottom: hp(18)}}>
            <View style={styles.modalview}>
              <Text style={styles.txt}>Select Add-Ons</Text>
              <TouchableOpacity
                style={styles.close}
                onPress={() => toggleModal()}>
                <Image source={icons.Close} />
              </TouchableOpacity>
            </View>
            <Text style={styles.addons}>90 Added Add-Ons</Text>
            <View style={{backgroundColor: Gcolor.white}}>
              <TextInput
                placeholder="Search for add-ons"
                style={styles.input}
                value={search}
                onChangeText={setSearch}
                placeholderTextColor={Gcolor.grey3}
              />
              <Image style={styles.simg} source={icons.Search} />
            </View>
            <View style={styles.addview}>
              <View style={styles.checkview}>
                <CheckBox value={isSelected} onValueChange={setSelection} />
                <Text style={styles.checktext}>Cheese</Text>
                <Image
                  style={{marginTop: hp(1.3), marginLeft: wp(3)}}
                  source={icons.Veg}
                />
              </View>
              <Text style={styles.price}>₹ 50</Text>
            </View>

            <View style={[styles.addview, {marginTop: hp(1.5)}]}>
              <View style={styles.checkview}>
                <CheckBox value={notSelected} onValueChange={setNotSelection} />
                <Text style={styles.checktext}>Jalapeno</Text>
                <Image
                  style={{marginTop: hp(1.3), marginLeft: wp(3)}}
                  source={icons.Veg}
                />
              </View>
              <Text style={styles.price}>₹ 50</Text>
            </View>
            <View style={[styles.addview, {marginTop: hp(1.5)}]}>
              <View style={styles.checkview}>
                <CheckBox value={notSelected} onValueChange={setNotSelection} />
                <Text style={styles.checktext}>Gherkins</Text>
                <Image
                  style={{marginTop: hp(1.3), marginLeft: wp(3)}}
                  source={icons.Veg}
                />
              </View>
              <Text style={styles.price}>₹ 50</Text>
            </View>
            <View style={[styles.addview, {marginTop: hp(1.5)}]}>
              <View style={styles.checkview}>
                <CheckBox value={notSelected} onValueChange={setNotSelection} />
                <Text style={styles.checktext}>Chicken Salami</Text>
                <Image
                  style={{marginTop: hp(1.3), marginLeft: wp(3)}}
                  source={icons.NonVeg}
                />
              </View>
              <Text style={styles.price}>₹ 50</Text>
            </View>
            <View style={[styles.addview, {marginTop: hp(1.5)}]}>
              <View style={styles.checkview}>
                <CheckBox value={isSelected} onValueChange={setSelection} />
                <Text style={styles.checktext}>Coleslaw</Text>
                <Image
                  style={{marginTop: hp(1.3), marginLeft: wp(3)}}
                  source={icons.Veg}
                />
              </View>
              <Text style={styles.price}>₹ 50</Text>
            </View>
            <View style={styles.btnview1}>
              <GButton
                btnStyle={[styles.btn, {borderColor: '#fff'}]}
                textStyle={{color: Gcolor.btncolor}}
                text={'3 Add-Ons selected'}
                onPress={() => {}}
              />
              <GButton
                btnStyle={styles.btn1}
                textStyle={{color: Gcolor.white}}
                text={'Done'}
                onPress={() => toggleModal()}
              />
            </View>
          </View>
        </ScrollView>
      </Modal>
    </ScrollView>
  );
};

export default AddNewItem5;

const styles = StyleSheet.create({
  mainview: {
    height: hp(95),
    width: wp(87),
    alignSelf: 'center',
    borderRadius: 12,
    backgroundColor: Gcolor.white,
    marginTop: hp(2),
  },
  price: {
    marginLeft: wp(14),
    fontFamily: commonFont.LRegular,
    fontSize: commonFont.fs14,
    color: Gcolor.longtitle,
  },
  checkview: {
    flexDirection: 'row',
    marginTop: hp(1.5),
    marginLeft: wp(3),
  },
  checktext: {
    fontFamily: commonFont.LRegular,
    fontSize: commonFont.fs16,
    color: Gcolor.black3,
    marginTop: hp(0.5),
    marginLeft: wp(2),
  },
  addview: {
    marginTop: hp(3),
    width: wp(87),
    height: hp(10),
    backgroundColor: Gcolor.white,
    alignSelf: 'center',
    borderRadius: 6,
    borderColor: Gcolor.borderColors,
    borderWidth: 1,
  },
  input: {
    width: wp(87),
    height: hp(6),
    alignSelf: 'center',
    marginTop: hp(3),
    borderRadius: 6,
    borderColor: Gcolor.grey2,
  },
  close: {
    alignSelf: 'flex-end',
    marginTop: hp(2),
    marginRight: wp(4),
  },
  addons: {
    marginTop: hp(3),
    marginLeft: wp(4),
    fontFamily: commonFont.LRegular,
    fontSize: commonFont.fs14,
    fontWeight: '500',
    color: Gcolor.addressTxt,
  },
  modalview: {
    flexDirection: 'row',
    marginLeft: wp(4),
    justifyContent: 'space-between',
  },
  txt: {
    marginTop: hp(2),
    marginLeft: wp(4),
    fontFamily: commonFont.LRegular,
    fontSize: commonFont.fs18,
    fontWeight: 'bold',
    color: Gcolor.addressTxt,
  },
  modal: {
    backgroundColor: Gcolor.white,
    width: '100%',
    alignSelf: 'center',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
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
  btnview1: {
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
  options: {
    color: Gcolor.btncolor,
    marginTop: hp(2),
    fontWeight: 'bold',
    marginLeft: wp(4),
    fontSize: commonFont.fs16,
    fontFamily: commonFont.LRegular,
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
    justifyContent: 'center',
    alignItems: 'center',
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
  simg: {
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 15,
    right: 50,
  },
});
