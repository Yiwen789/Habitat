import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Button} from 'react-native-elements';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const Footer = () => {
  return (
    <Text style={{alignSelf: 'center', color: "gray"}}>Habitat</Text>
  )
}



export default Footer;