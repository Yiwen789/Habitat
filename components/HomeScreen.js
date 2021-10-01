import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Button} from 'react-native-elements';


const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1, padding: 10, flexDirection: 'column', alignSelf: 'center', justifyContent: 'flex-start'}}>
        <Text style={styles.title}>Habit Tracker</Text>
        <Text style={styles.text}>Welcome to Habit Tracker</Text>
      </View>
      <View style={{flex: 3, padding: 10, flexDirection: 'column', justifyContent: 'center'}}>
        <Button 
          titleStyle={{color: "pink", fontSize: 40}}
          buttonStyle={{
            backgroundColor: "white",
            margin: 20
          }}
          title="About"
          onPress={() => navigation.navigate('About')}
        />
        <Button
          titleStyle={{color: "pink", fontSize: 40}}
          buttonStyle={{
            backgroundColor: "white",
            margin: 20
          }}
          title="Tasks"
          onPress={() => navigation.navigate('Tasks')}
        />
        <Button
          titleStyle={{color: "pink", fontSize: 40}}
          buttonStyle={{
            backgroundColor: "white",
            margin: 20
          }}
          title="Profile"
          onPress={() => navigation.navigate('Tasks')}
        />
        
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


export default HomeScreen;