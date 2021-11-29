import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TasksScreen from './Screens/TasksScreen';
import NewTaskScreen  from './Screens/NewTaskScreen';
import TaskDetailsScreen from './Screens/TaskDetailsScreen';

const Stack = createNativeStackNavigator();

const Tasks = ({navigation}) => {   
  return (
    <Stack.Navigator
    >
      <Stack.Screen name="TasksMain" component={TasksScreen}/>
      <Stack.Screen name="NewTask" component={NewTaskScreen}/>
      <Stack.Screen name="TaskDetails" component={TaskDetailsScreen}/>
    </Stack.Navigator>
  )
}
export default Tasks;