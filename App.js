import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Maquina from './maquina/maquina';
import Menu from './menu/menu';

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Menu" component={Menu} options={{headerShown: false}}></Stack.Screen>  
        <Stack.Screen name="Maquina" component={Maquina} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

