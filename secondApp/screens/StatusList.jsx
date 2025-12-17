import { View, Text, StyleSheet, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const StatusList = () => {
  const navigation=useNavigation();
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity style={styles.statusList} onPress={()=>{navigation.navigate('status')}}><Text>Go to Status</Text></TouchableOpacity>
      <TouchableOpacity style={styles.statusList} onPress={()=>{navigation.navigate('status')}}><Text>Go to Status</Text></TouchableOpacity>
      <TouchableOpacity style={styles.statusList} onPress={()=>{navigation.navigate('status')}}><Text>Go to Status</Text></TouchableOpacity>
      <TouchableOpacity style={styles.statusList} onPress={()=>{navigation.navigate('status')}}><Text>Go to Status</Text></TouchableOpacity>
      <TouchableOpacity style={styles.statusList} onPress={()=>{navigation.navigate('status')}}><Text>Go to Status</Text></TouchableOpacity>
      <TouchableOpacity style={styles.statusList} onPress={()=>{navigation.navigate('status')}}><Text>Go to Status</Text></TouchableOpacity>
    </View>
  )
}
const styles=StyleSheet.create({
  wrapper:{
    flex:1
  },
  statusList:{
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
export default StatusList