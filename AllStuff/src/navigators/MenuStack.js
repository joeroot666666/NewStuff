import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Category from '../screens/Menus/Category';
import InReview from '../screens/Menus/InReview';
import Addons from '../screens/Menus/Addons';
import TopTabs from '../screens/Menus/TopTabs';

const Stack = createStackNavigator();

export default class MenuStack extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="TopTabs"
          component={TopTabs}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  }
}
