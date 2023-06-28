import Rutas from "./router/Rutas";

//Redux
import { Provider } from "react-redux";
import store from "./components/redux/store/store";

export default function App() {
  return (
    <Provider store={store}>
    
      <Rutas/>
    
    </Provider>
  );
}
