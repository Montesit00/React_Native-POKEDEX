import { connect } from "react-redux";
import { loginUser } from "./redux/actions/login_actions"
import { useState } from "react";
import { View,TextInput, TouchableOpacity } from "react-native";

const loginScreen = ({loginUser}) =>{

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        await loginUser(email, password);
    }

    return(
        <View>
            <h1>Login</h1>
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
                <TouchableOpacity title="Iniciar sesión" onPress={() => handleLogin()} >Enviar</TouchableOpacity>
      </View>
    )
}

const mapStateToProps = (state) =>({
    auth:state.login.auth
});

export default connect(mapStateToProps,{loginUser})(loginScreen);