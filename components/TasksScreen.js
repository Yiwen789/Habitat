import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Image} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import {Card, Button} from 'react-native-elements';

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

const Item = ({item}) => (
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

);

const GoalsList = () => {
  const renderItem = ({item}) => (
    <Item title={item.title}/>
  );
}

const TasksScreen = ({navigation}) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <View style={{ flex: 1, justifyContent: 'flex-start'}}>
      <View style={{padding: 10, flexDirection: 'column', alignSelf: 'center'}}>
        <Text style={styles.title}>Goals</Text>
      </View>
      <View style={{padding: 10, flexDirection: 'column'}}>
        <FlatList 
          style={{}}
          data={DATA}
          renderItem={({item}) => <Item item={item} />}
          keyExtractor={item => item.id}
        />
      </View>
      <View>
        <Button
         titleStyle={{color: "pink", fontSize: 40}}
         buttonStyle={{
           backgroundColor: "white",
           margin: 20
         }}
          title="Add"
          onPress={() => navigation.navigate('GoalForm')}
        />
        <Button 
          titleStyle={{color: "pink", fontSize: 40}}
          buttonStyle={{
            backgroundColor: "white",
            margin: 20
          }}
          title="Home"
          onPress={() => navigation.navigate('Home')} />
        <Button
          titleStyle={{color: "pink", fontSize: 40}}
          buttonStyle={{
            backgroundColor: "white",
            margin: 20
          }}
          title="Go Back"
          onPress={() => navigation.goBack()} />
      </View>
      
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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