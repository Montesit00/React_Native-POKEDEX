import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';

const Pokemon = () => {
  
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
                >
                  <Image
                    style={{width: 200, height: 200}}
                    source={{
                      uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${pokemon.name}.png`
                    }}
                  />
                  <View style={estilos.Titulos}>
                    <Text style={estilos.pokeTitulo}>{pokemon.name}</Text>
                  </View>
                </TouchableOpacity>
              ); 
            })}
        </View>
      </ScrollView>
    </View>
  )
};

export default Pokemon;

const estilos = StyleSheet.create({

  containerBuscar:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#7F96FF',
    padding:16
  },

  buscadorCont:{
    marginBottom:20,
    marginTop:10
  },

  buscadorInput:{
    height: 50,    
    borderWidth: 2,    
    borderColor: '#28262C',    
    textAlign: 'center',    
    width: 250,
    borderRadius: 50, 
  },
  
  container:{
    display:'flex',
    justifyContent:'center',
    flexWrap:'wrap',
    flexDirection:'row',
    marginTop:10,
    backgroundColor:'#7F96FF'
  },

  cartas:{
    display: 'flex',    
    alignItems: 'center',    
    borderWidth: 1,    
    borderColor: 'black',    
    marginHorizontal: 20,    
    marginVertical: 10, 
    overflow:'hidden',
    backgroundColor:'#EFF2EF',
    borderRadius:20,
  },

  Titulos:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    width:'100%',
    padding:10,
    backgroundColor:'#FAA916',
  },  

  pokeTitulo:{
    textTransform:'capitalize',
    color:'#28262C'
  }
});