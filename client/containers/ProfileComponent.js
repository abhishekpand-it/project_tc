import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { Theme } from '../constants/theme';

export default class ProfileComponent extends Component {

  render() {
    return (
        <View style={styles.container}>
            <View style={styles.promoContainer}>
                <Text>Andrea</Text>
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
    display:'flex',
    color: Theme.PRIMARY_ACTION_LINK_COLOR,
    fontSize:20,
    padding: 10,
    borderBottomWidth: 0.5,
    borderColor:'#979797',
    justifyContent:'center'
  },
  moreTextContainer:{
    color: Theme.PRIMARY_LABEL_LINK_COLOR,
    fontSize:20,
    padding: 10,
    justifyContent:'center'
  },
  promoContainer:{
    alignItems: 'center',
    width: '100%',  
    backgroundColor: '#fff',  
    fontSize:40,
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
    borderColor:'#979797',
    justifyContent:'center'
  }
});