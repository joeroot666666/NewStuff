import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AddNewItem1 from '../screens/Menus/AddNewMenuItems/AddNewItem1';
import AddNewItem2 from '../screens/Menus/AddNewMenuItems/AddNewItem2';
import AddNewItem3 from '../screens/Menus/AddNewMenuItems/AddNewItem3';
import AddNewItem4 from '../screens/Menus/AddNewMenuItems/AddNewItem4';
import AddNewItem4Child from '../screens/Menus/AddNewMenuItems/AddNewItem4Child';
import AddNewItem5 from '../screens/Menus/AddNewMenuItems/AddNewItem5';
import AddNewItem6 from '../screens/Menus/AddNewMenuItems/AddNewItem6';
import AddNewItem7 from '../screens/Menus/AddNewMenuItems/AddNewItem7';
import AddNewItem8 from '../screens/Menus/AddNewMenuItems/AddNewItem8';
import AddNewItem9 from '../screens/Menus/AddNewMenuItems/AddNewItem9';

const Stack = createStackNavigator();

export default class AddNewMenuStack extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="AddNewItem1"
          component={AddNewItem1}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddNewItem2"
          component={AddNewItem2}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddNewItem3"
          component={AddNewItem3}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddNewItem4"
          component={AddNewItem4}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddNewItem4Child"
          component={AddNewItem4Child}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddNewItem5"
          component={AddNewItem5}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddNewItem6"
          component={AddNewItem6}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddNewItem7"
          component={AddNewItem7}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddNewItem8"
          component={AddNewItem8}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddNewItem9"
          component={AddNewItem9}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  }
}
