import {useEffect, useState} from "react";
import { View } from "react-native-web";

const Evolucion = ({route}) =>{

    const [detalle,setDetalle]= useState({})
    const [evolucion,setEvolucion] = useState({})
    
    const {url} = route.params

    console.log(route.params)

    useEffect(()=>{
        fetchPokemonDetalles(url)
        .then(detalle => setDetalle(detalle))
      },[])

    useEffect(()=>{
        fetchPokeEvolucion()
        .then(evolucion=>setEvolucion(evolucion))
    },[evolucion])
        const fetchPokemonDetalles = async (url) =>{
            const response = await fetch(url)
            const json = await response.json()

            return json
        }
      
        const fetchPokeEvolucion = async ()=>{
            const response = await fetch(`https://pokeapi.co/api/v2/evolution-chain/${detalle.id}`)
            const json = await response.json()

            return json
        }
        console.log(evolucion)
    return(
        <View>
            <View>Hola</View>
        </View>
    )
}

export default Evolucion