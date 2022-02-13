import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Picker,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {Gcolor, hp, wp, commonFont, icons, images} from '../../common';
import {GTextInput, GButton} from '../../common/GComponents';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import ImagePicker from 'react-native-image-crop-picker';

const Profile = () => {
  const [selectedState, setSelectedState] = useState('Select State');
  const [selectedCountry, setSelectedCountry] = useState('Select Country');
  const [imgs, setImgs] = useState('');
  const [imgs1, setImgs1] = useState('');
  const [postalCode, setPostalCode] = useState('123456');
  const [latitude, setLatitude] = useState('37.1337418”N');
  const [longitude, setLongitude] = useState('37.1337418”N');
  const [address2, setAddress2] = useState('');
  const [city, setCity] = useState('Bangalore');
  const [address1, setAddress1] = useState(
    'No 19, Ananda Nagar, Bangalore, India',
  );

  const imagePick = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      setImgs(image.path);
    });
  };

  const imagePicks = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(images => {
      console.log(images);
      setImgs1(images.path);
    });
  };

  useEffect(() => {
    setImgs('');
    setImgs1('');
  }, []);

  return (
    <ScrollView style={{backgroundColor: Gcolor.placeholdertext}}>
      <View style={styles.body}>
        <Text style={styles.addtxt}>Address</Text>
        <Text style={styles.add1}>Address line 1</Text>
        <GTextInput onChangeText={setAddress1} value={address1} />
        <Text style={styles.add1}>Address line 2</Text>
        <GTextInput
          onChangeText={setAddress2}
          value={address2}
          placeholder={'Eg., New Year Sale'}
          placeholderTextColor={Gcolor.grey3}
        />
        <Text style={styles.add1}>City</Text>
        <GTextInput onChangeText={setCity} value={city} />
        <Text style={styles.add1}>State</Text>
        <View style={styles.pick}>
          <Picker
            selectedValue={selectedState}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedState(itemValue)
            }>
            <Picker.Item label="Karnataka" value="karnataka" />
            <Picker.Item label="Mumbai" value="mumbai" />
          </Picker>
        </View>
        <Text style={styles.add1}>Country</Text>
        <View style={styles.pick}>
          <Picker
            selectedValue={selectedCountry}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedCountry(itemValue)
            }>
            <Picker.Item label="India" value="india" />
            <Picker.Item label="Pakistan" value="pakistan" />
          </Picker>
        </View>
        <Text style={styles.add1}>Postal Code</Text>
        <GTextInput onChangeText={setPostalCode} value={postalCode} />
        <Text style={styles.addmap}>Address on map</Text>
        <Text style={styles.add1}>Latitude</Text>
        <GTextInput onChangeText={setLatitude} value={latitude} />
        <Text style={styles.add1}>Longitude</Text>
        <GTextInput onChangeText={setLongitude} value={longitude} />
        <View style={styles.view}>
          <Text style={styles.onmap}>On Map</Text>
          <Image
            style={{marginLeft: wp(32), marginTop: hp(0.5)}}
            source={icons.Vector}
          />
          <Text style={styles.updatelocation}>Update Location</Text>
        </View>
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: 21.1959,
            longitude: 72.7933,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          }}
          zoomEnabled
          minZoomLevel={15}>
          <Marker coordinate={{latitude: 21.1959, longitude: 72.7933}} />
        </MapView>
        <Text style={styles.addmap}>Restaurant Images</Text>
        <Text style={styles.add1}>
          Images of resolution 148x148 is required
        </Text>
        <View style={{flexDirection: 'column'}}>
          <View style={styles.img}>
            <Image source={images.Image1} />
            <Image source={images.Image2} />
          </View>
          <View style={styles.img}>
            <Image source={images.Image3} />

            {imgs != '' ? (
              <Image style={styles.imgpick} source={{uri: imgs}} />
            ) : (
              <TouchableOpacity onPress={() => imagePick()}>
                <ImageBackground style={styles.imgback} source={images.BackImg}>
                  <Image source={icons.Download} />
                  <Text style={styles.add1}>Add Image</Text>
                </ImageBackground>
              </TouchableOpacity>
            )}
          </View>
        </View>
        <Text style={styles.addmap}>Menu Images</Text>
        <Text style={styles.add1}>
          Images of resolution 148x148 is required
        </Text>
        <View style={{flexDirection: 'column'}}>
          <View style={styles.img}>
            <Image source={images.Menu1} />
            <Image source={images.Menu2} />
          </View>
          <View style={styles.img}>
            <Image source={images.Menu3} />
            {imgs1 != '' ? (
              <Image style={styles.imgpick} source={{uri: imgs1}} />
            ) : (
              <TouchableOpacity onPress={() => imagePicks()}>
                <ImageBackground style={styles.imgback} source={images.BackImg}>
                  <Image source={icons.Download} />
                  <Text style={styles.add1}>Add Image</Text>
                </ImageBackground>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
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
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  body: {
    backgroundColor: Gcolor.white,
    width: wp(87),
    alignSelf: 'center',
    marginTop: hp(2),
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    paddingBottom: hp(3),
  },
  btnview: {
    flexDirection: 'row',
    marginTop: hp(6),
    alignContent: 'center',
    justifyContent: 'space-between',
    backgroundColor: Gcolor.white,
    width: '100%',
  },
  imgback: {
    width: wp(37),
    height: hp(20),
    alignItems: 'center',
    justifyContent: 'center',
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
  imgpick: {
    height: hp(20),
    width: wp(37),
    borderRadius: 10,
  },
  btn1: {
    backgroundColor: Gcolor.btncolor,
    width: wp(41),
    height: hp(7),
    borderColor: Gcolor.btncolor,
    marginBottom: hp(1.5),
    marginRight: wp(4),
  },
  img: {
    flexDirection: 'row',
    marginTop: hp(2),
    marginLeft: wp(5),
    justifyContent: 'space-between',
    marginRight: wp(5),
  },
  updatelocation: {
    fontSize: commonFont.fs14,
    fontWeight: 'bold',
    fontFamily: commonFont.LRegular,
    color: Gcolor.btncolor,
    marginRight: wp(4),
  },
  view: {
    marginTop: hp(2.8),
    flexDirection: 'row',
    marginLeft: wp(4),
    justifyContent: 'space-between',
  },
  picker: {
    height: hp(6.5),
    width: wp(70),
  },
  onmap: {
    fontSize: commonFont.fs14,
    fontWeight: '400',
    fontFamily: commonFont.LRegular,
    color: Gcolor.inputTitle,
  },
  map: {
    width: '95%',
    height: hp(22),
    marginTop: hp(2),
    alignSelf: 'center',
  },
  addtxt: {
    marginTop: hp(2),
    marginLeft: wp(4),
    fontFamily: commonFont.LRegular,
    fontWeight: 'bold',
    fontSize: commonFont.fs16,
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
  addmap: {
    marginTop: hp(3.5),
    fontFamily: commonFont.LRegular,
    fontSize: commonFont.fs16,
    fontWeight: 'bold',
    color: Gcolor.addressTxt,
    marginLeft: wp(4),
  },
});
