import React, {Component} from 'react';
import {Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Signin from '../screens/AuthenticationScreens/Signin';
import LostPassword from '../screens/AuthenticationScreens/LostPassword';
import OtpVerification from '../screens/AuthenticationScreens/OtpVerification';
import ResetPassword from '../screens/AuthenticationScreens/ResetPassword';
import SuccessfulPasswordReset from '../screens/AuthenticationScreens/SuccessfulPasswordReset';
import Graph from '../screens/AuthenticationScreens/Graph';
import Profile from '../screens/AuthenticationScreens/Profile';
import RestaurantsTiming from '../screens/AuthenticationScreens/RestaurantsTiming';
import {icons, Gcolor} from '../common';

const Stack = createStackNavigator();

export default class AuthStack extends Component {
  render() {
    return (
      <Stack.Navigator initialRouteName="Signin">
        <Stack.Screen
          name="Signin"
          component={Signin}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LostPassword"
          component={LostPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OtpVerification"
          component={OtpVerification}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ResetPassword"
          component={ResetPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SuccessfulPasswordReset"
          component={SuccessfulPasswordReset}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Graph"
          component={Graph}
          options={{
            title: 'Total Sales', //Set Header Title
            headerStyle: {
              backgroundColor: Gcolor.white, //Set Header color
            },
            headerTintColor: Gcolor.headerTextColor, //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
            headerRight: () => (
              <Image source={icons.Bell} style={{marginRight: 8}} />
            ),
          }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            title: 'Address & Location',
            headerStyle: {
              backgroundColor: Gcolor.white,
            },
            headerTintColor: Gcolor.headerTextColor,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="RestaurantsTiming"
          component={RestaurantsTiming}
          options={{
            title: 'Restaurant Timings',
            headerStyle: {
              backgroundColor: Gcolor.white,
            },
            headerTintColor: Gcolor.headerTextColor,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    );
  }
}
