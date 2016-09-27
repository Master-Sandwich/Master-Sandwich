import React, { Component } from 'react';
import {
  NavigatorIOS,
  StyleSheet,
  ListView,
  Text,
  View
} from 'react-native'

import AllAdventuresLayout from './AllAdventuresLayout'

// Navigator wrapper
// Root component for section
export default class AllAdventures extends Component {
  constructor(props){
    super(props)

  }

  componentDidMount(){
    console.log("component did mount")
  }

  render(){
    var layoutRoute = {
      title: "Welcome to All Adventures",
      component: AllAdventuresLayout
    }
    return (
      <NavigatorIOS
      initialRoute={layoutRoute}
      style={{ flex: 1 }}
      />
    )
  }
}
