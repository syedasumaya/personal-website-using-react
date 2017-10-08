import { FETCH_BLOG_CATEGORIES } from '../actions/load_more_blog';

export default function(state = [], action){
  
    switch(action.type) {
        case FETCH_BLOG_CATEGORIES:
           return action.payload.data;
    }

    return state;
}