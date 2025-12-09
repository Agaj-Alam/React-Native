/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import Student from "./Student"
import { Text, View,StyleSheet } from 'react-native';
import React, { useState } from 'react';

const App = () => {
  
 const [data,setData]=useState("This is UI page")

 const demo=()=>{
  setData("you have clicked button")
 }
  return (
    <View style={styles.wrapper}>
      <Text> welcome to React Native</Text>
      <Text style={styles.heading}>This is <Text style={{color:'red', fontWeight:'bold'}}>Agaj Alam</Text> here</Text>
    </View>
  );
};

const styles=StyleSheet.create({
  wrapper:{
    flex:1,
    backgroundColor:'royalblue',
    justifyContent:'center',
    alignItems:'center'
  },
  heading:{
    fontSize:20,
    color:'white'

  }
})
export default App;
