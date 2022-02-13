import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Tabs, Tab} from 'native-base';
import Review from './Review';
import Rejected from './Rejected';
import {Gcolor} from '../../common';

const InReview = () => {
  return (
    <ScrollView>
      <Tabs style={{width: '100%'}}>
        <Tab
          heading="In Review (10)"
          tabStyle={{backgroundColor: 'white'}}
          activeTextStyle={{color: Gcolor.btncolor, fontWeight: 'bold'}}
          textStyle={{color: Gcolor.longtitle, fontWeight: 'bold'}}
          activeTabStyle={{backgroundColor: 'white'}}>
          <Review />
        </Tab>
        <Tab
          heading="Rejected (12)"
          tabStyle={{backgroundColor: 'white'}}
          activeTabStyle={{backgroundColor: 'white'}}
          textStyle={{color: Gcolor.longtitle, fontWeight: 'bold'}}
          activeTextStyle={{color: Gcolor.btncolor, fontWeight: 'bold'}}>
          <Rejected />
        </Tab>
      </Tabs>
    </ScrollView>
  );
};

export default InReview;
