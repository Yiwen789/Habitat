import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from 'react-native';
import { Input } from "react-native-elements";
import AsyncStorage from '@react-native-async-storage/async-storage';
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
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
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
      {/* frequency */}
      {/* owner */}
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
      <Button
          color='blue' title='Load Profile from Memory'
          onPress = {() => {
            console.log('loading profile');
          }}
        />
    </View>
  );
}

export default NewTaskScreen;