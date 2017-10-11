export const ROOT_URL = "http://portfolio.dev/api/example";
export const BASE_URL = "http://portfolio.dev/";
export const is_logged_in = {login : localStorage.getItem('token') == "true" ? true : false };

export const CURRENT_DATE = get_current_date();

function get_current_date(){
    var currentdate = new Date();
    var month = (1 + currentdate.getMonth()).toString();
    month = month.length > 1 ? month : "0" + month;

    var day = currentdate.getDate().toString();
    day = day.length > 1 ? day : "0" + day;

   return  currentdate.getFullYear() + "-" + month + "-" + day;
}

export const queryString = require('query-string');
