import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import SettingsScreen from './SettingsScreen';

export default class LoginScreen extends Component {

  render() {
    return (
        <View style={styles.container}>
        <Text>Login to Mingler</Text>
        <Button
        onPress={() => {
            Alert.alert('You tapped the Login Button!');
        }}
        title="Login"
        />
            <SettingsScreen></SettingsScreen>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width:'100%',
  },
});