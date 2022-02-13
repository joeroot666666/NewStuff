import React, {Component} from 'react';
import {View} from 'react-native';
import Application from './src/navigators';
import FlashMessage from 'react-native-flash-message';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Application />
        <FlashMessage position="top" />
      </View>
    );
  }
}
