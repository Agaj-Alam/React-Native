import { useState } from "react";

const { View,Text } = require("react-native")

const Student=(props)=>{

  


  return(
    <View>
      <Text>{props.data.name}</Text>
      <Text>{props.data.phone}</Text>
    </View>
  )
}
export default Student;