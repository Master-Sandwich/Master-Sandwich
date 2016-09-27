import React from 'react';
import {Text, View, TouchableHighlight} from 'react-native';

// App components
import AllAdventureDetail from './AllAdventureDetail'


const AllAdventureLI = (props) => {

  const adventureDetailRoute = {
    title: props.adven.name + " Card",
    component: AllAdventureDetail,
    passProps: {
      nav: props.nav,
      adven: props.adven
    }
  }

<<<<<<< ee6bc5bcfab4115dc10c4abcf58c8878164ffb07
  var toAdvenCard = function (){
    props.nav.push(advenCardRoute);
    console.log('PROPS.nav: ', props.nav);
    console.log('PROPS: ', props)
=======
  var toAllAdventureDetail = function (){
    props.nav.push(adventureDetailRoute)
>>>>>>> (clean up) returned to old routing
  }

  console.log(props.adven.name)
  return (
    <TouchableHighlight
    onPress={toAllAdventureDetail}
    underlayColor={'#00ffff'}>
      <View style={style}>
        <Text>{props.adven.name}</Text>
        <Text style={{ fontSize: 9 }}>{props.adven.details.location}</Text>
      </View>
    </TouchableHighlight>
    );
};

var style = {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 30
}

export default AllAdventureLI
