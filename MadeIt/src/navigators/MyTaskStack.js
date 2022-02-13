import { createStackNavigator } from "@react-navigation/stack";
import React, { Component } from "react";
import { StyleSheet } from "react-native";
import Animated from "react-native-reanimated";
import { GColors } from "../common";
import MyPastTasks from "../screen/MyTask/MyPastTasks";
import OrderPastDetails from "../screen/MyTask/OrderPastDetails";
const Stack = createStackNavigator();

export default class MyTaskStack extends Component {
  render() {
    return (
      <Animated.View style={StyleSheet.flatten([this.props.style, styles.mainContainer])}>
        <Stack.Navigator>
          <Stack.Screen name="AccountDetails" component={MyPastTasks} options={{ headerShown: false }} />
          <Stack.Screen name="OrderPastDetails" component={OrderPastDetails} options={{ headerShown: false }} />
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
