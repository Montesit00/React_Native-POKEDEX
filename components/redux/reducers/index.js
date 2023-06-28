import { combineReducers } from "redux";

import login from "./login_reducers"
import registro from "./registro_reducers"

export default combineReducers({
    login,
    registro
});