import { LEADERS } from '../share/leaders';
// import * as ActionTypes from './ActionTypes';



export const Leaders=(state=LEADERS
    // isLoading:true,
    // errMess:null,
    // leaders:[]
, action)=>{
    switch(action.type){
        // case ActionTypes.LEADERS_LOADING:
        //     return {...state,isLoading:true, errMess:null,leaders:[]}
        // case ActionTypes.LEADERS_FAILED:
        //     return {...state,isLoading:false, errMess:action.payload,leaders:[]}
        default:
            return state;
    }
}