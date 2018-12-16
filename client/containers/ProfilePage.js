import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, Alert, ScrollView } from 'react-native';
import { Theme } from '../constants/theme';
import  SettingsScreen from './SettingsScreen';
import DiscoverySettings from './DiscoverySettings';
import ContactUsPage from './ContactUsPage';
import LegalSettingsPage from './LegalSettingsPage';
import MiscSettingsLgout from './MiscSettingsLgout';
import HeaderComponent from '../component-library/HeaderComponent';
import ProfileComponent from '../containers/ProfileComponent';

export default class ProfilePage extends Component {

  render() {
    return (
        <View style={{height: '100%'}}>
            <HeaderComponent type='profile'/>
            <ScrollView>
              <ProfileComponent/>
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