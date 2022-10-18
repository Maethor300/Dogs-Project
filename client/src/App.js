import './App.css';
import Inicio from './Componets/start/Start.jsx';
import { Route } from 'react-router-dom';
import Nav from './Componets/Nav/nav';
import DogsAll from './Componets/Dogs/dogs.jsx'
import Wrapper from './Componets/Wrapper/Wrapper1.jsx';
import {Paginacion} from "./Componets/Paginacion/paginacion.jsx";
import Searchdogs from './Componets/search/search';
import Order from './Componets/order/order';
function App() {
  return (
    <div className="App">
      <Route exact path = "/" component={Inicio}/>
      
      <Route exact path  = "/Home" ><Nav/><Searchdogs/><Order/><Wrapper/></Route>
       
    </div>
  );
}

export default App;
