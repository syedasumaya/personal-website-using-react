import { FETCH_SINGLE_BLOG } from '../actions/load_more_blog';
import { FETCH_SINGLE_PORTFOLIO } from '../actions/load_more_portfolio';

export default function(state = [], action){
    switch(action.type) {
        case FETCH_SINGLE_BLOG:
           return action.payload.data;
           break;
        case FETCH_SINGLE_PORTFOLIO:
       // console.log('reducer', action);
           return action.payload;
           break;   
          
    }

    return state;
}