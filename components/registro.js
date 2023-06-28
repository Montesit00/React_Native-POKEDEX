//Redux
import { connect } from "react-redux";
import { registroUser } from "./redux/actions/registro_actions";
import { useState } from "react";
import { View,TextInput,TouchableOpacity } from "react-native";

const Registro = ({registroUser}) => {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('');

    const handleRegister = async () => {
    await registroUser(email, password);
    };
    
    return (
        <View>
            <h1>Registro</h1>
            <TextInput
            placeholder="Correo electrónico"
            onChangeText={text => setEmail(text)}
            value={email}
            />
            <TextInput
            placeholder="Contraseña"
            onChangeText={text => setPassword(text)}
            value={password}
            secureTextEntry={true}
            />
                <TouchableOpacity title="Iniciar sesión" onPress={() => handleRegister()} >Enviar</TouchableOpacity>
      </View>
    )
}

const mapStateToProps = (state) => ({
    data: state.registro.data,
    
  });

export default connect(mapStateToProps, { registroUser })(Registro);