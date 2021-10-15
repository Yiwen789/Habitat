import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Image} from 'react-native';
import { FlatList, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import {Card, Button} from 'react-native-elements';
import { useNavigation } from "@react-navigation/core";
import Footer from "./Footer";

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

const TaskItem = ({item}) => {
  const navigation = useNavigation();
  
  return(
    <TouchableWithoutFeedback onPress={()=>
      navigation.navigate("TaskDetails", {
      title: item.title,
      image: item.image,
      participants: item.participants
    })}>
      <Card wrapperStyle={{flex: 1, flexDirection: 'column'}} containerStyle={{padding: 10}} >
        <View style={{flex: 4, flexDirection: "row"}} >
          <Image
            style={{flex: 1, width: 120, height: 90}}
            resizeMode="cover"
            source={{ uri: item.image }}
          />
          <Card.Title style={{margin: 15, fontSize: 16, flex: 2}}>Tracking: {item.title}</Card.Title>
        </View>
        <Card.Divider style={{flex: 1, margin: 10}}/>
        <View style={{flex: 1, flexDirection: "row", justifyContent: 'space-between'}}>
          <View style={{flexDirection: "row", alignSelf: 'center'}}>
            <Text style={{color: 'gray'}}>Participants:</Text> 
            <Text >{item.participants}</Text>
          </View>
          <View style={{flexDirection: "row", alignSelf: 'center'}}>
            <Text style={{color: 'gray'}}>Completed </Text>
            <Text >{item.completedTimes} </Text>
            <Text style={{color: 'gray'}}>Times</Text>
          </View>
        </View>
      </Card>
    </TouchableWithoutFeedback>
    
  );
}

const GoalsList = () => {
  const renderItem = ({item}) => (
    <TaskItem title={item.title}/>
  );
}

const TasksScreen = ({navigation}) => {
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