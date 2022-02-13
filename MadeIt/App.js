import React, { Component } from "react";
import { View } from "react-native";
import FlashMessage from "react-native-flash-message";
import SplashScreen from "react-native-splash-screen";
import Application from "./src/navigators";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    setTimeout(() => {
      SplashScreen.hide();
    }, 600);
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Application />
        <FlashMessage position="top" />
      </View>
    );
  }
}
