import axios from 'axios';
import {ROOT_URL} from '../config';
import {queryString} from '../config';
export const FETCH_PORTFOLIO = 'FETCH_PORTFOLIO';
export const FETCH_SINGLE_PORTFOLIO = 'FETCH_SINGLE_PORTFOLIO';
export const UPDATE_PORTFOLIO = 'UPDATE_PORTFOLIO';
export const DELETE_PORTFOLIO = 'DELETE_PORTFOLIO';

const ROOT_URL_PORTFOLIO = `${ROOT_URL}/portfolio`;
const ROOT_URL_UPDATE = `${ROOT_URL}/updateportfolio`;
const ROOT_URL_DELETE = `${ROOT_URL}/deleteportfolio`;

export function deletePortfolio(id) {
    //console.log('action', id);
    var bid = '?delete=true&project_id='+id;

    const url = `${ROOT_URL_DELETE}/${bid}`;
    const request = axios.get(url);

    return {
        type: DELETE_PORTFOLIO, 
        payload: request
    }

}

export function fetchPortfolio(start,limit) {
    
    var LIMIT = '?start=0&limit=6';

    if(start !== undefined || limit !== undefined) {
        var LIMIT = `?start=${start}&limit=${limit}`;
    }

    const url = `${ROOT_URL_PORTFOLIO}/${LIMIT}`;
    const request = axios.get(url);


    return {
        type: FETCH_PORTFOLIO,
        payload: request
    }

}

export function fetchSinglePortfolio(singleportfolio) {

    return {
        type: FETCH_SINGLE_PORTFOLIO,
        payload: singleportfolio
    }

}

export function updatePortfolio(props){
    //console.log('action update ',props);
    const request = axios.post(`${ROOT_URL_UPDATE}`,queryString.stringify(props),{
        headers: { 'Content-Type': 'application/x-www-form-urlencoded'}
    }); 
    return {
        type: UPDATE_PORTFOLIO,
        payload: request
    }
} 