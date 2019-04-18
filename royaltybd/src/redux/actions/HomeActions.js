import {
    GET_HOME_DATA,
    GET_HOME_DATA_FAILED,
    GET_HOME_DATA_PENDING
} from '../types/dataTypes'

import {Mdata} from  './mock.data'

// some actions 

export const fetch_home_Data = () => dispatch => {

    dispatch({
        type: GET_HOME_DATA_PENDING
    })
    // console.log(Mdata);
    
    // dispatch({
    //     type: GET_HOME_DATA,
    //     payload: Mdata
    // })


    fetch('http://royaltybd.club/avt.json',
        { mode: 'cors', headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
        }})
        .then((res) => {
            console.log(res);
            if(res.ok){
                return res.json();
            }else {
                throw new Error('SOme thing failed ')
            }
            
        })
        .then((data) => {
            console.log(data);
            
            dispatch({
                type:GET_HOME_DATA,
                payload:data
            })
        })
        .catch((err)=>{
            console.log(err);
            
            dispatch({
                type:GET_HOME_DATA_FAILED,
                payload:"There was an Error"
            })
        })

}