import React, { useEffect, useState } from 'react';
import { 
    Text,
    View,
    StyleSheet,
    ActivityIndicator,
    Image
} from 'react-native';

const Detalles = ({route}) => {

    const [detalle,setDetalle] = useState()

    const {url} = route.params

    useEffect(()=>{
        fetchPokemonDetalles(url)
        .then(detalle => setDetalle(detalle)) 
      },[])

      const fetchPokemonDetalles = async (url) =>{
        const response = await fetch(url)
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