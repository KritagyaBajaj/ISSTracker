import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import HomeScreen from './Screens/Home';
import IssLocationScreen from './Screens/IssLocation';
import MeteorScreen from './Screens/Meteor';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack=createStackNavigator();

function App(){

  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
          headerShown:false

      }}>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="IssLocation" component={IssLocationScreen}/>
        <Stack.Screen name="Meteor" component={MeteorScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default App;