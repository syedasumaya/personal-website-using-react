import { SEND_EMAIL } from '../actions/index';

export default function(state = [], action){

    switch(action.type) {
        case SEND_EMAIL:
           return action.payload.data;
    }

    return state;
}
