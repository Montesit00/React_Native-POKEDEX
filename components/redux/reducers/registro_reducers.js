import { FETCH_REG_CORRECTO, FETCH_REG_ERROR } from "../type/types";
  
  const INITIAL_STATE = {
    loading: false,
    data: []
  };
  
  export default function (state = INITIAL_STATE, action) {

    const { type, payload } = action;

    switch (type) {

      case FETCH_REG_CORRECTO:
        return {
          loading: false,
          data: payload,
        };
      case FETCH_REG_ERROR:
        return {    
          loading: false,
          data: [],
        };
      default:
        return state;
    }
  };