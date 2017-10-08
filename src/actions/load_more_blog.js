import axios from 'axios';
import {ROOT_URL} from '../config';

export const FETCH_BLOG = 'FETCH_BLOG';
export const FETCH_SINGLE_BLOG = 'FETCH_SINGLE_BLOG';
export const DELETE_BLOG = 'DELETE_BLOG';
export const FETCH_BLOG_CATEGORIES = 'FETCH_BLOG_CATEGORIES';
export const UPDATE_BLOG = 'UPDATE_BLOG';

const ROOT_URL_BLOG = `${ROOT_URL}/blog`;
const ROOT_URL_BLOG_CATEGORIES = `${ROOT_URL}/categories`;
const ROOT_URL_UPDATE = `${ROOT_URL}/updateblog`;

const queryString = require('query-string');

export function fetchBlog(start,limit) {
    
    var LIMIT = '?start=0&limit=3';

    if(start !== undefined || limit !== undefined) {
        var LIMIT = `?start=${start}&limit=${limit}`;
    }

    const url = `${ROOT_URL_BLOG}/${LIMIT}`;
    const request = axios.get(url);


    return {
        type: FETCH_BLOG,
        payload: request
    }

}

export function fetchSingleBlog(id) {
    
    var bid = '?blog_id='+id;

    const url = `${ROOT_URL_BLOG}/${bid}`;
    const request = axios.get(url);

    return {
        type: FETCH_SINGLE_BLOG,
        payload: request
    }

}

export function deleteBlog(id) {
    console.log('action', id);
    var bid = '?delete=true&blog_id='+id;

    const url = `${ROOT_URL_BLOG}/${bid}`;
    const request = axios.get(url);

    return {
        type: DELETE_BLOG,
        payload: request
    }

}

export function fetchBlogCategories() {
    var param = '?type=blog';
    const url = `${ROOT_URL_BLOG_CATEGORIES}/${param}`;
    const request = axios.get(url);

    return {
        type: FETCH_BLOG_CATEGORIES,
        payload: request
    }

}

export function updateBlog(props) {
    
    const request = axios.post(`${ROOT_URL_UPDATE}`,queryString.stringify(props),{
        headers: { 'Content-Type': 'application/x-www-form-urlencoded'}
    }); 
    
    return {
        type: UPDATE_BLOG,
        payload: request
    }
}    