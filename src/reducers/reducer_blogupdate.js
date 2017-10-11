import { UPDATE_BLOG } from '../actions/load_more_blog';
import { UPDATE_PORTFOLIO } from '../actions/load_more_portfolio';

export default function(state = [], action){
    
    switch(action.type) {
        case UPDATE_BLOG:
           return action.payload.data;
           break;
        case UPDATE_PORTFOLIO:   
           return action.payload.data;
           break;
    }

    return state;
}