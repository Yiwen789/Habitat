import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/core";

import Footer from '../Footer';


const HomeScreen = ({route, navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1, padding: 10, flexDirection: 'column', alignSelf: 'center', justifyContent: 'flex-start'}}>
        <Text style={styles.title}>Habit Tracker</Text>
        
        <TouchableWithoutFeedback onPress={()=>
          navigation.navigate("MyTasks"
        )}>
          <Card wrapperStyle={{flexDirection: 'column'}} containerStyle={{padding: 10}}>
            <Text>My Tasks</Text>
          </Card>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={()=>
          navigation.navigate("ParticipatingTasks"
        )}>
          <Card wrapperStyle={{flexDirection: 'column'}} containerStyle={{padding: 10}}>
            <Text>Participating Tasks</Text>
          </Card>
        </TouchableWithoutFeedback>
        
        <TouchableWithoutFeedback onPress={()=>
          navigation.navigate("ParticipatingTasks"
        )}>
          <Card wrapperStyle={{flexDirection: 'column'}} containerStyle={{padding: 10}}>
            <Text>Recomended Tasks</Text>
          </Card>
        </TouchableWithoutFeedback>
        
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
  }
});


export default HomeScreen;