import React, {Component} from 'react';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AuthStack from './AuthStack';
import MenuStack from './MenuStack';
import AddNewMenuStack from './AddNewMenuStack';
import {Gcolor, hp, icons, wp} from '../common';

const Stack = createStackNavigator();
export default class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="AddNewMenuStack"
              component={AddNewMenuStack}
              options={{
                title: 'Add New Items',
                headerStyle: {
                  backgroundColor: Gcolor.white,
                },
                headerTintColor: Gcolor.addressTxt,
                headerLeft: () => (
                  <Image source={icons.Close} style={{marginLeft: wp(3)}} />
                ),
              }}
            />

            <Stack.Screen
              name="MenuStack"
              component={MenuStack}
              options={{
                title: 'Menu', //Set Header Title
                headerStyle: {
                  backgroundColor: Gcolor.white, //Set Header color
                },
                headerTintColor: Gcolor.headerTextColor, //Set Header text color
                headerTitleStyle: {
                  fontWeight: 'bold', //Set Header text style
                },
                headerRight: () => (
                  <Image source={icons.Bell} style={{marginRight: wp(2)}} />
                ),
              }}
            />
            <Stack.Screen
              name="AuthStack"
              component={AuthStack}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    );
  }
}
