import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Pokemon from '../components/Pokemon';
import Detalles from '../components/Detalles';
import { ScaledSheet } from 'react-native-size-matters';
import { View,Image } from "react-native";
import login from '../components/login';
import registro from '../components/registro';

const Stack = createNativeStackNavigator();

const Titulo = () => {
    return (
      <View style={styles.tituloMain}>
        <Image
        style={styles.tituloApp}
        source={require('../public/pokedex.png')}
        />
      </View>
    );
};

const Rutas = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Inicio'>
        <Stack.Screen
            name="Inicio"
            component={registro}
            options={{headerShown:false}}
        />
        <Stack.Screen
            name='Login'
            component={login}
            options={{headerShown:false}}
        />
        <Stack.Screen 
          name='Pokemones'
          component={Pokemon}
          options={{headerTitle: () => <Titulo/>, headerStyle: { backgroundColor: '#F84F4F' } }}
        />
        <Stack.Screen
            name="Detalles"
            component={Detalles} 
            options={{
              headerShown: false
            }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = ScaledSheet.create({

  tituloMain:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    padding:'10@msr',
    marginLeft:-30
  },

  tituloApp:{
    width:'210@ms',
    height:'50@vs'
  }
});
export default Rutas;