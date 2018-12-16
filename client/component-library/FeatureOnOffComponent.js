import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { Theme } from '../constants/theme';
import ToggleSwitch from 'toggle-switch-react-native';

export default class FeatureOnOffComponent extends Component {

    constructor(){
        super();
        this.enableSwitch = this.enableSwitch.bind(this);

        this.state = {
            enabled: false,
        };
    }
    enableSwitch(){
      this.setState({enabled:!this.state.enabled});
    }
  render() {
    const { title = 'im Default', boolVal = false, supportText = ''} = this.props;
    const { enabled } = this.state;
   
    return (
        <View style={styles.container}>
        
            <View style={styles.infoWrapper}>
                    <View><Text style={styles.titleText}>{title}</Text></View>            
                    <ToggleSwitch
                      isOn={enabled}
                      onColor='gray'
                      offColor='#FC4F67'
                      label=''
                      labelStyle={{color: 'black', fontWeight: '900'}}
                      size='large'
                      onToggle={this.enableSwitch}
                  />   
            </View>
            {supportText.length > 0 && <View><Text style={styles.suppportText}>{supportText}</Text></View>}

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
    flexDirection:'column',
    justifyContent:'space-between',
    paddingTop:5,
    paddingBottom:5
  },
  textContainer:{
    color: Theme.PRIMARY_ACTION_LINK_COLOR
  },
  moreTextContainer:{
    color: Theme.PRIMARY_LABEL_LINK_COLOR,
  },
  infoWrapper:{
    flex: 1,
    alignItems: 'center',
    color:'red',
    flexDirection:'row',
    justifyContent:'space-between',
    width:'100%',
    paddingLeft:10,
    paddingRight:10,
    paddingBottom:5,
    paddingTop:5,
    borderBottomWidth: 0.3,
    borderColor:'#e6e9ec',
  },
  titleText:{
    fontSize:17
  },
  suppportText: {
    color:Theme.PRIMARY_HEADING_COLOR,
    fontSize: 15,
    paddingLeft:5,
    paddingRight:5
  }
});