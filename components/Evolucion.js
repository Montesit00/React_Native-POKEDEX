import {useEffect, useState} from "react";
import { View } from "react-native-web";

const Evolucion = ({route}) =>{

    const [evolucion,setEvolucion] = useState({})
    
    const {url} = route.params

    console.log(url)

    useEffect(()=>{
        fetchPokeEvolucion()
        .then(evolucion=>setEvolucion(evolucion))
    },[evolucion])

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