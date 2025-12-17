import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { TextInput } from 'react-native';
import axios from 'axios';

const Login = () => {
  const navigation=useNavigation();

  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const[isLoading,setLoding]=useState(false);
  
 const submitHandler = () => {
  setLoding(true)
  console.log(email);
  console.log(password);
};


  return (
    <View style={styles.wrapper}>
      <Text style={styles.heading}>Login with Your Account</Text>
     
      <TextInput onChangeText={(text)=>{setEmail(text)}} style={styles.inputBox} placeholder='Email'/>
      <TextInput secureTextEntry={true} onChangeText={(text)=>{setPassword(text)}} style={styles.inputBox} placeholder='Password'/>

      <TouchableOpacity onPress={submitHandler} style={styles.submitbtnText}><Text>Submit</Text></TouchableOpacity>
      <TouchableOpacity onPress={()=>{navigation.navigate('signUp')}}>
        <Text style={styles.alreadyAccountText}>I don't have an account | 
          <Text style={{color:'blue',fontWeight:'bold'}}>sign Up</Text></Text>
      </TouchableOpacity>
    </View>
  )
}
const styles=StyleSheet.create({
  wrapper:{
    flex:1,
    // justifyContent:'center',
    alignItems:'center'
  },
  heading:{
    marginTop:200,
    marginBottom:10,
    color:'royalblue',
    fontSize:20
  },
  inputBox:{
    width:'80%',
    backgroundColor:'#ecd0f0ff',
    marginTop:10,
    borderRadius:10,
    padding:20,
    fontSize:15
  },
  submitbtnText:{
    backgroundColor:'#738bedff',
    width:150,
    height:50,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
    marginTop:10,
    color:'white',
    fontSize:20
  },
  alreadyAccountText:{
    marginTop:8,
  }
})
export default Login;