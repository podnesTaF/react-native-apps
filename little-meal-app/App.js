import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, View} from 'react-native';
import CategoryScreen from "./screens/CategoryScreen";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
   <>
     <StatusBar style={"light"} />
     <NavigationContainer>
         <Stack.Navigator screenOptions={{
             headerStyle: {
                 backgroundColor: '#391404',
             },
             headerTintColor: '#fff',
             contentStyle: {
                 backgroundColor: '#703232',
             }
         }}>
                <Stack.Screen name={"Categories"} component={CategoryScreen} options={{
                    title: 'All Categories',
                }} />
             <Stack.Screen name={'MealsOverview'} component={MealsOverviewScreen}/>
             <Stack.Screen name={'MealDetail'} component={MealDetailScreen}/>
         </Stack.Navigator>
     </NavigationContainer>
   </>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
