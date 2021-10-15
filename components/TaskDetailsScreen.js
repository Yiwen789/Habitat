import { useNavigation } from '@react-navigation/core';
import * as React from 'react';
import { StyleSheet, Text, View, Button, Image} from 'react-native';
import Footer from './Footer';
import { getTask } from "../services/taskServices";

const TaskDetailsScreen = ({ route, navigation}) => {
  const {title, image, participants} = route.params;
  console.log(JSON.parse(JSON.stringify(title, null, 2)));
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Image
          resizeMode="cover"
          style={{flex: 2, width: '100%', height: 200}}
          source={{ uri: image}}
      />

      <View style={{flex: 3, margin: 10, padding: 10}}>
        <View style={{margin: 10}}>
          <Text style={{fontSize: 25, fontWeight: "bold"}}>{JSON.parse(JSON.stringify(title, null, 2))}</Text>
        </View>
        <View style = {{margin: 10, flexDirection: 'row'}}>
          <Text style={{fontSize: 16, fontWeight: "bold"}}>Participants: </Text> 
          <Text style={{fontSize: 16}}>{participants} </Text>
        </View>
        <View style = {{margin: 10, flexDirection: 'row'}}>
          <Text style={{fontSize: 16, fontWeight: "bold"}}>Frequency: </Text> 
          <Text style={{fontSize: 16}}> Daily </Text>
        </View>
      </View>
      <Footer navigation={navigation}/>
    </View>
  );
}

export default TaskDetailsScreen;