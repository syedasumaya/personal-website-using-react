import { USER_LOGIN } from '../actions/index';
import { USER_LOGOUT } from '../actions/index';
import {is_logged_in} from '../config';

export default function(state = is_logged_in , action) {
    switch(action.type) {
        case USER_LOGIN:
        localStorage.setItem('token', action.payload.data.login);
        return action.payload.data;
        break;
        case USER_LOGOUT:
        localStorage.setItem('token', false);       
        return action.payload;
        break;
 
    }

    return state;
}
