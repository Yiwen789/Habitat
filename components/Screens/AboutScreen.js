import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from 'react-native';
import { Input, Card, Icon } from "react-native-elements";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';


import { setStatusBarBackgroundColor } from "expo-status-bar";

const NewTaskScreen = ({navigation}) => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [freq, setFreq] = useState("");
  const [owner, setOwner] = useState("");
  const addTask = async(value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('@tasks_info', jsonValue);
      console.log(jsonValue);
      console.log("hi");
    } catch(e) {
      console.log("error");
      console.dir(e);
    }
    console.log("add task");
  }

  return (
    <View style={{ flex: 1, flexDirection: 'col', alignItems: 'center', justifyContent: 'space-around' }}>  
      <View style={{flex: 1, flexDirection: 1}}>
        <Text style={{fontSize: '30'}}>About</Text>
      </View>    
      <View style={{flex: 3, flexDirection: 'row', margin: 30, justifyContent: 'center'}}>
        <View style={{flex: 1, flexDirection: 'col' }}>
          <Card containerStyle={styles.cardContainer}>
            <Icon name='sc-telegram' type='evilicon' color='#517fa4'/>
            <Card.Title>
              Create One-time Task
            </Card.Title>    
            <Text style={{color: 'gray', fontSize: 11}}>
              <Icon name='help-circle-outline' size="12" type='ionicon' color='lightgray'/>
              One-time task only appears one and checks off your list
            </Text>
          </Card>
          <Card containerStyle={styles.cardContainer}>
            <Icon name='calendar-outline' type='ionicon' color='#517fa4'/>
            <Card.Title>
              Create Daily Task
            </Card.Title>
            <Text style={{color: 'gray', fontSize: 11}}>
              <Icon name='help-circle-outline' size="12" type='ionicon' color='lightgray'/>
              One-time task only appears one and checks off yaour list
            </Text>
          </Card>
        </View>
        
        <View style={{flex: 1, flexDirection: 'col' }}>
          <Card containerStyle={styles.cardContainer}>
            <Icon name='checkmark-done-outline' type='ionicon' color='#517fa4'/>       
            <Card.Title>   
              Create Multi-time Task
            </Card.Title>
            <Text style={{color: 'gray', fontSize: 11}}>
              <Icon name='help-circle-outline' size="12" type='ionicon' color='lightgray'/>
              One-time task only appears one and checks off your list
            </Text>
          </Card>
          <Card containerStyle={styles.cardContainer}>
            <Icon name='albums-outline' type='ionicon' color='#517fa4'/>
            <Card.Title>
              Use Template
            </Card.Title>
            <Text style={{color: 'gray', fontSize: 11}}>
              <Icon name='help-circle-outline' size="12" type='ionicon' color='lightgray'/>
              One-time task only appears one and checks off your list
            </Text>
          </Card>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginHorizontal: 20,
    padding: 10
  }, 
  cardContainer: {
    height: 200, 
    shadowColor: 'gray', 
    shadowRadius: 2
  }
});


export default NewTaskScreen;