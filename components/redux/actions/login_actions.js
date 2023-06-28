import { FETCH_LOGIN_CORRECTO, FETCH_LOGIN_ERROR } from "../type/types";
import axios from 'axios'
import storage from '../../../helpers/storage'

const BASE_URL = 'http://192.168.216.124:5000';

export const loginUser = (email, password) => async dispatch => {

    const config = { headers : {'Content-Type':'application/json'}}

    const body = JSON.stringify({email, password})

    try {
        const res = await axios.post(`${BASE_URL}/auth/login`, body, config)       
        const userInfo = res.data

        storage.set('userInfo', JSON.stringify(userInfo));

        const isloading = await storage.get('userInfo');
       
        dispatch({
            type: FETCH_LOGIN_CORRECTO,
            payload: res.data
        })
    } catch (err) {

        const errors = err
    
        dispatch({
            type: FETCH_LOGIN_ERROR
        })
    }
}