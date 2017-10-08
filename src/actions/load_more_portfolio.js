import axios from 'axios';
import {ROOT_URL} from '../config';
export const FETCH_PORTFOLIO = 'FETCH_PORTFOLIO';

const ROOT_URL_PORTFOLIO = `${ROOT_URL}/portfolio`;

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