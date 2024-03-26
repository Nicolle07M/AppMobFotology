import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { HomeScreen } from './src/views/Home/home';
const Stack = createNativeStackNavigator();
const App = () => {
 return (
 <NavigationContainer>
 <Stack.Navigator screenOptions={{
 headerShown: false
 }}>
 <Stack.Screen
 name="HomeScreen"
 component={HomeScreen}

 />
 { /*<Stack.Screen name="Profile" component={ProfileScreen} /> */}
 </Stack.Navigator>
 </NavigationContainer>
 );
};
export default App; 