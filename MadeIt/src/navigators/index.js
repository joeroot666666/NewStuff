import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { whiteTheme } from "../common/theme";
import AuthStack from "./AuthStack";
import DrawerNavigator from "./DrawerNavigator";

const Stack = createStackNavigator();
export default class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaProvider>
        <NavigationContainer theme={whiteTheme}>
          <Stack.Navigator>
            <Stack.Screen name="AuthStack" component={AuthStack} options={{ headerShown: false }} />
            <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});
