import axios from "axios";
require('dotenv').config();
const {API} = process.env
export const GET_ALL_DOGS = "GET_ALL_DOGS";
console.log(API)
export function getAllDogs  () {
    return function (dispatch){  
    axios.get("http://localhost:3001/api/dogs/home")
    .then((respuesta) => {
        dispatch({type:GET_ALL_DOGS, payload: respuesta
        })
    })  
    .catch((error) => { 
       console.log(error)
    })
}}