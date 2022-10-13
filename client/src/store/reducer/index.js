import { GET_ALL_DOGS } from "../actions";

const initialState = {
    dogs1: [],
    
}

export default function reducer (state = initialState, action) {
    switch(action.type){
        case GET_ALL_DOGS:
            return {
                ...state,
                dogs1:action.payload.data
            }
      default:
        return {
            ...state
        }
    }
}
 