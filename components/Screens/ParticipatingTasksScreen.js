import React, { useState, useEffect } from "react";
import { View } from 'react-native';
import { FlatList } from "react-native-gesture-handler";
import TaskItem from "../TaskItem";

import AsyncStorage from "@react-native-async-storage/async-storage";



const ParticipatingTasksScreen = ({navigation}) => {
  const [tasks, setTasks] = useState([]);
  //get the data from storage when page is loaded
  useEffect(() => {getData()}
  , []);
  const getData = async() => {
    try {
      // the '@profile_info' can be any string
      const jsonValue = await AsyncStorage.getItem('@tasks_info');
      // jsonValue.filter(item => item.owner === "user");
      console.log(jsonValue)
      let data = null;
      if (jsonValue!=null) {
        data = JSON.parse(jsonValue).filter((item) => item.owner !== "user");
        setTasks(data);
      } 
    }
    catch(e) {
      console.log("error");
      console.dir(e);
    }
  }
  return (
    <View style={{flex: 4, padding: 10, justifyContent: 'flex-start', flexDirection: 'column'}}>
      <FlatList 
        style={{}}
        data={tasks}
        renderItem={({item}) => <TaskItem item={item} />}
        keyExtractor={item => item.dateTime}
      />
    </View>
  );
  
}

export default ParticipatingTasksScreen;

