import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {wp, hp, commonFont, Gcolor, icons, images} from '../../../common';
import {GTextInput, GButton} from '../../../common/GComponents';

const AddNewItem3 = props => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    reRenderSomething = props.navigation.addListener('focus', async () => {
      setIndex(0);
    });
  }, []);

  const checkSwitch = param => {
    switch (param) {
      case 1:
        One();
        break;
      case 2:
        Two();
        break;
      case 3:
        Three();
        break;
      case 4:
        Four();
        break;
      case 5:
        Five();
        break;
      case 6:
        Six();
        break;
      default:
        Alert.alert('NOT FOUND');
    }
  };

  const One = () => {
    alert('One Click');
  };

  const Two = () => {
    alert('Two Click');
  };

  const Three = () => {
    alert('Three Click');
  };

  const Four = () => {
    alert('Four Click');
  };

  const Five = () => {
    alert('Five Click');
  };

  const Six = () => {
    alert('Six Click');
  };

  return (
    <ScrollView style={{backgroundColor: Gcolor.placeholdertext}}>
      <View style={styles.view}>
        <View style={{flexDirection: 'row'}}>
          <Image style={styles.picon} source={icons.Plus} />
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.bdetails}>Add-on’s & Variants</Text>
            <Text style={styles.bcontent}>Customise, Combi items</Text>
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
        <Text style={styles.maindetail}>Select a Variants for this item </Text>
        <View style={styles.horline} />
        <Text style={styles.add1}>
          Lorem ipsum dolor sit amet, consectetur adipisc elit. Nunc risus, orci
          id aliquet faucibus nullamip ipsum metus. Enim nibh habitant sem
          venenatis quisque ut.
        </Text>
        <TouchableOpacity onPress={() => setIndex(1)}>
          <View
            style={[
              styles.boxview,
              {
                borderColor:
                  index === 1 ? Gcolor.btncolor : Gcolor.borderColors,
              },
            ]}>
            <View style={styles.row}>
              <Image source={images.Goti} />
              <View style={{flexDirection: 'column', marginLeft: wp(4)}}>
                <Text style={[styles.add0, {fontWeight: 'bold'}]}>
                  Quantity
                </Text>
                <Text style={[styles.add0, {fontSize: commonFont.fs12}]}>
                  Quantity variation like small, medium, large, etc
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIndex(2)}>
          <View
            style={[
              styles.boxview,
              {
                marginTop: hp(2),
                borderColor:
                  index === 2 ? Gcolor.btncolor : Gcolor.borderColors,
              },
            ]}>
            <View style={styles.row}>
              <Image source={images.Food} />
              <View style={{flexDirection: 'column', marginLeft: wp(4)}}>
                <Text style={[styles.add0, {fontWeight: 'bold'}]}>
                  Preparation type
                </Text>
                <Text style={[styles.add0, {fontSize: commonFont.fs12}]}>
                  Quantity variation like small, medium, large, etc
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIndex(3)}>
          <View
            style={[
              styles.boxview,
              {
                marginTop: hp(2),
                borderColor:
                  index === 3 ? Gcolor.btncolor : Gcolor.borderColors,
              },
            ]}>
            <View style={styles.row}>
              <Image source={images.Glass} />
              <View style={{flexDirection: 'column', marginLeft: wp(4)}}>
                <Text style={[styles.add0, {fontWeight: 'bold'}]}>Size</Text>
                <Text style={[styles.add0, {fontSize: commonFont.fs12}]}>
                  Quantity variation like small, medium, large, etc
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIndex(4)}>
          <View
            style={[
              styles.boxview,
              {
                marginTop: hp(2),
                borderColor:
                  index === 4 ? Gcolor.btncolor : Gcolor.borderColors,
              },
            ]}>
            <View style={styles.row}>
              <Image source={images.Base} />
              <View style={{flexDirection: 'column', marginLeft: wp(4)}}>
                <Text style={[styles.add0, {fontWeight: 'bold'}]}>Base</Text>
                <Text style={[styles.add0, {fontSize: commonFont.fs12}]}>
                  Quantity variation like small, medium, large, etc
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIndex(5)}>
          <View
            style={[
              styles.boxview,
              {
                marginTop: hp(2),
                borderColor:
                  index === 5 ? Gcolor.btncolor : Gcolor.borderColors,
              },
            ]}>
            <View style={styles.row}>
              <Image source={images.Bowl} />
              <View style={{flexDirection: 'column', marginLeft: wp(4)}}>
                <Text style={[styles.add0, {fontWeight: 'bold'}]}>Rice</Text>
                <Text style={[styles.add0, {fontSize: commonFont.fs12}]}>
                  Quantity variation like small, medium, large, etc
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIndex(6)}>
          <View
            style={[
              styles.boxview,
              {
                marginTop: hp(2),
                borderColor:
                  index === 6 ? Gcolor.btncolor : Gcolor.borderColors,
              },
            ]}>
            <View style={styles.row}>
              <Image source={images.Plus} />
              <View style={{flexDirection: 'column', marginLeft: wp(4)}}>
                <Text style={[styles.add0, {fontWeight: 'bold'}]}>
                  Make Your Own
                </Text>
                <Text style={[styles.add0, {fontSize: commonFont.fs12}]}>
                  Quantity variation like small, medium, large, etc
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.btnview}>
        <GButton
          btnStyle={styles.btn}
          textStyle={{color: Gcolor.btncolor}}
          text={'Back'}
          onPress={() => props.navigation.navigate('AddNewItem2')}
        />
        {index === 0 ? (
          <GButton
            btnStyle={styles.btn1s}
            textStyle={{color: Gcolor.white}}
            text={'Next Step'}
            onPress={() => {}}
          />
        ) : (
          <GButton
            btnStyle={styles.btn1}
            textStyle={{color: Gcolor.white}}
            text={'Next Step'}
            onPress={() => props.navigation.navigate('AddNewItem4')}
          />
        )}
      </View>
    </ScrollView>
  );
};

export default AddNewItem3;

const styles = StyleSheet.create({
  view: {
    marginTop: hp(2),
    width: wp(87),
    height: hp(12.5),
    backgroundColor: Gcolor.white,
    alignSelf: 'center',
    borderRadius: 12,
  },
  row: {
    flexDirection: 'row',
    marginLeft: wp(3),
    marginTop: hp(1.5),
  },
  mainview: {
    height: hp(108),
    width: wp(87),
    alignSelf: 'center',
    borderRadius: 12,
    backgroundColor: Gcolor.white,
    marginTop: hp(1.5),
    marginBottom: wp(3),
  },
  picon: {
    marginLeft: wp(4),
    marginTop: hp(2),
    position: 'relative',
    top: 10,
  },
  horline: {
    borderBottomColor: Gcolor.borderColors,
    borderBottomWidth: 1,
    marginTop: hp(2.2),
    width: '100%',
    alignSelf: 'center',
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
  add0: {
    fontSize: commonFont.fs14,
    fontWeight: '400',
    fontFamily: commonFont.LRegular,
    color: Gcolor.inputTitle,
    marginTop: hp(1),
    width: wp(58),
  },
  boxview: {
    marginTop: hp(3),
    marginLeft: wp(4),
    width: wp(78),
    height: hp(12),
    borderRadius: 8,
    borderColor: Gcolor.borderColors,
    borderWidth: 1,
  },
  btnview: {
    flexDirection: 'row',
    marginTop: hp(2),
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
  btn1s: {
    backgroundColor: Gcolor.btncolor,
    width: wp(41),
    height: hp(7),
    borderColor: Gcolor.btncolor,
    marginBottom: hp(1.5),
    marginRight: wp(4),
    opacity: 0.6,
  },
});
