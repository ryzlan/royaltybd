import {
    GET_HOME_DATA_PENDING,
    GET_HOME_DATA,
    GET_HOME_DATA_FAILED
} from '../types/dataTypes'

const initialState ={
   trending:[],
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
                trending:action.payload.trending_offer,
                top_brands:action.payload.top_brands,
                top_partners:action.payload.top_partners,
                news_feed:action.payload.news_feed
            }
        case GET_HOME_DATA_PENDING:
           return{
               ...state,
               home_loading:true
           }
        case GET_HOME_DATA_FAILED:
           return{
               ...state,
               home_error:action.payload
           }


        default:
            return state
    }
}