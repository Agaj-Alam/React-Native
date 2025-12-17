import { useState } from 'react';
import { View,Text, Modal } from 'react-native'
import { StyleSheet } from 'react-native';
import { Button } from 'react-native';

const ModelConcept = () => {
  const[modelVisible,setModelvisible]=useState(false)

  return (
    <View style={styles.wrapper}>
        <Text> This is Agaj Alam here</Text>
        <Text> This is Agaj Alam here</Text>
        <Text> This is Agaj Alam here</Text>
        <Text> This is Agaj Alam here</Text>
        <Text> This is Agaj Alam here</Text>
        <Text> This is Agaj Alam here</Text>
        <Text> This is Agaj Alam here</Text>
        <Text> This is Agaj Alam here</Text>
        <Text> This is Agaj Alam here</Text>
        <Text> This is Agaj Alam here</Text>
        <Text> This is Agaj Alam here</Text>
        <Text> This is Agaj Alam here</Text>
        <Text> This is Agaj Alam here</Text>
        <Text> This is Agaj Alam here</Text>
        <Text> This is Agaj Alam here</Text>
        <Text> This is Agaj Alam here</Text>
        <Text> This is Agaj Alam here</Text>
        <Text> This is Agaj Alam here</Text>
        <Text> This is Agaj Alam here</Text>
        <Text> This is Agaj Alam here</Text>
        <Text> This is Agaj Alam here</Text>
        <Text> This is Agaj Alam here</Text>
        <Text> This is Agaj Alam here</Text>
        <Text> This is Agaj Alam here</Text>
        <Text> This is Agaj Alam here</Text>
        <Text> This is Agaj Alam here</Text>
        <Text> This is Agaj Alam here</Text>
        <Text> This is Agaj Alam here</Text>
        <Text> This is Agaj Alam here</Text>
        
        <Button onPress={()=>{setModelvisible(true)}}  title="show model" />
        <Modal animationType='fade' visible={modelVisible} transparent={true}>
          <View style={styles.modelWrapper}>
            <View style={styles.modelContent}>
              <Text>are you okay brother</Text>
              <Button onPress={()=>{setModelvisible(false)}}  title="class model"/>
            </View>
          </View>
        </Modal>
    </View>
  )
}
const styles=StyleSheet.create({
  wrapper:{
    flex:1
  },
  modelWrapper:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'rgb(0,0,0,0.4)'
  },
  modelContent:{
    backgroundColor:'white',
    padding:10,
    elevation:10,
    borderRadius:15
  }
})
export default ModelConcept;
