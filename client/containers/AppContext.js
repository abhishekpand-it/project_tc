import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppContainer from  './AppContainer';
import AppNavigator from './AppNavigator';

export default class AppContext extends Component {
  render() {
    return (

      <AppContainer/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});