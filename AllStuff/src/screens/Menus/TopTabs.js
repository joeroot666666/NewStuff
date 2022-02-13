import * as React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Category from './Category';
import Addons from './Addons';
import InReview from './InReview';
import {Gcolor} from '../../common';

const Tab = createMaterialTopTabNavigator();

const TopTabs = () => {
  return (
    <Tab.Navigator
      //   initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: Gcolor.btncolor,
        tabBarInactiveTintColor: Gcolor.inputTitle,
        tabBarStyle: {
          backgroundColor: Gcolor.white,
        },
        tabBarLabelStyle: {
          textAlign: 'center',
          textTransform: 'none',
        },
        tabBarIndicatorStyle: {
          borderBottomWidth: 2,
          borderBottomColor: Gcolor.btncolor,
        },
      }}>
      <Tab.Screen
        name="Category"
        component={Category}
        options={{
          tabBarLabel: 'Category',
          // tabBarLabelStyle: { fontSize: 13 },
          // tabBarIcon: ({ color, size }) => (
          //   <MaterialCommunityIcons
          //       name="home"
          //       color={color}
          //       size={size}
          //     />
          // ),
        }}
        style={{width: '30%'}}
      />
      <Tab.Screen
        name="Addons"
        component={Addons}
        options={{
          tabBarLabel: 'Addons',
        }}
      />
      <Tab.Screen
        name="In Review"
        component={InReview}
        options={{
          tabBarLabel: 'In Review',
        }}
      />
    </Tab.Navigator>
  );
};

export default TopTabs;
