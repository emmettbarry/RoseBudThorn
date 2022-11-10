import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export default function App() {
  const Stack = createNativeStackNavigator();

  HomePage = () => {
    return(
      <View style={styles.container}>
        <Text>This is the Home Page</Text>
      </View>
    );
  }


  Profile = () => {
    return(
      <View style={styles.container}>
        <Text>This is the Profile Page</Text>
      </View>
    );
  }


  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName={HomePage}>
      <Stack.Screen name="HomePage" component={HomePage} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
