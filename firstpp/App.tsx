/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import Student from "./Student"
import { Text, View,StyleSheet,TextInput } from 'react-native';
import React, { useState } from 'react';

const App = () => {
  

  return (
    <View style={styles.wrapper}>
      <Text> welcome to React Native</Text>
      <Text style={styles.heading}>This is <Text style={{color:'red', fontWeight:'bold'}}>Agaj Alam</Text> here</Text>
      <TextInput style={styles.input}  placeholder="Email"/>
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

  },
  input:{
    width:'80%',
    backgroundColor:'white',
    borderRadius:20,
    padding:10
  }
})
export default App;
