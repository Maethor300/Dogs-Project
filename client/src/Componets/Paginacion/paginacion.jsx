import react from "react"; 
import "./Paginacion.css"
import { Link } from "react-router-dom";
import { useState } from "react";
export const Paginacion = ({pagina, setPagina,maximo}) => {
 
    const [input, setInput] = useState(1);
    const nextPage = () =>{
        setInput(input + 1 );
        setPagina(pagina + 1);
    }
    const prevPage = () => {
        setInput(input - 1 );
        setPagina(pagina - 1);
    }
    const onKeyDown = e => {
        if(e.onKeyDown == 13){
            setPagina(parseInt(e.target.value))
        }if(parseInt(e.target.value < 1)|| parseInt(e.target.value) > Math.ceil(maximo)|| isNaN(parseInt(e.target.value))){

        }else{
            setPagina(parseInt(e.target.value))
        }
    }
    const onChange = e => {
        setInput(e.target.value)
    };
    return (
    <div className="nav_Pag">
       <button onClick={prevPage} className="button_1">first</button>
        <input onChange={(e) => onChange(e)} onKeyDown={e => onKeyDown(e)} name ="page" autoComplete ="off" value = {input} className="input_1"/>
        <p className="p_1" > de {maximo}</p>
     <button onClick={nextPage} className= "button_2" >Next</button>
    </div>
    )
}