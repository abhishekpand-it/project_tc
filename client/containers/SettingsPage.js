import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, Alert, ScrollView } from 'react-native';
import { Theme } from '../constants/theme';
import  SettingsScreen from './SettingsScreen';
import DiscoverySettings from './DiscoverySettings';
import ContactUsPage from './ContactUsPage';
import LegalSettingsPage from './LegalSettingsPage';
import MiscSettingsLgout from './MiscSettingsLgout';
import HeaderComponent from '../component-library/HeaderComponent';

export default class SettingsPage extends Component {

  render() {
    console.log("PROPS IN SETTINS PAGE", this.props);
    return (
        <View style={{height: '100%'}}>
            <HeaderComponent navigate={this.props.navigation.navigate}/>
            <ScrollView>
              <SettingsScreen/>
              <DiscoverySettings/>
            </ScrollView>
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '100%',
  },
});