import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ModelConcept from './ModelConcept';
import FlatListConcept from './FlatListConcept';
import { NavigationContainer } from '@react-navigation/native';
import { Image, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const BottomTabNavigation = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { backgroundColor: '#a4c0edff',height:70 },
          tabBarLabelStyle: { color: 'black', fontSize: 20 },
          headerShown: false,
          tabBarShowLabel: false,
  
        }}
      >
        <Tab.Screen
          name="Model"
          component={ModelConcept}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.iconContainer}>
                {/* <Image style={[styles.icon,focused && { tintColor: 'hotpink' }]} source={require('../assets/model.png')}/> */}
                <Icon
                  name="home"
                  color={focused ? 'hotpink' : 'black'}
                  style={styles.icon}
                  size={30}
                />
                <Text style={{ color: focused ? 'hotpink' : 'black', fontSize: 10 }}>
                  Model
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Flat"
          component={FlatListConcept}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.iconContainer}>
                {/* <Image
                  style={[styles.icon, focused && { tintColor: 'hotpink' }]}
                  source={require('../assets/food.png')}
                /> */}
                <Icon
                  name="restaurant"
                  color={focused ? 'hotpink' : 'black'}
                  style={styles.icon}
                  size={30}
                />
                <Text style={{ color: focused ? 'hotpink' : 'black', fontSize: 12 }}>
                  food
                </Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  icon: {
  
  },
   iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:10,
  
  },
});
export default BottomTabNavigation;
