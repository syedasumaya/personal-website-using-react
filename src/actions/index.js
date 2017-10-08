import axios from 'axios';
import md5 from 'md5'
import {ROOT_URL} from '../config';
export const SEND_EMAIL = 'SEND_EMAIL';
export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';
export const UPDATE_PORTFOLIO = 'UPDATE_PORTFOLIO';


const ROOT_URL_EMAIL = `${ROOT_URL}/email`;
const ROOT_URL_LOGIN = `${ROOT_URL}/login`;
const ROOT_URL_CHECK_LOGIN = `${ROOT_URL}/loggedinuser`;

 
const queryString = require('query-string');

export function sendEmail(props) {

    const request = axios.post(`${ROOT_URL_EMAIL}`,queryString.stringify(props),{
        headers: { 'Content-Type': 'application/x-www-form-urlencoded'}
    });
    
    return {
        type: SEND_EMAIL,
        payload: request
    }

}

export function userLogin(props) {
       
        const request = axios.post(`${ROOT_URL_LOGIN}`,queryString.stringify({
            username: props.username,
            password: md5(props.password)
          }),{
            headers: { 'Content-Type': 'application/x-www-form-urlencoded'}
        }); 
        return {
            type: USER_LOGIN,
            payload: request
        }
    
}
export function userLogout() {
    const request = {login: false};
            return {
                type: USER_LOGOUT,
                payload: request
            }
        
    }

export function updatePortfolio(props){
    
    return {
        type: UPDATE_PORTFOLIO,
        payload: ''
    }
}    

 

 