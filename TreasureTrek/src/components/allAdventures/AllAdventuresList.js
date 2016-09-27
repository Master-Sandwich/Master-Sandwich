import React, { Component } from 'react';
import {
  StyleSheet,
  ListView,
  Text,
  View
} from 'react-native'

// App components
import AllAdventureLI from './AllAdventureLI'

// Dummy Data
var dummy = [
  {
    adven_id: "1",
    name: "Where'd sparkles go?",
    details: {
      location: "New York, CA",
      OpeningRiddle: "Whatever the opening riddle is"
    }
  },
  {
    adven_id: "2",
    name: "Buried Treasure",
    details: {
      location: "Seattle, WA",
      OpeningRiddle: "Whatever the opening riddle is"
    }
  },
  {
    adven_id: "3",
    name: "Catch me if you can!",
    details: {
      location: "Austin, TX",
      OpeningRiddle: "Whatever the opening riddle is"
    }
  }
];

export default class AllAdventuresList extends Component {
  constructor(props){
    super(props)
    this.renderRowCB = this.renderRowCB.bind(this)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      data: ds.cloneWithRows(dummy)
    }
  }


  renderRowCB(adven){
<<<<<<< ee6bc5bcfab4115dc10c4abcf58c8878164ffb07
<<<<<<< e52524068bda7c6abab0a6a51884bf290d05cc85
    console.log('Props.navigator: ', this.props.navigator)
    return <AdvenLI nav={this.props.navigator} adven={adven}/>
=======
    return <AdvenLI nav={this.props.nav} adven={adven}/>
>>>>>>> (test)
=======
    console.log(this.props)
    return <AllAdventureLI nav={this.props.nav} adven={adven}/>
>>>>>>> (clean up) returned to old routing
  }

  render() {
    return (
      <View>
        <ListView
          style={{ margin: 70 }}
          automaticallyAdjustContentInsets={false}
          property={"from list view"}
          dataSource={this.state.data}
          renderRow={this.renderRowCB}
        />
      </View>
    );
  }
}
