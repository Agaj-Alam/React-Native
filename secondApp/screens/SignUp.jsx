import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { TextInput } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


const SignUp = () => {
  const navigation=useNavigation();

  const[firstName,setFirstName]=useState('');
  const[lastName,setLastName]=useState('');
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const[isUserExist,setUserExist]=useState(true);
  const[isLoading,setLoading]=useState(false)
  
 const submitHandler = () => {
  console.log(firstName);
  console.log(lastName);
  console.log(email);
  console.log(password);
  checkEmail();
  isLoading(true);
};
const checkEmail=()=>{
  axios.get('https://contact-api-topz.vercel.app/user/checkEmail'+email)
  .then(res=>{
    console.log(res.data)
    if(res.data.isAvailable){
      console.log('User already exist')
      setUserExist(true);
      isLoading(false);
    }
    else{
      console.log('user does not exist')
      setUserExist(false)
      createNewUser()
    }
  })
  .catch(err=>{
    console.log(err)
    isLoading(false)
  })
}

const createNewUser=()=>{
  axios.post('https://contact-api-topz.vercel.app/user/signup',{
    firstName:firstName,
    lastName:lastName,
    email:email,
    password:password
  })
  .then(res=>{
    console.log(res.data)
    storeData(res.data.token,res.data.firstName)
    isLoading(false);
    navigation.navigate('home')
  })
  .catch(err=>{
    console.log(err.data)
    isLoading(false);
  })
}

const storeData = async(token,firstName)=>{
  try{
    await AsyncStorage.setItem('token',token)
    await AsyncStorage.setItem('firstName',firstName)
    console.log('data store')
  }
  catch(e){
    console.log('failed to store data')
  }
}
  return (
    <View style={styles.wrapper}>
      <Text style={styles.heading}>Create Your Account</Text>
      <TextInput onChangeText={(text)=>{setFirstName(text)}} style={styles.inputBox} placeholder='First Name'/>
      <TextInput onChangeText={(text)=>{setLastName(text)}} style={styles.inputBox} placeholder='Last Name'/>
      <TextInput onChangeText={(text)=>{setEmail(text)}} style={styles.inputBox} placeholder='Email'/>
        {isUserExist &&<Text style={{color:'red'}}>User already exist</Text>}
      <TextInput secureTextEntry={true} onChangeText={(text)=>{setPassword(text)}} style={styles.inputBox} placeholder='Password'/>

      <TouchableOpacity onPress={submitHandler} style={styles.submitbtnText}><Text>{isLoading && <ActivityIndicator color={'white'}/>}Submit</Text></TouchableOpacity>
      <TouchableOpacity onPress={()=>{navigation.navigate('login')}}>
        <Text style={styles.alreadyAccountText}>I have already an account | 
          <Text style={{color:'blue',fontWeight:'bold'}}>Login</Text></Text>
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
export default SignUp