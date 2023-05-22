import React, {useState, useEffect} from 'react';
 import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const Pokemon = ({navigation}) => {
  
  const [pokemones,setPokemones] = useState([])

  const fetchPokemon = async () =>{
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
    const json = await response.json()
    .then(pokemones => setPokemones(pokemones.results))
    .catch((e) => console.log(e))
    return json
  }

  const buscarPokemon = (value)=>{
    const resultados = pokemones.filter(pokemon => pokemon.name.toLowerCase().includes(value.toLowerCase()))

    setPokemones(resultados)
  }

  const deletePokemon = (index) => {
    setPokemones((pokemon) => pokemon.filter((_, i) => i !== index));
  };
   
  const renderItem = ({item,index}) => 
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.cartas}
              onPress={() => navigation.navigate('Detalles', {url: item.url})}
            >
              <Image
                style={{width: 200, height: 200}}
                source={{
                  uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${item.name}.png`
                }}
              />
              <View style={styles.tituloCard}>
                <Text style={styles.pokeTitulo}>{item.name}</Text>
              </View>
              <View style={styles.deleteCard}>
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => deletePokemon(index)}
                >
                  <Text style={styles.deletePoke}>Eliminar</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
  
  return (
    <View style={styles.container}>
      <View style={styles.containerBuscar}>
        <View style={styles.buscador}>
          <Feather name="search" size={24} color="black" style={styles.icon}/>
          <TextInput
            style={styles.buscadorInput}
            placeholder='Buscar Pokemon'
            onChangeText={value => buscarPokemon(value)}
          />
        </View>     
      </View>
        <TouchableOpacity
          style={styles.buttonConsumir}
          onPress={fetchPokemon}
        >
          <Text><MaterialCommunityIcons name="cloud-search-outline" size={20} color="black" />  Consumir</Text>
        </TouchableOpacity>
      <View>
        <ImageBackground source={require('../public/oscurofondo.jpg')} >
      
          <FlatList data={pokemones} renderItem={renderItem}/>
          
        </ImageBackground>
      </View>
    </View>
  
   
  )
};

export default Pokemon;

//style con size-matters
const styles = ScaledSheet.create({
  container:{
    flex:1,
  },

  containerBuscar:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
  },

  buscador:{
    backgroundColor:'#EFF2EF',
    width:'350@s',
    padding:'4@msr',
    alignItems:'center',
    flexDirection: 'row',
  },

  icon:{
    marginRight:10
  },

  buscadorInput:{
    height: '40@vs',    
    borderWidth:1,    
    borderColor: '#28262C',    
    textAlign: 'center',    
    width: '310@s',
    borderRadius: 20, 
    backgroundColor:'#D6D6D6',
  },

  buttonConsumir:{
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    fontSize: 16,
    borderWidth: 1,
    color: 'black',
    padding: '10@msr',
    margin: 10,
  },

  cartas:{
    display: 'flex',    
    alignItems: 'center',    
    borderWidth: 1,    
    borderColor: 'black',       
    marginVertical: 10, 
    overflow:'hidden',
    backgroundColor:'rgba(255,255,255,0.7)',
    borderRadius:20
  },

  tituloCard:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    width:'350@s',
    padding:'10@msr',
    backgroundColor:'#F84F4F',
  },  

  pokeTitulo:{
    textTransform:'capitalize',
    fontSize: 16,
    color:'#28262C'
  },

  deleteCard:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    width:'350@s',
    padding:'10@msr',
    backgroundColor:'#FFFFFF',
  },

  deletePoke:{
    textTransform:'capitalize',
    fontSize: 16,
    color:'#28262C'
  },
});