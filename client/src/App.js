import './App.css';
import Inicio from './Componets/start/Start.jsx';
import { Route } from 'react-router-dom';
import Search from './Componets/search/Search.jsx';


function App() {
  return (
    <div className="App">
      <Route exact path= "/" component={Inicio}/>
      <Route exact path = "/Home" component={Search} />
    </div>
  );
}

export default App;
