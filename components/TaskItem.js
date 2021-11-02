import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Image} from 'react-native';
import { FlatList, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/core";

import {Card, Button} from 'react-native-elements';

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

export default TaskItem;