import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './src/Presentation/views/Home/home';
import { RegisterScreen } from './src/Presentation/views/register/register';
import { ProfileInfoScreen } from './src/Presentation/views/Profile/info/ProfileInfo'; 
import PhotographersScreen from './src/Presentation/views/Client/view/Destacados';
import WelcomeScreen from './src/Presentation/views/Client/view/Welcome';
import CategoriesScreen from './src/Presentation/views/Client/view/Categorias'
import 'react-native-gesture-handler';


export type RootStackParamList = {
  HomeScreen: undefined;
  RegisterScreen: undefined;
  ProfileInfoScreen: undefined;
  WelcomeScreen: undefined;
  PhotographersScreen: undefined;
  CategoriesScreen: undefined;
  
 };

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>
          
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{
            headerShown: true,
            title: 'Nuevo Usuario'
          }}
        />
        <Stack.Screen
        name="ProfileInfoScreen"
        component={ProfileInfoScreen}
        />

          <Stack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        
        />
        <Stack.Screen 
        name="PhotographersScreen" 
        component={PhotographersScreen}
         />

      <Stack.Screen 
        name="CategoriesScreen" 
        component={CategoriesScreen}
         />


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
