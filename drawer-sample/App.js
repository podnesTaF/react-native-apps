import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createDrawerNavigator} from "@react-navigation/drawer";
import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";
import {Ionicons} from '@expo/vector-icons';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

const bottomTabNavigator = createBottomTabNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <bottomTabNavigator.Navigator screenOptions={{
            tabBarActiveTintColor: 'purple',
            tabBarInactiveTintColor: 'gray',
        }}>
            <bottomTabNavigator.Screen name="Welcome" component={WelcomeScreen} options={{
                headerStyle: {
                    backgroundColor: 'purple',
                },
                headerTintColor: 'white',
                tabBarIcon: ({focused, color, size}) => {
                    return (<Ionicons name={'ios-home'} size={size} color={color}/>)
                }
            }}/>
            <bottomTabNavigator.Screen name="User" component={UserScreen }/>
        </bottomTabNavigator.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
