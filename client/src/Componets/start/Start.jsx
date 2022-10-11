import "./start.css";
import IMG1 from "../../img/perros.jpg"
import { Link } from "react-router-dom";
const Inicio = () => {
    return (
      <div className="back-name">
        <h1 className="palabra">Henry's Dogs</h1>
        <Link to= "Home">
        <img className="App-header" src={IMG1} alt="" />
        <button className="button-74" role="button">Home</button>
        </Link>
      </div>
    )
}    
export default Inicio;