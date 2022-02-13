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
import {SpeedDial} from 'react-native-elements';
import Modal from 'react-native-modal';

const Category = () => {
  const [search, setSearch] = useState('');
  const [isEnabled, setIsEnabled] = useState(true);
  const [open, setOpen] = React.useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

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
        <Text style={styles.txt}>Rice Items</Text>
        <Image style={styles.arrow} source={icons.TopArrow} />
        <View
          style={{
            marginTop: hp(3),
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.itemrice}>RICE ITEMS (24)</Text>
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
          <Image source={icons.NonVeg} />
        </View>
        <Text style={[styles.itemrice, {marginTop: hp(2)}]}>
          Hyderabadi Dum Biryani
        </Text>
        <Text style={styles.item}>₹194</Text>
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
        <Text style={[styles.itemrice, {marginTop: hp(2)}]}>
          Hyderabadi Dum Biryani
        </Text>
        <Text style={styles.item}>₹194</Text>
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
        <Text style={[styles.itemrice, {marginTop: hp(2)}]}>
          Hyderabadi Dum Biryani
        </Text>
        <Text style={styles.item}>₹194</Text>
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
        <Text style={[styles.itemrice, {marginTop: hp(2)}]}>
          Hyderabadi Dum Biryani
        </Text>
        <Text style={styles.item}>₹194</Text>
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

      <View style={styles.view1}>
        <Text style={styles.txt}>Rice Items</Text>
        <Image style={styles.arrow} source={icons.TopArrow} />
        <View
          style={{
            marginTop: hp(3),
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.itemrice}>RICE ITEMS (24)</Text>
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
          <Image source={icons.NonVeg} />
        </View>
        <Text style={[styles.itemrice, {marginTop: hp(2)}]}>
          Hyderabadi Dum Biryani
        </Text>
        <Text style={styles.item}>₹194</Text>
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
        <Text style={[styles.itemrice, {marginTop: hp(2)}]}>
          Hyderabadi Dum Biryani
        </Text>
        <Text style={styles.item}>₹194</Text>
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
        <Text style={[styles.itemrice, {marginTop: hp(2)}]}>
          Hyderabadi Dum Biryani
        </Text>
        <Text style={styles.item}>₹194</Text>
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
        <Text style={[styles.itemrice, {marginTop: hp(2)}]}>
          Hyderabadi Dum Biryani
        </Text>
        <Text style={styles.item}>₹194</Text>
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
        icon={{name: 'edit', color: Gcolor.white}}
        openIcon={{name: 'close', color: Gcolor.white}}
        onOpen={() => setOpen(!open)}
        onClose={() => setOpen(!open)}>
        <SpeedDial.Action
          icon={{name: 'add', color: Gcolor.white}}
          title="Add"
          onPress={() => alert('Add Items')}
        />
        <SpeedDial.Action
          icon={{name: 'menu', color: Gcolor.white}}
          title="Menu"
          onPress={() => toggleModal()}
        />
      </SpeedDial>
      <Modal isVisible={isModalVisible}>
        <View style={styles.modal}>
          <TouchableOpacity
            style={{
              alignSelf: 'flex-end',
              marginTop: hp(2),
              marginRight: wp(4),
            }}
            onPress={() => toggleModal()}>
            <Image source={icons.Close} />
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'column',

              marginLeft: wp(4),
            }}>
            <View style={styles.row}>
              <Text style={styles.item}>Recommended</Text>
              <Text style={[styles.item, {marginRight: wp(2)}]}>6</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.item}>Starter</Text>
              <Text style={[styles.item, {marginRight: wp(2)}]}>10</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.item}>Main Course</Text>
              <Text style={[styles.item, {marginRight: wp(2)}]}>12</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.item}>Soups</Text>
              <Text style={[styles.item, {marginRight: wp(2)}]}>4</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.item}>Rice & Pulav</Text>
              <Text style={[styles.item, {marginRight: wp(2)}]}>7</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.item}>Fried Rice</Text>
              <Text style={[styles.item, {marginRight: wp(2)}]}>9</Text>
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: hp(6.5),
    alignSelf: 'center',
    paddingLeft: wp(5),
  },
  modal: {
    backgroundColor: Gcolor.white,
    height: hp(45),
    width: wp(56),
    alignSelf: 'flex-end',
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

export default Category;
