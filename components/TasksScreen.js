import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Image} from 'react-native';
import { FlatList, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import {Card, Button} from 'react-native-elements';
import TaskItem from "./TaskItem";
import Footer from "./Footer";


import AsyncStorage from "@react-native-async-storage/async-storage";

const DATA = [
  {
    id: 1,
    title: "Wake Up Early",
    completedTimes: 10,
    participants: 2,
    image: "https://source.unsplash.com/random",
  },
  {
    id: 2,
    title: "Exercise",
    completedTimes: 20,
    participants: 5,
    image: "https://source.unsplash.com/random",
  },
]

const storeData = async(value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('@tasks_info', jsonValue);
    console.log(jsonValue);
  }
  catch(e) {
    console.log(e);
    console.dir(e);
  }
}

const TasksScreen = ({navigation}) => {
  const [tasks, setTasks] = useState({})
  const [showForm, setShowForm] = useState(false);

  return (
    <View style={styles.container }>
      <View style={{flex: 1, padding: 10, alignSelf: 'center'}}>
        <Text style={styles.title}>Habits</Text>
      </View>
      <View style={{flex: 4, padding: 10, justifyContent: 'flex-start', flexDirection: 'column'}}>
        <FlatList 
          style={{}}
          data={DATA}
          onPress={() => navigation.navigate('Home')}
          renderItem={({item}) => <TaskItem item={item} />}
          keyExtractor={item => item.id}
        />
      </View>
      <Footer navigation={navigation}/>
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