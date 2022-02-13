import { createStackNavigator } from "@react-navigation/stack";
import React, { Component } from "react";
import { StyleSheet } from "react-native";
import Animated from "react-native-reanimated";
import AddDeposit from "../screen/Home/AddDeposit";
import Home from "../screen/Home/Home";
import OrderDetails from "../screen/Home/OrderDetails";
import OrderRejectReason from "../screen/Home/OrderRejectReason";
import TaskDetails from "../screen/Home/TaskDetails";
import VerifyOtpCustomer from "../screen/Home/VerifyOtpCustomer";
import VerifyOtpVendor from "../screen/Home/VerifyOtpVendor";
import WithdrawBalance from "../screen/Home/WithdrawBalance";
import WithdrawHistory from "../screen/Home/WithdrawHistory";

const Stack = createStackNavigator();

export default class HomeStack extends Component {
  render() {
    return (
      <Animated.View style={StyleSheet.flatten([styles.mainContainer, this.props.style])}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="AddDeposit" component={AddDeposit} options={{ headerShown: false }} />
          <Stack.Screen name="WithdrawBalance" component={WithdrawBalance} options={{ headerShown: false }} />
          <Stack.Screen name="WithdrawHistory" component={WithdrawHistory} options={{ headerShown: false }} />
          <Stack.Screen name="TaskDetails" component={TaskDetails} options={{ headerShown: false }} />
          <Stack.Screen name="OrderDetails" component={OrderDetails} options={{ headerShown: false }} />
          <Stack.Screen name="OrderRejectReason" component={OrderRejectReason} options={{ headerShown: false }} />
          <Stack.Screen name="VerifyOtpVendor" component={VerifyOtpVendor} options={{ headerShown: false }} />
          <Stack.Screen name="VerifyOtpCustomer" component={VerifyOtpCustomer} options={{ headerShown: false }} />
        </Stack.Navigator>
      </Animated.View>
    );
  }
}
const styles = StyleSheet.create({
  mainContainer: {
    // flex: 1,
    // shadowOffset: { width: 0, height: 8 },
    // shadowOpacity: 0.3,
    // elevation: 3,
    // backgroundColor: GColors.white,
    flex: 1,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 5,
  },
});
