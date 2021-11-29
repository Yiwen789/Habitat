import * as React from 'react';
import { StyleSheet, Text, View, Button, } from 'react-native';

const ProfileScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>About Screen</Text>
      <Button title="See A Video Tour"></Button>
    </View>
  );
}

export default ProfileScreen;