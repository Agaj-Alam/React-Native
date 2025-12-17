import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Chat = () => {
  return (
    <View style={styles.wrapper}>
      <Text>Chat</Text>
    </View>
  )
}
const styles=StyleSheet.create({
  wrapper:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})

export default Chat