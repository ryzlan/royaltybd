import {
    GET_HOME_DATA_PENDING,
    GET_HOME_DATA,
    GET_HOME_DATA_FAILED
} from '../types/dataTypes'

const initialState ={
    trending_offer:[],
   top_brands:[],
   top_partners:[],
   news_feed:[],
   home_loading:false,
   home_error:null

}


export const homeReducer = (state = initialState , action) =>{
    switch (action.type) {
        case GET_HOME_DATA:
            return{
                ...state,
                home_loading:false,
                home_error:null,
                ...action.payload
            }
        case GET_HOME_DATA_PENDING:
           return{
               ...state,
               home_loading:true
           }
        case GET_HOME_DATA_FAILED:
           return{
               ...state,
               home_loading:false,
               home_error:action.payload
           }


        default:
            return state
    }
}