import ModelConcept from './ModelConcept';
import FlatListConecpt from './FlatListConcept';
import { NavigationContainer } from '@react-navigation/native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const TabNavigation = () => {
  const Tab = createMaterialTopTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='model'
      screenOptions={{
        tabBarLabelStyle:{color:'blue'},
        tabBarIndicatorStyle:{backgroundColor:'skyblue'},
        tabBarStyle:{backgroundColor:"pink"}
      }}
      >
        <Tab.Screen options={{title:'Flat'}} name="flat" component={FlatListConecpt} />
        <Tab.Screen options={{title:'Model'}} name="model" component={ModelConcept} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default TabNavigation;
