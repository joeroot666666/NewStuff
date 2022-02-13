import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  StyleSheet,
  Switch,
  Button,
  TouchableOpacity,
} from 'react-native';
import {Gcolor, commonFont, wp, hp, icons, images} from '../../common';
import {GTextInput, GButton} from '../../common/GComponents';
import {SpeedDial} from 'react-native-elements';
import Modal from 'react-native-modal';
import {RadioButton} from 'react-native-paper';

const Addons = () => {
  const [search, setSearch] = useState('');
  const [addOn, setAddOn] = useState('');
  const [addPrice, setAddPrice] = useState('');
  const [gst, setGst] = useState('');
  const [isEnabled, setIsEnabled] = useState(true);
  const [open, setOpen] = React.useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [checked, setChecked] = React.useState('first');

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <ScrollView>
      <View style={{backgroundColor: Gcolor.white}}>
        <TextInput
          placeholder="Search item"
          style={styles.input}
          value={search}
          onChangeText={setSearch}
          placeholderTextColor={Gcolor.grey3}
        />
        <Image style={styles.simg} source={icons.Search} />
      </View>
      <View style={styles.view}>
        <Text style={styles.txt}>Out of stocks items</Text>
        <Image style={styles.arrow} source={icons.DownArrow} />
        <Text style={styles.item}>3 Items</Text>
      </View>
      <View style={styles.view1}>
        <Text style={styles.txt}>Extra</Text>
        <Image style={styles.arrow} source={icons.TopArrow} />
        <View
          style={{
            marginTop: hp(3),
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.itemrice}>Extra 14</Text>
          <Switch
            trackColor={{false: '#767577', true: Gcolor.btncolor}}
            thumbColor={isEnabled ? Gcolor.white : '#f4f3f4'}
            ios_backgroundColor={Gcolor.white}
            onValueChange={toggleSwitch}
            value={isEnabled}
            style={{marginRight: wp(4)}}
          />
        </View>

        <View style={styles.menuview}>
          <Image source={icons.Veg} />
        </View>
        <Text style={[styles.itemrice, {marginTop: hp(2)}]}>Lemon & Onion</Text>
        <Text style={styles.item}>₹19</Text>
        <Image style={styles.img} source={images.Biryani} />
        <View style={styles.line} />
        <View
          style={{flexDirection: 'row', marginLeft: wp(6), marginTop: hp(1.5)}}>
          <Switch
            trackColor={{false: '#767577', true: Gcolor.btncolor}}
            thumbColor={isEnabled ? Gcolor.white : '#f4f3f4'}
            ios_backgroundColor={Gcolor.white}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
          <Text style={[styles.itemrice, {fontWeight: '400'}]}>In Stock</Text>
          <Image style={{marginLeft: wp(37)}} source={icons.Edit} />
          <Text style={[styles.itemrice, {fontWeight: '400'}]}>Edit</Text>
        </View>
        <View style={styles.line} />

        <View style={styles.menuview}>
          <Image source={icons.NonVeg} />
        </View>
        <Text style={[styles.itemrice, {marginTop: hp(2)}]}>Pandara Rassa</Text>
        <Text style={styles.item}>₹14</Text>
        <Image style={styles.img} source={images.Biryani} />
        <View style={styles.line} />
        <View
          style={{flexDirection: 'row', marginLeft: wp(6), marginTop: hp(1.5)}}>
          <Switch
            trackColor={{false: '#767577', true: Gcolor.btncolor}}
            thumbColor={isEnabled ? Gcolor.white : '#f4f3f4'}
            ios_backgroundColor={Gcolor.white}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
          <Text style={[styles.itemrice, {fontWeight: '400'}]}>In Stock</Text>
          <Image style={{marginLeft: wp(37)}} source={icons.Edit} />
          <Text style={[styles.itemrice, {fontWeight: '400'}]}>Edit</Text>
        </View>
        <View style={styles.line} />

        <View style={styles.menuview}>
          <Image source={icons.Veg} />
        </View>
        <Text style={[styles.itemrice, {marginTop: hp(2)}]}>Tambada Rassa</Text>
        <Text style={styles.item}>₹14</Text>
        <Image style={styles.img} source={images.Biryani} />
        <View style={styles.line} />
        <View
          style={{flexDirection: 'row', marginLeft: wp(6), marginTop: hp(1.5)}}>
          <Switch
            trackColor={{false: '#767577', true: Gcolor.btncolor}}
            thumbColor={isEnabled ? Gcolor.white : '#f4f3f4'}
            ios_backgroundColor={Gcolor.white}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
          <Text style={[styles.itemrice, {fontWeight: '400'}]}>In Stock</Text>
          <Image style={{marginLeft: wp(37)}} source={icons.Edit} />
          <Text style={[styles.itemrice, {fontWeight: '400'}]}>Edit</Text>
        </View>
        <View style={styles.line} />

        <View style={styles.menuview}>
          <Image source={icons.Veg} />
        </View>
        <Text style={[styles.itemrice, {marginTop: hp(2)}]}>Curd</Text>
        <Text style={styles.item}>₹10</Text>
        <Image style={styles.img} source={images.Biryani} />
        <View style={styles.line} />
        <View
          style={{flexDirection: 'row', marginLeft: wp(6), marginTop: hp(1.5)}}>
          <Switch
            trackColor={{false: '#767577', true: Gcolor.btncolor}}
            thumbColor={isEnabled ? Gcolor.white : '#f4f3f4'}
            ios_backgroundColor={Gcolor.white}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
          <Text style={[styles.itemrice, {fontWeight: '400'}]}>In Stock</Text>
          <Image style={{marginLeft: wp(37)}} source={icons.Edit} />
          <Text style={[styles.itemrice, {fontWeight: '400'}]}>Edit</Text>
        </View>
        <View style={styles.line} />
      </View>
      <SpeedDial
        style={{marginBottom: hp(6)}}
        isOpen={open}
        color={Gcolor.btncolor}
        icon={{name: 'add', color: Gcolor.white}}
        openIcon={{name: 'close', color: Gcolor.white}}
        title="Add"
        onOpen={() => setOpen(!open)}
        onClose={() => setOpen(!open)}>
        <SpeedDial.Action
          icon={{name: 'add', color: Gcolor.white}}
          title="Add"
          onPress={() => toggleModal()}
        />
      </SpeedDial>
      <Modal style={styles.modal} isVisible={isModalVisible}>
        <ScrollView>
          <View style={{marginBottom: hp(18)}}>
            <View
              style={{
                flexDirection: 'row',
                marginLeft: wp(4),
                justifyContent: 'space-between',
              }}>
              <Text style={[styles.txt, {fontSize: commonFont.fs18}]}>
                Add New Add-On's
              </Text>
              <TouchableOpacity
                style={{
                  alignSelf: 'flex-end',
                  marginTop: hp(2),
                  marginRight: wp(4),
                }}
                onPress={() => toggleModal()}>
                <Image source={icons.Close} />
              </TouchableOpacity>
            </View>
            <Text style={styles.txt}>Basic Details</Text>
            <View style={[styles.line, {marginTop: hp(2)}]} />
            <Text style={styles.adon}>Add-On Name</Text>
            <GTextInput
              value={'Cheese'}
              onChangeText={addOn}
              placeholderTextColor={Gcolor.grey3}
              inputStyle={{width: wp(83)}}
            />
            <Text style={styles.adon}>Food Type</Text>
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
              <View
                style={{
                  marginTop: hp(1.2),
                  flexDirection: 'row',
                  marginLeft: wp(4),
                }}>
                <RadioButton
                  value="second"
                  color={Gcolor.btncolor}
                  status={checked === 'second' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('second')}
                />
                <Text style={styles.radio}>Non Veg</Text>
              </View>
            </View>
            <Text style={[styles.txt, {marginTop: hp(5)}]}>Add-On Pricing</Text>
            <Text style={styles.adon}>Additional Price</Text>
            <GTextInput
              value={'₹ 20.00'}
              onChangeText={addPrice}
              placeholderTextColor={Gcolor.grey3}
              inputStyle={{width: wp(83)}}
            />
            <Text style={styles.adon}>GST</Text>
            <GTextInput
              value={'20%'}
              onChangeText={gst}
              placeholderTextColor={Gcolor.grey3}
              inputStyle={{width: wp(83)}}
            />
            <Text style={[styles.txt, {marginTop: hp(5)}]}>Item Image</Text>
            <Text style={styles.imgtxt}>
              Image of resolution 148x148 is required
            </Text>
            <Image
              style={{marginTop: hp(2), marginLeft: wp(4)}}
              source={images.Rice}
            />
            <View style={styles.btnview}>
              <GButton
                btnStyle={styles.btn}
                textStyle={{color: Gcolor.btncolor}}
                text={'Cancel'}
                onPress={() => alert('Button Click')}
              />
              <GButton
                btnStyle={styles.btn1}
                textStyle={{color: Gcolor.white}}
                text={'Save Changes'}
                onPress={() => alert('Button Click')}
              />
            </View>
          </View>
        </ScrollView>
      </Modal>
    </ScrollView>
  );
};

export default Addons;

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: hp(6.5),
    alignSelf: 'center',
    paddingLeft: wp(5),
  },
  btnview: {
    flexDirection: 'row',
    marginTop: hp(2),
    alignContent: 'center',
    justifyContent: 'space-between',
    backgroundColor: Gcolor.white,
    width: '100%',
    marginBottom: hp(-12),
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
  radio: {
    fontFamily: commonFont.LRegular,
    fontSize: commonFont.fs14,
    marginTop: hp(1.2),
    marginLeft: wp(2),
  },
  modal: {
    backgroundColor: Gcolor.white,
    width: '100%',
    alignSelf: 'center',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  adon: {
    marginLeft: wp(6),
    marginTop: hp(2),
    fontFamily: commonFont.LRegular,
    fontSize: commonFont.fs14,
    color: Gcolor.inputTitle,
    fontWeight: 'bold',
  },
  imgtxt: {
    marginLeft: wp(4),
    marginTop: hp(0.5),
    fontFamily: commonFont.LRegular,
    fontSize: commonFont.fs12,
    color: Gcolor.grey2,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp(2),
    marginRight: wp(2),
  },
  img: {
    marginRight: wp(3),
    alignSelf: 'flex-end',
    position: 'relative',
    top: -50,
  },
  menuview: {
    marginTop: hp(4),
    marginLeft: wp(4),
  },
  simg: {
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 15,
    right: 20,
  },
  line: {
    borderBottomColor: Gcolor.borderColors,
    borderBottomWidth: 1,
    width: '100%',
    marginTop: hp(1),
  },
  itemrice: {
    marginLeft: wp(3),
    fontWeight: 'bold',
    fontFamily: commonFont.LRegular,
    fontSize: commonFont.fs14,
  },
  arrow: {
    alignSelf: 'flex-end',
    marginRight: wp(5),
  },
  txt: {
    marginTop: hp(2),
    marginLeft: wp(4),
    fontFamily: commonFont.LRegular,
    fontSize: commonFont.fs16,
    fontWeight: 'bold',
    color: Gcolor.addressTxt,
  },
  view: {
    backgroundColor: Gcolor.white,
    marginTop: hp(1.5),
    width: wp(87),
    alignSelf: 'center',
    height: hp(12),
  },
  view1: {
    backgroundColor: Gcolor.white,
    marginTop: hp(1.5),
    width: wp(87),
    alignSelf: 'center',
    borderRadius: 12,
    marginBottom: hp(3),
  },
  item: {
    marginTop: hp(1.2),
    marginLeft: wp(4),
    fontSize: commonFont.fs12,
    color: Gcolor.grey3,
    fontWeight: 'bold',
    fontFamily: commonFont.LRegular,
  },
});
