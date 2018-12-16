import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, Alert, Slider } from 'react-native';
import { Theme, FeatureSettings } from '../constants/theme';
import { Icon } from 'react-native-elements';
import FeatureOnOffComponent  from '../component-library/FeatureOnOffComponent';
import ContactUsPage from './ContactUsPage';
import LegalSettingsPage from './LegalSettingsPage';
import MiscSettingsLgout from './MiscSettingsLgout';


export default class DiscoverySettings extends Component {
    constructor(){
        super();
        this.renderFeatureForSettings = this.renderFeatureForSettings.bind(this);
        this.state = {
            maxDistance: 0,
            featureArray: FeatureSettings,
            value: 50,
        }
    }
    renderFeatureForSettings(){
        const { featureArray } = this.state;
        console.log("featureArray", featureArray );
       return  ( featureArray.map(fetaure => {
            return ( <FeatureOnOffComponent key={fetaure.featureText} title={fetaure.featureText} boolVal={fetaure.boolValue}/> );  
            
        }) );
    }
    change(value) {
        this.setState(() => {
          return {
            value: parseFloat(value),
          };
        });
      }
  render() {

    const {value} = this.state;
    return (
        <View style={styles.container}>
        <Text style={styles.textContainer}>DISCOVERY SETTINGS</Text>
            <View style={styles.infoWrapper}>
                <Text style={styles.titleStyle}>Location</Text>
                <View style={styles.iconWrapper}>
                    <Text style={styles.infoColor} >texas, United States</Text>
                    <Icon name='chevron-right' color= {Theme.PRIMARY_INFORMATION_COLOR} />
                </View>    
            </View>
            <View style={styles.inforMaxDiff}>
                <View style={styles.infoWrapper}>
                    <Text style={styles.titleStyle}>Max Distance</Text>
                    <Text style={styles.infoColor}>{String(value)}</Text>
                </View>
                <View style={{flex: 1, alignItems: 'stretch', justifyContent: 'center'}}>
                  
                    <View style={styles.sliderStyle}>
                         
                            <Slider
                            step={1}
                            maximumValue={100}
                            onValueChange={this.change.bind(this)}
                            value={value}
                            style={styles.sliderStyle}
                            />
                        </View>
                            
                </View>
                 
                
            </View>
            <View style={styles.infoWrapper}>
                <Text style={styles.titleStyle}>Gender</Text>
                <View style={styles.iconWrapper}>
                    <Text style={styles.infoColor}>Women</Text>
                    <Icon name='chevron-right' color= {Theme.PRIMARY_INFORMATION_COLOR}/>
                </View>
                
                
            </View> 
            <View style={styles.infoWrapper}>
                <Text style={styles.titleStyle}>Age Range</Text>
                <View style={styles.iconWrapper}>
                    <Text style={styles.infoColor}>18-30 var</Text>
                    <Icon name='chevron-right' color= {Theme.PRIMARY_INFORMATION_COLOR}/>
                </View>
            </View>
           <View style={styles.extraSettings}>
                <FeatureOnOffComponent title="Show me on Mingler" boolVal={true} supportText={Theme.supportText1}></FeatureOnOffComponent>
                <FeatureOnOffComponent title="Swipe with friends" boolVal={true} supportText={Theme.supportText2}></FeatureOnOffComponent>
            </View>
            <View style={styles.extraSettings}>
            <Text style={styles.textContainer}>WEB PROFILE</Text>
                <View style={styles.infoWrapper}>
                    <Text style={styles.titleStyle}>Username</Text>
                    <View style={styles.iconWrapper}>
                        <Text style={styles.infoColor}>Claims yours</Text>
                        <Icon name='chevron-right' color= {Theme.PRIMARY_INFORMATION_COLOR}/>
                    </View>
                </View>
                <Text style={styles.textContainer}>NOTIFICATIONS</Text>
                {this.renderFeatureForSettings()}
                <Text style={styles.textContainer}>CONTACT US</Text>
                <ContactUsPage/>
                <Text style={styles.textContainer}>LEGAL</Text>
                <LegalSettingsPage/>
                <MiscSettingsLgout/>
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
    width: '100%',
  },
  textContainer:{
    color: Theme.PRIMARY_HEADING_COLOR,
    fontSize:16,
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
    borderColor:'#e6e9ec',
    width:'100%',
    paddingTop:10,
    paddingBottom:10,
    paddingLeft:10,
    fontWeight:'bold'
  },
  moreTextContainer:{
    color: Theme.PRIMARY_LABEL_LINK_COLOR,
  },
 infoWrapper:{
    flex: 1,
    alignItems: 'center',
    width: '100%',
    justifyContent:'space-between',
    flexDirection:'row',
    paddingTop:15,
    paddingBottom:15,
    paddingLeft:10,
    borderBottomWidth: 0.2,
    borderColor:'#e6e9ec',
    
  },
  inforMaxDiff:{
    flex: 1,
    alignItems: 'center',
    width: '100%',
    flexDirection:'column',
    paddingBottom:15,
    paddingLeft:10,
    borderBottomWidth: 0.2,
    borderColor:'#e6e9ec',
  },
  iconWrapper:{
    flex: 1,
    alignItems: 'center',
    flexDirection:'row',
    justifyContent:'flex-end',
    color: Theme.PRIMARY_INFORMATION_COLOR,
  },
  infoColor:{
    color: Theme.PRIMARY_INFORMATION_COLOR,
    fontSize:20
  },
  titleStyle:{
    fontSize:17
  },
  extraSettings:{
      flex:1,
      flexDirection:'column',
      width:'100%'
  },
  sliderStyle:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    width: 300,
    },
  slideTitle:{
    fontSize: 17,
    textAlign: 'center',
  }
});