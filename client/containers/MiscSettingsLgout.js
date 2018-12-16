import React, {Component} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Theme } from '../constants/theme';
const imageLogo = require('../../assets/images/profile/minglerlogosmall.png');

export default class MiscSettingsLgout extends Component {
  render() {
    return (
      <View>
          <View style={styles.promoContainer}>
                <Text style={styles.textContainer}>Logout</Text>
                <View>
                    <Image source={imageLogo}/>
                </View>
                <Text style={styles.moreTextContainer}>Version</Text>             
                <Text style={styles.moreTextContainer}>Delete Account</Text>
            </View>
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
    textContainer:{
      fontSize:17,
      paddingTop:15,
      paddingBottom:15,   
    },
    moreTextContainer:{
    
      fontSize:17,
      paddingTop:15,
      paddingBottom:15,   
    },
    promoContainer:{
      alignItems: 'center',
      width: '100%',  
      backgroundColor: '#fff',  
      fontSize:40,
      borderBottomWidth: 0.5,
      borderTopWidth: 0.5,
      borderColor:'#979797',
    },
    });