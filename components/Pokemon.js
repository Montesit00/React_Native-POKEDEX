import React, {useState, useEffect} from 'react';
 import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ImageBackground,
} from 'react-native';

const Pokemon = ({navigation}) => {
  
  const [pokemones,setPokemones] = useState([])
  const [buscar,setBuscar] = useState('')


  useEffect(()=>{
    fetchPokemon()
    .then(pokemones => setPokemones(pokemones.results))
  },[])


  const fetchPokemon = async () =>{
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=500')
    const json = await response.json()
    return json
  }
  

  return (
    <View>
      <ImageBackground source={require('../public/oscurofondo.jpg')}>
        <View style={estilos.tituloMain}>
          <Image source={require('../public/pokedex.png')} style={estilos.tituloApp}></Image>
        </View>

        <View style={estilos.containerBuscar}>
          <View style={estilos.buscadorCont}>
            <TextInput
              style={estilos.buscadorInput}
              placeholder='Buscar Pokemon'
              onChangeText={value => setBuscar(value)}
              defaultValue={buscar}
            />
          </View>
          <ScrollView>
            <View style={estilos.container}>
              {
                pokemones.filter(pokemon => pokemon.name.toLowerCase().includes(buscar.toLowerCase())
                ).map((pokemon,i) => {
                  return (
                    <TouchableOpacity
                      activeOpacity={0.5}
                      key={i}
                      style={estilos.cartas}
                      onPress={() => navigation.navigate('Detalles')}
                    >
                      <Image
                        style={{width: 200, height: 200}}
                        source={{
                          uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${pokemon.name}.png`
                        }}
                      />
                      <View style={estilos.tituloCard}>
                        <Text style={estilos.pokeTitulo}>{pokemon.name}</Text>
                      </View>
                    </TouchableOpacity>
                  ); 
                })}
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  )
};

export default Pokemon;

const estilos = StyleSheet.create({

  tituloMain:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#F84F4F',
    padding:20,
  },

  tituloApp:{
    width:'50%',
    height:50
  },

  containerBuscar:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
  },

  buscadorCont:{
    backgroundColor:'#EFF2EF',
    width:'100%',
    padding:8,
  },

  buscadorInput:{
    height: 50,    
    borderWidth:1,    
    borderColor: '#28262C',    
    textAlign: 'center',    
    width: '100%',
    borderRadius: 20, 
    backgroundColor:'#D6D6D6',
  },

  container:{
    display:'flex',
    justifyContent:'center',
    flexWrap:'wrap',
    flexDirection:'row',
    marginTop:10,
    gap:10
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
    width:'100%',
    padding:10,
    backgroundColor:'#F84F4F',
  },  

  pokeTitulo:{
    textTransform:'capitalize',
    color:'#28262C'
  }
});