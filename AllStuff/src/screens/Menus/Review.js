import React from 'react';
import {View, Text, ScrollView, StyleSheet, Image} from 'react-native';
import {Gcolor, hp, wp, icons, images, commonFont} from '../../common';

const Review = () => {
  return (
    <ScrollView style={{backgroundColor: Gcolor.placeholdertext}}>
      <View style={styles.view1}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.txt}>Items</Text>
          <Image
            style={{marginTop: hp(3), marginRight: wp(4)}}
            source={icons.TopArrow}
          />
        </View>
        <View style={styles.apple}>
          <Image style={{marginTop: hp(0.5)}} source={icons.Veg} />
          <Text style={styles.ajuice}>Apple Juice</Text>
          <Image style={styles.rightarrow} source={icons.RightArrow} />
          <Image style={styles.juiceimg} source={images.Juice} />
        </View>
        <Text style={styles.drink}>Drinks</Text>
        <View style={styles.viewchild}>
          <Text style={styles.cfont}>Available Time</Text>
          <Text style={styles.time}>09:00AM to 12:00PM</Text>
        </View>
        <View style={[styles.viewchild, {marginTop: hp(1.5)}]}>
          <Text style={styles.cfont}>Price</Text>
          <Text style={styles.time}>₹ 123.34</Text>
        </View>
        <View style={[styles.viewchild, {marginTop: hp(1.5)}]}>
          <Text style={styles.cfont}>Date</Text>
          <Text style={styles.time}>12 Oct, 21 12.23PM</Text>
        </View>
        <View style={styles.line} />
        <View style={styles.apple}>
          <Image style={{marginTop: hp(0.5)}} source={icons.Veg} />
          <Text style={styles.ajuice}>Apple Juice</Text>
          <Image style={styles.rightarrow} source={icons.RightArrow} />
          <Image style={styles.juiceimg} source={images.Juice} />
        </View>
        <Text style={styles.drink}>Drinks</Text>
        <View style={styles.viewchild}>
          <Text style={styles.cfont}>Available Time</Text>
          <Text style={styles.time}>09:00AM to 12:00PM</Text>
        </View>
        <View style={[styles.viewchild, {marginTop: hp(1.5)}]}>
          <Text style={styles.cfont}>Price</Text>
          <Text style={styles.time}>₹ 123.34</Text>
        </View>
        <View style={[styles.viewchild, {marginTop: hp(1.5)}]}>
          <Text style={styles.cfont}>Date</Text>
          <Text style={styles.time}>12 Oct, 21 12.23PM</Text>
        </View>
        <View style={styles.line} />
        <View style={styles.apple}>
          <Image style={{marginTop: hp(0.5)}} source={icons.Veg} />
          <Text style={styles.ajuice}>Apple Juice</Text>
          <Image style={styles.rightarrow} source={icons.RightArrow} />
          <Image style={styles.juiceimg} source={images.Juice} />
        </View>
        <Text style={styles.drink}>Drinks</Text>
        <View style={styles.viewchild}>
          <Text style={styles.cfont}>Available Time</Text>
          <Text style={styles.time}>09:00AM to 12:00PM</Text>
        </View>
        <View style={[styles.viewchild, {marginTop: hp(1.5)}]}>
          <Text style={styles.cfont}>Price</Text>
          <Text style={styles.time}>₹ 123.34</Text>
        </View>
        <View style={[styles.viewchild, {marginTop: hp(1.5)}]}>
          <Text style={styles.cfont}>Date</Text>
          <Text style={styles.time}>12 Oct, 21 12.23PM</Text>
        </View>
      </View>
      <View style={styles.view1}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.txt}>Add-Ons</Text>
          <Image
            style={{marginTop: hp(3), marginRight: wp(4)}}
            source={icons.TopArrow}
          />
        </View>
        <View style={styles.apple}>
          <Image style={{marginTop: hp(0.5)}} source={icons.Veg} />
          <Text style={styles.ajuice}>Apple Juice</Text>
          <Image style={styles.rightarrow} source={icons.RightArrow} />
          <Image style={styles.juiceimg} source={images.Juice} />
        </View>
        <Text style={styles.drink}>Drinks</Text>
        <View style={styles.viewchild}>
          <Text style={styles.cfont}>Price</Text>
          <Text style={styles.time}>₹ 123.34</Text>
        </View>
        <View style={[styles.viewchild, {marginTop: hp(1.5)}]}>
          <Text style={styles.cfont}>GST</Text>
          <Text style={styles.time}>12%</Text>
        </View>
        <View style={[styles.viewchild, {marginTop: hp(1.5)}]}>
          <Text style={styles.cfont}>Date</Text>
          <Text style={styles.time}>12 Oct, 21 12.23PM</Text>
        </View>
        <View style={styles.line} />
        <View style={styles.apple}>
          <Image style={{marginTop: hp(0.5)}} source={icons.Veg} />
          <Text style={styles.ajuice}>Apple Juice</Text>
          <Image style={styles.rightarrow} source={icons.RightArrow} />
          <Image style={styles.juiceimg} source={images.Juice} />
        </View>
        <Text style={styles.drink}>Drinks</Text>
        <View style={styles.viewchild}>
          <Text style={styles.cfont}>Price</Text>
          <Text style={styles.time}>₹ 123.34</Text>
        </View>
        <View style={[styles.viewchild, {marginTop: hp(1.5)}]}>
          <Text style={styles.cfont}>GST</Text>
          <Text style={styles.time}>12%</Text>
        </View>
        <View style={[styles.viewchild, {marginTop: hp(1.5)}]}>
          <Text style={styles.cfont}>Date</Text>
          <Text style={styles.time}>12 Oct, 21 12.23PM</Text>
        </View>
        <View style={styles.line} />
        <View style={styles.apple}>
          <Image style={{marginTop: hp(0.5)}} source={icons.Veg} />
          <Text style={styles.ajuice}>Apple Juice</Text>
          <Image style={styles.rightarrow} source={icons.RightArrow} />
          <Image style={styles.juiceimg} source={images.Juice} />
        </View>
        <Text style={styles.drink}>Drinks</Text>
        <View style={styles.viewchild}>
          <Text style={styles.cfont}>Price</Text>
          <Text style={styles.time}>₹ 123.34</Text>
        </View>
        <View style={[styles.viewchild, {marginTop: hp(1.5)}]}>
          <Text style={styles.cfont}>GST</Text>
          <Text style={styles.time}>12%</Text>
        </View>
        <View style={[styles.viewchild, {marginTop: hp(1.5)}]}>
          <Text style={styles.cfont}>Date</Text>
          <Text style={styles.time}>12 Oct, 21 12.23PM</Text>
        </View>
      </View>
      <View style={styles.lastiview}>
        <Image source={icons.Time} />
        <Text style={styles.ajuice}>
          Item under review, May take upto 24hr to review
        </Text>
      </View>
    </ScrollView>
  );
};

export default Review;

const styles = StyleSheet.create({
  view1: {
    backgroundColor: Gcolor.white,
    marginTop: hp(2),
    height: hp(85),
    width: wp(87),
    alignSelf: 'center',
    marginBottom: hp(2),
    borderRadius: 12,
  },
  lastiview: {
    flexDirection: 'row',
    backgroundColor: Gcolor.liteblue,
    height: hp(6.5),
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  line: {
    borderBottomColor: Gcolor.borderColors,
    borderBottomWidth: 1,
    width: '100%',
    marginTop: hp(1.8),
  },
  time: {
    color: Gcolor.addressTxt,
    fontFamily: commonFont.LRegular,
    fontSize: commonFont.fs14,
    fontWeight: '500',
    marginRight: wp(4),
  },
  rightarrow: {
    marginLeft: wp(3),
    marginTop: hp(1),
  },
  viewchild: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp(2.8),
    marginLeft: wp(3),
  },
  juiceimg: {
    position: 'absolute',
    right: 10,
  },
  cfont: {
    color: Gcolor.grey3,
    fontFamily: commonFont.LRegular,
    fontSize: commonFont.fs14,
  },
  ajuice: {
    color: Gcolor.black3,
    fontFamily: commonFont.LRegular,
    fontSize: commonFont.fs14,
    marginLeft: wp(4),
  },
  apple: {
    flexDirection: 'row',
    marginTop: hp(3),
    marginLeft: wp(3),
  },
  txt: {
    marginLeft: wp(3.5),
    marginTop: hp(2),
    color: Gcolor.addressTxt,
    fontFamily: commonFont.LRegular,
    fontSize: commonFont.fs16,
    fontWeight: 'bold',
  },
  drink: {
    marginTop: hp(1.5),
    marginLeft: wp(4),
    height: hp(3),
    width: wp(11),
    backgroundColor: 'rgba(89, 126, 247, 0.1)',
    color: Gcolor.btncolor,
    fontFamily: commonFont.LRegular,
    fontSize: commonFont.fs12,
  },
});
