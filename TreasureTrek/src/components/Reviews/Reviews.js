import React from 'react';
import {Text, View, ScrollView, TouchableHighlight, Image, Linking} from 'react-native';
import AdventureSolution from '../MyAdventures/AdventureSolution.js';

const Reviews = (props) => {

  const myAdventureRoute = {
    name: "Riddle List",
    component: AdventureSolution,
    passProps: {
      nav: props.nav,
      myAdventure: props.myAdventure
    }
  };

  var toAdventureSolution = function() {
    props.nav.toRoute(myAdventureRoute);
  }

  return (
    <View>
      <View>
        <View>

          <View style={styles.viewStyle}>
              <Image style={styles.arrowsStyle} source={require('../../resources/select_star.png')} />
              <Image style={styles.arrowsStyle} source={require('../../resources/select_star.png')} />
              <Image style={styles.arrowsStyle} source={require('../../resources/select_star.png')} />
              <Image style={styles.arrowsStyle} source={require('../../resources/select_star.png')} />
              <Image style={styles.arrowsStyle} source={require('../../resources/select_star.png')} />
            <View style={styles.detailsStyle}>
              <Text style={styles.titleStyle}>({props.stars.fiveStar})</Text>
            </View>
          </View>

          <View style={styles.viewStyle}>
              <Image style={styles.arrowsStyle} source={require('../../resources/select_star.png')} />
              <Image style={styles.arrowsStyle} source={require('../../resources/select_star.png')} />
              <Image style={styles.arrowsStyle} source={require('../../resources/select_star.png')} />
              <Image style={styles.arrowsStyle} source={require('../../resources/select_star.png')} />
            <View style={styles.detailsStyle}>
              <Text style={styles.titleStyle}>({props.stars.fourStar})</Text>
            </View>
          </View>

            <View style={styles.viewStyle}>
              <Image style={styles.arrowsStyle} source={require('../../resources/select_star.png')} />
              <Image style={styles.arrowsStyle} source={require('../../resources/select_star.png')} />
              <Image style={styles.arrowsStyle} source={require('../../resources/select_star.png')} />
            <View style={styles.detailsStyle}>
              <Text style={styles.titleStyle}>({props.stars.threeStar})</Text>
            </View>
          </View>

          <View style={styles.viewStyle}>
              <Image style={styles.arrowsStyle} source={require('../../resources/select_star.png')} />
              <Image style={styles.arrowsStyle} source={require('../../resources/select_star.png')} />
            <View style={styles.detailsStyle}>
              <Text style={styles.titleStyle}>({props.stars.twoStar})</Text>
            </View>
          </View>

          <View style={styles.viewStyle}>
            <View style={styles.arrowsContainer}>
              <Image style={styles.arrowsStyle} source={require('../../resources/select_star.png')} />
            </View>
            <View style={styles.detailsStyle}>
              <Text style={styles.titleStyle}>({props.stars.oneStar})</Text>
            </View>
          </View>

        </View>
      </View>
    </View>
  );
};

var styles = {
  viewStyle: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 2,
    elevation: 1,
    padding: 5,
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5
  },
  detailsStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginLeft: 12,
    width: 50
  },
  titleStyle: {
    //color: 'white',
    fontSize: 14,
    //fontWeight: '600'
  },
  arrowsStyle: {
    height: 25,
    width: 25
  },
  arrowsContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
};

export default Reviews;
