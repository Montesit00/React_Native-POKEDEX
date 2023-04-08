import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Pokemon from '../components/Pokemon';
import Detalles from '../components/Detalles';

const Stack = createNativeStackNavigator();

const Rutas = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Inicio'>
        <Stack.Screen
            name="Inicio"
            component={Pokemon}
        />
        <Stack.Screen
            name="Detalles"
            component={Detalles} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Rutas;