import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { FAB, Button } from 'react-native-elements';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import TaskItem from "../TaskItem";

import ValueProvider,{useValue} from '../ValueContext';

import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from 'axios';


const TasksScreen = ({navigation}) => {
  const appUrl = "http://localhost:3000";
  const [tasks, setTasks] = useState([]);
  //get the data from storage when page is loaded
  useEffect(() => {getData()}
  , [])


  const getData = async() => {
    try {
      const res = await axios.get("http://localhost:3000/tasks")
      .then(res => res.data
      )
      if(res != null) {
        console.log(res);
        setTasks(res);
      }
    }
    catch(e) {
      console.log("error");
      console.dir(e);
    }
  }

  const clearAll = async() => {
    try {
      await AsyncStorage.clear();
    } catch(e) {
      console.dir(e);
    }
  }
  return (
    <View style={styles.container }>
      <View style={{padding: 10, alignSelf: 'center'}}>
        <Text style={styles.title}>Habits</Text>
      </View>
      
      <View style={{flex: 4, padding: 10, justifyContent: 'flex-start', flexDirection: 'column'}}>
        <FlatList 
          style={{}}
          data={tasks}
          renderItem={({item}) => <TaskItem item={item} />}
          keyExtractor={item => item._id}
        />
      </View>

      <View style={{}}>
        <FAB 
          style ={{justifyContent: 'right'}}
          onPress={() => navigation.navigate("Tasks", {screen: "NewTask"})}
          icon={{ name: "add", color: "white" }}
          color = "lightblue" 
          style={{justifyContent: 'flex-end'}}/>
      </View>
      
      <View style={{padding: 10}}>
         <Button
          title="Clear All"
          color="red"
          onPress = {() => {
            clearAll()
            setTasks([])
          }}
          />
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
  title: {
    fontSize: 20,
    justifyContent: 'flex-start',
  },
  text: {
    fontSize: 14
  },
  pageButtons: {
    backgroundColor: "white",
    borderRadius: 60,
    flex: 1,
    height: 50,
    width: 50,  
  },
  itemTitle: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  buttonAdd: {
    height: 30,
    borderRadius: 10
  }
});

export default TasksScreen;