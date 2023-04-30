import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, View} from 'react-native';
import CategoryScreen from "./screens/CategoryScreen";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import {createDrawerNavigator} from "@react-navigation/drawer";
import FavoritesScreen from "./screens/FavoritesScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
    return <Drawer.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#391404',
        },
        headerTintColor: '#fff',
        sceneContainerStyle: {
            backgroundColor: '#703232',
        },
        drawerContentStyle: {
            backgroundColor: '#703232',
        },
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#e2b497',
    }}>
        <Drawer.Screen name={"Categories"} component={CategoryScreen}/>
        <Drawer.Screen name={"Favorites"} component={FavoritesScreen }/>
    </Drawer.Navigator>
}

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
                <Stack.Screen name={"Drawer"} component={DrawerNavigator} options={{
                    title: 'All Categories',
                    headerShown: false,
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
