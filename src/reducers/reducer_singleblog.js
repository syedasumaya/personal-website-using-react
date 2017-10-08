import { FETCH_SINGLE_BLOG } from '../actions/load_more_blog';

export default function(state = [], action){
    switch(action.type) {
        case FETCH_SINGLE_BLOG:
           return action.payload.data;
          
    }

    return state;
}