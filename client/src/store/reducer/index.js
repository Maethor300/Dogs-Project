import { GET_ALL_DOGS, GET_BY_NAME } from "../actions";

const initialState = {
    dogs1: [],
    dogsById: []
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
 