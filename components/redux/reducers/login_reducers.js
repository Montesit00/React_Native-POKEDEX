import { FETCH_LOGIN_CORRECTO, FETCH_LOGIN_ERROR } from "../type/types";
  
  const INITIAL_STATE = {
    loading: false,
    isAuthenticated: null,
    auth: []
  };
  
  export default function (state = INITIAL_STATE, action) {

    const { type, payload } = action;

    switch (type) {

      case FETCH_LOGIN_CORRECTO:
        return {
          loading: false,
          auth: payload,
          isAuthenticated:true
        };
      case FETCH_LOGIN_ERROR:
        return {
          loading: false,
          auth: [],
        };
      default:
        return state;
    }
  };