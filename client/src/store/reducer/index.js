import { ASCENDENTE } from "../../Componets/constantes/sort.jsx";
import { GET_ALL_DOGS, GET_BY_NAME,SORT } from "../actions";
const initialState = {
    dogs1: [],
    dogsBy: []
}
export default function reducer (state = initialState, action) {
    switch(action.type){
        case GET_ALL_DOGS:
            return {
                ...state,
                dogs1:action.payload.data,
                dogsBy:action.payload.data 
            }
        case GET_BY_NAME:
            return {
                ...state,
                dogsBy:action.payload.data,
            }
        case SORT:
            let orderedCharacters = [...state.dogs1];
            orderedCharacters = orderedCharacters.sort((a,b)=> {
              if(a.name < b.name){
                return action.payload === ASCENDENTE ? -1 : 1;

              }
              if(a.name > b.name){
                return action.payload === ASCENDENTE ? 1 : -1;
              }
              return 0
            })
            return {
                ...state,
                dogsBy:orderedCharacters
            }
      default:
        return {
            ...state
        }
    }
}
 