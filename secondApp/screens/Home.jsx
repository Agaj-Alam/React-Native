import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useNavigation } from '@react-navigation/native';
import {View,Text, Button} from 'react-native'
import ChatList from "./ChatList"
import StatusList from "./StatusList"

const Tab = createMaterialTopTabNavigator();
const Home=()=>{
  const navigation=useNavigation();
  return(
    // <View style={{flex:1,padding:10}}>
    //   <Text>This is Home screen</Text>
    //   <Button onPress={()=>{navigation.navigate('notification',{notice:'this is from home ',msg:'hello , are you okey brother'})}} title="notification"/>
    // </View>
     <Tab.Navigator screenOptions={{tabBarStyle:{
      backgroundColor:"#dfb6dfff"
     }}}>
      <Tab.Screen name="chatList" component={ChatList} />
      <Tab.Screen name="statusList" component={StatusList} />
    </Tab.Navigator>
  )
}
export default Home;