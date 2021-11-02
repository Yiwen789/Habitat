import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Button} from 'react-native-elements';


const Footer = ({navigation}) => {
  return(
    <View style={{padding: 10, flexDirection: 'row', justifyContent: 'ceneter', alignSelf: 'center'}}>
      <Button 
        titleStyle={{color: "pink", fontSize: 30}}
        buttonStyle={{
          backgroundColor: "white",
          margin: 10
        }}
        title="About"
        onPress={() => navigation.navigate('About')}
      />
      <Button
        titleStyle={{color: "pink", fontSize: 30}}
        buttonStyle={{
          backgroundColor: "white",
          margin: 10
        }}
        title="Tasks"
        onPress={() => navigation.navigate('Tasks')}
      />
      <Button
        titleStyle={{color: "pink", fontSize: 30}}
        buttonStyle={{
          backgroundColor: "white",
          margin: 10
        }}
        title="Profile"
        onPress={() => navigation.navigate('Tasks')}
      />
  </View>
  );
  
}

export default Footer;