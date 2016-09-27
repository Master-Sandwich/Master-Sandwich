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
<<<<<<< c97be5f1e4249b9169dd4a90a912ae9ffd34b227
=======
import Auth from './src/components/auth/Auth'
import AllAdventures from './src/components/allAdventures/AllAdventures'
>>>>>>> (clean up) layout

// Test Routes
import MyAdventures from './src/components/MyAdventures/myAdventuresContainer';

class TreasureTrek extends Component {
  render() {
    var authRoute = {
      title: "My Adventures",
      component: MyAdventures
    }
    return (
<<<<<<< c97be5f1e4249b9169dd4a90a912ae9ffd34b227
      <NavigatorIOS
        initialRoute ={ authRoute }
        style={{ flex: 1 }}
      />
=======
      <View>
        <AllAdventuresLayout/>
      </View>
>>>>>>> (clean up) layout
    );
  }
}




AppRegistry.registerComponent('TreasureTrek', () => TreasureTrek);
