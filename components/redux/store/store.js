import { createStore, applyMiddleware } from 'redux' 
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import Reducers from './../reducers'


const initialState = { }

const store = createStore(
    Reducers, 
    initialState, 
    
    //Redux Thunk ha sido instalado e incluido en el proyecto
    composeWithDevTools(applyMiddleware(thunk))
)

export default store;