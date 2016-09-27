import React, { Component } from 'react';
import {
  StyleSheet,
  ListView,
  Text,
  View
} from 'react-native'

import AllAdventuresList from './AllAdventuresList'

const AllAdventuresLayout = (props) => {
  return (
    <View>
      <AllAdventuresList nav={props.navigator}/>
    </View>
  )
}

export default AllAdventuresLayout
