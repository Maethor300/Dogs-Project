import axios from "axios";
require('dotenv').config();
export const GET_ALL_DOGS = "GET_ALL_DOGS";
export const GET_BY_NAME = "GET_BY_NAME";
export const SORT = "SORT";
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
export function searchDogs (search){
    return function(dispatch) {
        axios.get(`http://localhost:3001/api/dogs/search?name=${search}`)
        .then((respuesta) => {
            dispatch({
                type:GET_BY_NAME,
                payload:respuesta
            })
        }).catch((error) => {
                console.log(error)
            })
    }
}
export function sort(order){
    return {
        type:SORT,
        payload:order
    }
}