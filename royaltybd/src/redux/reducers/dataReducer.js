import {GET_DATA} from '../types/dataTypes'

const initialState ={
    someData:[]
}

export const dataReducer = (state= initialState , action) =>{
    switch (action.type) {
        case GET_DATA:
            return state;
           
    
        default:
            return state
    }
}