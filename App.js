import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from './screens/HomeScreen';
import PlacesScreen from './screens/PlacesScreen';
import Favorite from './screens/Favorite';

const Stack = createStackNavigator();

export default function App (){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Home" component = {HomeScreen}/>
        <Stack.Screen name = "Place" component = {PlacesScreen}/>
        <Stack.Screen name = "Favorite" component = {Favorite}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

