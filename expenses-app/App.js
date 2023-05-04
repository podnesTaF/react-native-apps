import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import AllExpenses from "./screens/AllExpenses";
import RecentExpenses from "./screens/RecentExpenses";
import ManageExpenses from "./screens/ManageExpenses";
import {GlobalStyles} from "./constants/styles";
import {Ionicons} from "@expo/vector-icons";
import IconButton from "./components/UI/IconButton";
import ExpensesContextProvider, {ExpensesContext} from "./store/store";
import {useContext, useEffect} from "react";
import {fetchExpenses} from "./util/http";
const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

const Expenses = () => {
    return <BottomTab.Navigator screenOptions={({navigation}) => ({
        headerStyle: {
            backgroundColor: GlobalStyles.colors.primary500,
        },
        headerTintColor: '#fff',
        tabBarStyle: {
            backgroundColor: GlobalStyles.colors.primary500,
            tabBarActiveTintColor: GlobalStyles.colors.accent500,
        },
        headerRight: ({tintColor}) => {
            return <IconButton name={'add'} size={24} color={tintColor} onPress={() => {
                navigation.navigate('ManageExpense');
            }} />
        }
    })}>
        <BottomTab.Screen name='Recent' component={RecentExpenses} options={{
            title: 'Recent Expenses',
            tabBarLabel: 'Recent',
            tabBarIcon: ({color, size}) => (<Ionicons name={'hourglass'} size={size} color={color} />)
        }} />
        <BottomTab.Screen name='All' component={AllExpenses} options={{
            title: 'All Expenses',
            tabBarLabel: 'All Expenses',
            tabBarIcon: ({color, size}) => (<Ionicons name={'calendar'} size={size} color={color} />)
        }}
        />
    </BottomTab.Navigator>
}

export default function App() {
  return (
    <>
      <StatusBar style='light' />
        <ExpensesContextProvider>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{
                    headerStyle: {
                        backgroundColor: GlobalStyles.colors.primary500,
                    },
                    headerTintColor: '#fff',
                }}>
                    <Stack.Screen name='Expenses' component={Expenses} options={{
                        headerShown: false,
                    }} />
                    <Stack.Screen name='ManageExpense' component={ManageExpenses} options={{
                        presentation: 'modal',
                    }} />
                </Stack.Navigator>
            </NavigationContainer>
        </ExpensesContextProvider>
    </>
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
