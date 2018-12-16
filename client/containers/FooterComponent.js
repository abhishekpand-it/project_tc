import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { Theme } from '../constants/theme';

export default class FooterComponent extends Component {

  render() {
    return (
        <View style={styles.container}>
           <Text>Helo footer</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '100%'
  },
});