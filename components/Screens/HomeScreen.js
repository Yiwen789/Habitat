import { NavigationContainer } from '@react-navigation/native';
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { Card } from 'react-native-elements';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/core";

import Footer from '../Footer';
import TaskItem from '../TaskItem';

import axios from 'axios';
import { Button } from 'react-native-elements/dist/buttons/Button';


const HomeScreen = ({route, navigation}) => {
  const [suggested, setSuggested] = useState([]);
  //get the data from storage when page is loaded
  useEffect(() => {getData()}
  , [])
  const getData = async() => {
    try {
      const res = await axios.get("http://localhost:3000/suggestedTasks")
      .then(res => res.data
      )
      if(res != null) {
        console.log(res);
        setSuggested(res);
      }
    }
    catch(e) {
      console.log("error");
      console.dir(e);
    }
  }

  return (
    <View style={styles.container}>
      <View style={{flex: 1, padding: 10, flexDirection: 'column', alignSelf: 'center', justifyContent: 'flex-start'}}>        
          
          {/* <Card wrapperStyle={styles.cardWrapper} containerStyle={styles.cardContainer}>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
              <Card.Title style={{fontSize: 16, textAlign: 'left'}}>Participating tasks</Card.Title>
              <TouchableWithoutFeedback onPress={()=>
                  navigation.navigate("ParticipatingTasks"
                )}>
                <Card.Title style={{fontSize: 12, textAlign: 'right', color: 'gray'}}>View More</Card.Title>
              </TouchableWithoutFeedback>
            </View>
            <Card.Divider/>
          </Card> */}

          <Card wrapperStyle={styles.cardWrapper} containerStyle={styles.cardContainer}>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
              <Card.Title style={{fontSize: 16, textAlign: 'left'}}>My tasks</Card.Title>
              <TouchableWithoutFeedback onPress={()=>
                  navigation.navigate("MyTasks"
                )}>
                <Card.Title style={{fontSize: 12, textAlign: 'right', color: 'gray'}}>View More</Card.Title>
              </TouchableWithoutFeedback>
            </View>
            <Card.Divider/>
          </Card>
        
          <Card wrapperStyle={styles.cardWrapper} containerStyle={styles.cardContainer}>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
              <Card.Title style={{fontSize: 16, textAlign: 'left'}}>Participating tasks</Card.Title>
              <TouchableWithoutFeedback onPress={()=>
                  navigation.navigate("ParticipatingTasks"
                )}>
                <Card.Title style={{fontSize: 12, textAlign: 'right', color: 'gray'}}>View More</Card.Title>
              </TouchableWithoutFeedback>
            </View>
            <Card.Divider/>
          </Card>
        
        
          <Card wrapperStyle={styles.cardWrapper} containerStyle={styles.cardContainer}>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
              <Card.Title style={{fontSize: 16, textAlign: 'left'}}>Recommendations</Card.Title>
              <TouchableWithoutFeedback onPress={()=>
                  navigation.navigate("ParticipatingTasks"
                )}>
                <Card.Title style={{fontSize: 12, textAlign: 'right', color: 'gray'}}>View More</Card.Title>
              </TouchableWithoutFeedback>
            </View>
            <Card.Divider/>
            <FlatList 
              style={{}}
              data={suggested}
              renderItem={({item}) => <TaskItem item={item} />}
              keyExtractor={item => item._id}
            />
          </Card>
        

        
      </View>
      <Footer navigation={navigation}/>
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
  },
  cardWrapper: {
    flexDirection: 'column', 
    width: 300
  },
  cardContainer: {
    padding: 10, 
    borderColor: "darkblue", 
    borderRadius: 5, 
    shadowColor: "lightblue", 
    shadowRadius: 1, 
  }
});


export default HomeScreen;