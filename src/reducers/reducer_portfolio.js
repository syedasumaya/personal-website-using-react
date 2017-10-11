import { FETCH_PORTFOLIO } from '../actions/load_more_portfolio';
import { DELETE_PORTFOLIO } from '../actions/load_more_portfolio';

export default function(state = [], action){
    //console.log([ action.payload.data, ...state ]);
    switch(action.type) {
        case FETCH_PORTFOLIO:
           return action.payload.data;
           break;
        case DELETE_PORTFOLIO:
           return action.payload.data;  
           break;    
    }

    return state;
}
