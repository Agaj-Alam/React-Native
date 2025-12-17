import { useNavigation } from '@react-navigation/native';
import {View,Text, Button} from 'react-native'

const Notification=({route})=>{

  const navigation=useNavigation();

  return(
     <View style={{flex:1,padding:10}}>
          <Text>This is Notification screen</Text>
          <Text>{route.params.notice}</Text>
          <Text>{route.params.msg}</Text>
          <Button onPress={()=>{navigation.navigate('home')}} title="home"/>
        </View>
  )
}
export default Notification;