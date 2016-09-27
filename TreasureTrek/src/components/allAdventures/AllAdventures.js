import React, { Component } from 'react';
import {
  NavigatorIOS,
  StyleSheet,
  ListView,
  Text,
  View
} from 'react-native'

import AllAdventuresList from './AllAdventuresList'

// Navigator wrapper
// Root component for section
export default class AllAdventures extends Component {
  constructur(props){
    super(props)

  }

  render(){
    return (
      <NavigatorIOS
      initialRoute={}
      style={{ flex : 1 }}
      />
    )
  }
}


const AllAdventuresLayout = (props) => {

  return (
    <View>
      // Header?
      <AllAdventuresList nav={props.navigator}/>
    </View>
  )
}
