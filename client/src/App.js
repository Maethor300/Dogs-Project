import './App.css';
import Inicio from './Componets/start/Start.jsx';
import { Route } from 'react-router-dom';
import Nav from './Componets/Nav/nav';
import DogsAll from './Componets/Dogs/dogs.jsx'
import Logicalwrapper from './Componets/LogicalWrapper/LogicalWrapper1';
import Wrapper from './Componets/Wrapper/Wrapper1.jsx';

function App() {
  return (
    <div className="App">
      <Route exact path = "/" component={Inicio}/>
      
      <Route exact path  = "/Home" ><Nav/><Logicalwrapper/> </Route>
       
    </div>
  );
}

export default App;
