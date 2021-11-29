import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TasksScreen from './Screens/TasksScreen';
import NewTaskScreen  from './Screens/NewTaskScreen';
import TaskDetailsScreen from './Screens/TaskDetailsScreen';
import HomeScreen from './Screens/HomeScreen';
import MyTasksScreen from './Screens/MyTasksScreen';
import ParticipatingTasksScreen from './Screens/ParticipatingTasksScreen.js';

const Stack = createNativeStackNavigator();

const Tasks = ({navigation}) => {   
  return (
      <Stack.Navigator
      >
        <Stack.Screen name="HomeMain" component={HomeScreen}/>
        <Stack.Screen name="MyTasks" component={MyTasksScreen}/>
        <Stack.Screen name="ParticipatingTasks" component={ParticipatingTasksScreen}/>
      </Stack.Navigator>
    
  )
}
export default Tasks;