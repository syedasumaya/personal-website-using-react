import { USER_LOGOUT } from '../actions/index';

const is_logged_in = {login : localStorage.getItem('token') == "true" ? true : false };

export default function(state = is_logged_in , action){
    switch(action.type) {
        case USER_LOGOUT:
        localStorage.setItem('token', false);
        var test = action.payload.data;
            
           return test;
    }

    return state;
}