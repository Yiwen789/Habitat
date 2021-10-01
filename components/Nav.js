import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import TasksScreen from './TasksScreen';
import AboutScreen from './AboutScreen';
import GoalForm from './GoalForm';

const Stack = createNativeStackNavigator();

const Nav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="About" component={AboutScreen}/>
        <Stack.Screen name="GoalForm" component={GoalForm}/>
        <Stack.Screen name="Tasks" component={TasksScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default Nav;