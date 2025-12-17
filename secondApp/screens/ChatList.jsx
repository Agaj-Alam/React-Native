import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const ChatList = () => {
  const navigation=useNavigation();
  return (
    <View style={styles.wrapper}> 
      <TouchableOpacity style={styles.chatList} onPress={()=>{navigation.navigate('chat')}}><Text>Go to Chat</Text></TouchableOpacity>
      <TouchableOpacity style={styles.chatList} onPress={()=>{navigation.navigate('chat')}}><Text>Go to Chat</Text></TouchableOpacity>
      <TouchableOpacity style={styles.chatList} onPress={()=>{navigation.navigate('chat')}}><Text>Go to Chat</Text></TouchableOpacity>
      <TouchableOpacity style={styles.chatList} onPress={()=>{navigation.navigate('chat')}}><Text>Go to Chat</Text></TouchableOpacity>
      <TouchableOpacity style={styles.chatList} onPress={()=>{navigation.navigate('chat')}}><Text>Go to Chat</Text></TouchableOpacity>
      <TouchableOpacity style={styles.chatList} onPress={()=>{navigation.navigate('chat')}}><Text>Go to Chat</Text></TouchableOpacity>
    </View>
  )
}
const styles=StyleSheet.create({
  wrapper:{
    flex:1,
  },
  chatList:{
    width:'100%',
    height:100,
    backgroundColor:'#717bc7ff',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:20,
    padding:10,
    marginTop:10
  }
})
export default ChatList