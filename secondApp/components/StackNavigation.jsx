import { StyleSheet, Text, View } from "react-native";
import {  NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../screens/Home";
import Notification from "../screens/Notification";
const StackNavigation = () => {

  const Stack = createNativeStackNavigator();  //stack Navigation 


  return (

  
    // This is for stack Navigation 
    <NavigationContainer >
      <Stack.Navigator screenOptions={{headerStyle:{backgroundColor:'red'}}} initialRouteName="home">
        <Stack.Screen options={{title:'Home Screen'}} name="home" component={Home}/>
        <Stack.Screen options={{title:'Notification screen'}} name="notification" component={Notification} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default StackNavigation;
