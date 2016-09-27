import React from 'react';
import {Text, View, TouchableHighlight} from 'react-native';

// App components
import TempAcceptView from './TempAcceptView'

const AllAdventureDetail = (props) => {

  var routeAcceptView = {
    title: "You accepted " + props.adven.name,
    component: TempAcceptView,
    passProps: {
      adven: props.adven
    }
  }

  var toAcceptView = function (){
    props.nav.push(routeAcceptView)
  }

  return (
      <View style={{ margin: 70}}>
        <Text>{props.adven.details.OpeningRiddle}</Text>
        <Text>{props.adven.details.location}</Text>
        <TouchableHighlight onPress={toAcceptView}>
          <Text>Accept</Text>
        </TouchableHighlight>
      </View>
    );
};

export default AllAdventureDetail
