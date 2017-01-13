/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class HelloProject extends Component {
  render() {
    let pic={
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
//      <Image source={pic} style={{width:193,height:110}} />
       <View style={styles.container}>
         <Text style={styles.welcome}>
         HelloProject
         </Text>
         <Text style={styles.instructions}>
           To get started, edit index.android.js
         </Text>
         <Text style={styles.instructions}>
           Double tap R on your keyboard to reload,{'\n'}
           Shake or press menu button for dev menu
         </Text>
       </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },


  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});






AppRegistry.registerComponent('HelloProject', () => HelloProject);
