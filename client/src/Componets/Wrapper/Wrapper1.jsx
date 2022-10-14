import react, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getAllDogs } from "../../store/actions";
import { useEffect } from "react";
import "./Wrapper.css"
import { Paginacion } from "../Paginacion/paginacion";
const Wrapper =() => {
  let apiOriginal = useSelector((state) => state.dogs1)
  let dispatch = useDispatch();
  useEffect(() => {
      dispatch(getAllDogs());
  },[]);
  const [pagina, setPagina] = useState(1);
  const [porPagina, setPorPagina] = useState(8);

  const maximo = apiOriginal.length / porPagina
  
      const items1 = apiOriginal.slice((pagina - 1) * porPagina, (pagina - 1 ) * porPagina + porPagina).map((dogsSelector)=>{
        return <div className="general" key ={dogsSelector.id}><h1  className="name1">{dogsSelector.name}  </h1> 
        
         <img className= "Image"src={dogsSelector.image.url}
         
        ></img>  
         <h1 className="height">height = {dogsSelector.height.metric}</h1>
        <h1 className="weight">weight = {dogsSelector.weight.metric}</h1>
        <h1 className="life_span">life_span = {dogsSelector.life_span}</h1>
        </div> 

      })
    return <div  >
   
        {/* <h1>pagina: {props.currentPage}</h1> */}
        {/* <button onClick={props.PrevHandler}>Prev</button>
        <button onClick={props.NextHandler}>Next</button> */}
        {/* <h2>Items:</h2> */}
       
          <h1 className="items_1">{items1}</h1>
          <Paginacion pagina = {pagina} setPagina={setPagina} maximo={Math.round(maximo)} />
    </div>
    
}
export default Wrapper;