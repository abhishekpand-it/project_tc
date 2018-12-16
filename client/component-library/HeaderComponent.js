import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { Header} from 'react-native-elements';
import { Theme } from '../constants/theme'

export default class HeaderComponent extends Component {

  render() {
    console.log("PROPS REC IN HEADER COPONENT", this.props);
    return (
      <Header
      centerComponent={{ text: 'Settings', style: { color: '#0d0d0d' } }}
      rightComponent={<Button title="DONEE" onPress={() => this.props.navigate('ProfilePage', {name: 'Jane'})} style={{color: Theme.PRIMARY_ACTION_LINK_COLOR}} />}
      containerStyle={{
        backgroundColor: '#ddd',
        justifyContent: 'space-around',
      }}
    />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height:100,
    flex: 1, 
    flexDirection: 'row',
    paddingTop: 10,
    paddingLeft: 10,
    backgroundColor: 'red',
    justifyContent: 'center'
  },
  screenName: {
    flex:1,
    alignItems : 'center'
  },
  actionName: {
    flex:1,
    alignItems: 'flex-end'
  }
});