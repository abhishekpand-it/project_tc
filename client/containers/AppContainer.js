import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import SettingsScreen from './SettingsScreen';
import HeaderComponent from '../component-library/HeaderComponent';
import FooterComponent from './FooterComponent';
import AppNavigator from './AppNavigator';

export default class AppContainer extends Component {

  render() {
    return (
        <AppNavigator />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
});