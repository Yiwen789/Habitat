import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';


import HomeScreen from './Screens/HomeScreen';
import AboutScreen from './Screens/AboutScreen';
import TasksNav from './TasksNav';
import HomenNav from './HomeNav';
import NewTaskScreen from './Screens/NewTaskScreen';
import ProfileScreen from './Screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const Nav = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
      initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'About') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } 
            if (route.name === 'Home') {
              iconName = focused
                ? 'home-sharp'
                : 'home-outline';
            } 
            if (route.name === 'New') {
              iconName = focused
                ? 'add-circle'
                : 'add-circle-outline';
            } 
            if (route.name === 'Tasks') {
              iconName = focused
                ? 'ios-checkmark-circle'
                : 'ios-checkmark-circle-outline';
            } 
            if (route.name === 'Profile') {
              iconName = focused
                ? 'person-circle'
                : 'person-circle-outline';
            } 

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })
      }
      >
        <Tab.Screen name="About" component={AboutScreen} options={{ headerShown: false }}></Tab.Screen>
        <Tab.Screen name="Home" component={HomenNav} options={{ headerShown: false }}></Tab.Screen>
        <Tab.Screen name="New" component={NewTaskScreen} options={{ headerShown: false }}></Tab.Screen>
        <Tab.Screen name="Tasks" component={TasksNav} options={{ headerShown: false }}></Tab.Screen>
        <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}


export default Nav;