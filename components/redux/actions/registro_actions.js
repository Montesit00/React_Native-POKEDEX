
import { FETCH_REG_CORRECTO, FETCH_REG_ERROR } from "../type/types";
import axios from 'axios'
const BASE_URL = 'http://192.168.216.124:5000';

export const registroUser = (email, password) => async dispatch => {
    
    const config = {headers : {'Content-Type':'application/json'}}
    const body = JSON.stringify({email, password})

    try {
        const res = await  axios.post(`${BASE_URL}/registro`, body, config)
        dispatch({
            type: FETCH_REG_CORRECTO,
            payload: res.data
        })

    } catch (err) {
        const errors = err
        dispatch({
            type: FETCH_REG_ERROR
        })
    }
}