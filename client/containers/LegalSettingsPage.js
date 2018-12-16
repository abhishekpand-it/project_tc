import React, {Component} from 'react';
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native';
import { Icon } from 'react-native-elements';
import AppContainer from  './AppContainer';
import { Theme } from '../constants/theme';

export default class LegalSettingsPage extends Component {
  render() {
    return (
        <View style={styles.container}>
            <View style={styles.infoWrapper}>
            <TouchableOpacity><Text style={styles.titleStyle}>Privacy Policy</Text></TouchableOpacity>
                <View>
                    <Icon name='chevron-right' color= {Theme.PRIMARY_INFORMATION_COLOR} />
                </View>    
            </View>
            <View style={styles.infoWrapper}>
            <TouchableOpacity><Text style={styles.titleStyle}>Terms of service</Text></TouchableOpacity>
                <View>
                    <Icon name='chevron-right' color= {Theme.PRIMARY_INFORMATION_COLOR} />
                </View>    
            </View>
            <View style={styles.infoWrapper}>
            <TouchableOpacity><Text style={styles.titleStyle}>Licenses</Text></TouchableOpacity>
                <View>
                    <Icon name='chevron-right' color= {Theme.PRIMARY_INFORMATION_COLOR} />
                </View>    
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
      color: Theme.PRIMARY_ACTION_LINK_COLOR
    },
    moreTextContainer:{
      color: Theme.PRIMARY_LABEL_LINK_COLOR,
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
    infoWrapper:{
        flex: 1,
        alignItems: 'center',
        width: '100%',
        justifyContent:'space-between',
        flexDirection:'row',
        paddingTop:15,
        paddingBottom:15,
        borderBottomWidth: 0.2,
        borderColor:'#e6e9ec',
        fontSize:17,
        paddingLeft: 10
      },
      titleStyle:{
        fontSize:17
      },
  });