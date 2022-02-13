import { createStackNavigator } from "@react-navigation/stack";
import React, { Component } from "react";
import { StyleSheet } from "react-native";
import Animated from "react-native-reanimated";
import { GColors } from "../common";
import AccountDetails from "../screen/AccountDetails/AccountDetails";
import Profile from "../screen/AccountDetails/Profile";
const Stack = createStackNavigator();

export default class AccountDetailsStack extends Component {
  render() {
    return (
      <Animated.View style={StyleSheet.flatten([this.props.style, styles.mainContainer])}>
        <Stack.Navigator>
          <Stack.Screen name="AccountDetails" component={AccountDetails} options={{ headerShown: false }} />
          <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
        </Stack.Navigator>
      </Animated.View>
    );
  }
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    elevation: 3,
    backgroundColor: GColors.white,
  },
});
