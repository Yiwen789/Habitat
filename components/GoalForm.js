import React from 'react';
import { SafeAreaView, ScrollView, View, FlatList, StyleSheet, Text, StatusBar, Image, TextInput, Button } from 'react-native';

const handleSubmit = () => {
  
}

const GoalForm = ({goal, finished, times}) => (
  

  <View style={styles.container}>

    <Text style={styles.text}>Goal</Text> 
    <TextInput
      style={styles.input}
      placeholder="useless placeholder"
    />
    <Text style={styles.text}>Start Date</Text> 
    <TextInput
      style={styles.input}
      placeholder="useless placeholder"
    />
    <Text style={styles.text}>Repeat</Text> 
    <TextInput
      style={styles.input}
      placeholder="useless placeholder"
    />
    <Button title="submit" onPress={handleSubmit()}/>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  text: {
    fontSize: 20,
    padding: 10
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default GoalForm;