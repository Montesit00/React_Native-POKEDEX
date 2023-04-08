import React, { useEffect, useState } from 'react';
import { 
    Text,
    View,
    StyleSheet,
    ActivityIndicator,
    Image
} from 'react-native';

const Detalles = () => {

    const [detalle,setDetalle] = useState()

    useEffect(()=>{
        fetchPokemonDetalles()
        .then(detalle => setDetalle(detalle)) 
      },[])

      console.log(detalle ?.name)

      const fetchPokemonDetalles = async () =>{
        const id = 2
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        const json = await response.json()
        return json
      }
      

    return detalle?.name ? (
        <View>
            <View style={style.tituloMain}>
                <Text>{detalle.name}</Text>
            </View>

            <Image
                style={style.imagen}
                source={{uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${detalle.name}.png`}} 
            />
        </View>

    ): (
        <View style={style.error}>
          <ActivityIndicator size="large" color="#E63F34" />
        </View>
      );
}

const style = StyleSheet.create({

    tituloMain:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#F84F4F',
        padding:20,
    },

    imagen:{
        width: 200,
        height: 200,
    },

    error: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
})

export default Detalles;