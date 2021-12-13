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
      
      <Text>Create a New Task</Text>
      <Input
        placeholder="Input a Task"
        leftIcon={{ type: 'font-awesome', name: 'book' }}
        onChangeText={input => setTitle(input)}
        value={title}
      />
      <Input 
        placeholder="Link an Image"
        leftIcon={{ type: 'font-awesome', name: 'book' }}
        onChangeText={input => setImage(input)}
        value={image}
      />

      <Button 
      title="submit" 
      onPress={() => {
        const newTask = tasks.concat(
          {"dateTime": new Date(),
          "title": title,
          "image": image,
          "freq": "daily",
          "owner": "user",
          "completedTimes": 0,
        })
        setTasks(newTask);
        addTask(newTask);
        setDateTime("");
        setTitle("");
        setImage("");
        setFreq("");
        setOwner("");
      }}
      />
  
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