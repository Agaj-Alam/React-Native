import { View, Text } from 'react-native'
import React from 'react'
import Login from "../screens/Login"
import Chat from "../screens/Chat"
import SignUp from "../screens/SignUp"
import Home from "../screens/Home"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();
const NestedNavigation = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator
      screenOptions={{headerShown:false}}
      initialRouteName='login'>
        <Stack.Screen name='login' component={Login}/>
        <Stack.Screen name='signUp' component={SignUp}/>
        <Stack.Screen name='home' component={Home}/>
        <Stack.Screen name='chat' component={Chat}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default NestedNavigation;