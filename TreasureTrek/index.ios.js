/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  AppRegistry,
  Text,
  View
} from 'react-native';

// App components

// Test Routes
import MyAdventures from './src/components/MyAdventures/myAdventuresContainer';

class TreasureTrek extends Component {
  render() {
    var authRoute = {
      title: "My Adventures",
      component: MyAdventures
    }
    return (
      <NavigatorIOS
        initialRoute ={ authRoute }
        style={{ flex: 1 }}
      />
    );
  }
}




AppRegistry.registerComponent('TreasureTrek', () => TreasureTrek);
