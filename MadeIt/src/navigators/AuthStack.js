import { createStackNavigator } from "@react-navigation/stack";
import React, { Component } from "react";
import LogIn from "../screen/Authentication/LogIn";
import TutorialScreen from "../screen/Authentication/TutorialScreen";
import StartScreen from "../screen/Authentication/StartScreen";
import DriverVehicalDetail from "../screen/Authentication/DriverVehicalDetail";
import DriverPersonalDetail from "../screen/Authentication/DriverPersonalDetail";
import DriverBankDetail from "../screen/Authentication/DriverBankDetail";
import ForgotPassword from "../screen/Authentication/ForgotPassword";

const Stack = createStackNavigator();

export default class AuthStack extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="TutorialScreen" component={TutorialScreen} options={{ headerShown: false }} />
        <Stack.Screen name="StartScreen" component={StartScreen} options={{ headerShown: false }} />
        <Stack.Screen name="DriverVehicalDetail" component={DriverVehicalDetail} options={{ headerShown: false }} />
        <Stack.Screen name="DriverPersonalDetail" component={DriverPersonalDetail} options={{ headerShown: false }} />
        <Stack.Screen name="DriverBankDetail" component={DriverBankDetail} options={{ headerShown: false }} />
        <Stack.Screen name="LogIn" component={LogIn} options={{ headerShown: false }} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }} />
      </Stack.Navigator>
    );
  }
}
