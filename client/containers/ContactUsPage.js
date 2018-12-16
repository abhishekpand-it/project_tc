import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import AppContainer from  './AppContainer';
import { Theme } from '../constants/theme';

export default class ContactUsPage extends Component {
  render() {
    return (
            <View style={styles.promoContainer}>
               <TouchableOpacity><Text style={styles.textContainer}>Help & support</Text></TouchableOpacity> 
               <TouchableOpacity><Text style={styles.moreTextContainer}>Rate Us</Text></TouchableOpacity>
               <TouchableOpacity><Text style={styles.moreTextContainer}>Share Mingler</Text></TouchableOpacity>
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
      paddingTop:15,
      paddingBottom:15,    
      borderBottomWidth: 0.2,
      borderColor:'#e6e9ec',
      fontSize:17
    },
    moreTextContainer:{
      paddingTop:15,
      paddingBottom:15,   
      borderBottomWidth: 0.2,
      borderColor:'#e6e9ec',
      fontSize:17
    },
    promoContainer:{
      alignItems: 'center',
      width: '100%',  
      backgroundColor: '#fff',  
      fontSize:40,
      borderBottomWidth: 0.5,
      borderTopWidth: 0.5,
      borderColor:'#979797',
      flex:1,

    }
  });