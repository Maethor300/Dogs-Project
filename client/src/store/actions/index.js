import axios from "axios";

export const GET_ALL_DOGS = "GET_ALL_DOGS";

export const getAllDogs = () => {
    return function (dispatch){  
    axios.get("http://localhost:3001/api/dogs/home")
    .then(respuesta => {
        dispatch({type:GET_ALL_DOGS, payload:respuesta
        })
    })  
}}