import react, { useState } from "react";
import "./Wrapper.css"
const Wrapper =(props) => {
    
   
      const items = props.items.map((dogsSelector)=>{
        return <h1 key ={dogsSelector.id}> {dogsSelector.name} 
         <img className= "Image"src={dogsSelector.image.url} ></img>
        </h1> 
      })
       
    return <div>
        <h1>pagina: {props.currentPage}</h1>
        <button onClick={props.PrevHandler}>Prev</button>
        <button onClick={props.NextHandler}>Next</button>
        <h2>Items:</h2>
        
          <h3>{items}</h3>
       
    </div>
}
export default Wrapper;