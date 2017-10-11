import axios from 'axios';
import md5 from 'md5'
import {ROOT_URL} from '../config';
export const SEND_EMAIL = 'SEND_EMAIL';
export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';
export const UPDATE_ABOUTME = 'UPDATE_ABOUTME';



const ROOT_URL_EMAIL = `${ROOT_URL}/email`;
const ROOT_URL_LOGIN = `${ROOT_URL}/login`;
const ROOT_URL_CHECK_LOGIN = `${ROOT_URL}/loggedinuser`;
const ROOT_URL_ABOUTME = `${ROOT_URL}/aboutme`;

 
const queryString = require('query-string');

export function updateAboutme(props) {

       console.log('action ',props);   
        const request = axios.post(`${ROOT_URL_ABOUTME}`,queryString.stringify(props),{
            headers: { 'Content-Type': 'application/x-www-form-urlencoded'}
        });
        
        return {
            type: UPDATE_ABOUTME,
            payload: request
        }
    
    }

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

   

 

 