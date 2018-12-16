import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppContext from './client/containers/AppContext';

export default class App extends React.Component {
  render() {
    return (
      <AppContext />
    );
  }
}

const styles = StyleSheet.create({
  container: {

    backgroundColor: '#fff',
  },
});
