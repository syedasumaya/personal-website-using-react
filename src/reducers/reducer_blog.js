import { FETCH_BLOG } from '../actions/load_more_blog';
import { DELETE_BLOG } from '../actions/load_more_blog';

export default function(state = [], action){
    //console.log([ action.payload.data, ...state ]);
    switch(action.type) {
        case FETCH_BLOG:
           return action.payload.data;
           break;
        case DELETE_BLOG:
           return action.payload.data;  
           break; 
    }

    return state;
}