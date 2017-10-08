import React from 'react';
import ReactDom from 'react-dom';
//import { Route, IndexRoute } from 'react-router';
import { Router, Route, browserHistory, IndexRoute  } from 'react-router'
import {is_logged_in} from './config';

import App from './components/app';
import Portfolio from './components/portfolio';
import About from './components/about';
import Contact from './components/contact';
import HomePage from './components/home_page';
import Login from './components/login';
import ErrorPage from './components/error_page';
import Blog from './components/blog';
import BlogSingle from './components/blog_single';
import BlogEdit from './components/blog_edit';
import AboutmeUpdate from './components/aboutme_update';

console.log('route ',is_logged_in);


export default (
    <Route path="/" component={App}>
       <IndexRoute component={HomePage} />
       <Route path="portfolio" component={Portfolio} />
       <Route path="about" component={About} />
       <Route path="contact" component={Contact} />
       <Route path="blog" component={Blog} />
       <Route path="blog-single(/:id)" component={BlogSingle} />
       <Route path="blog-edit(/:id)" component={(is_logged_in.login == true)? BlogEdit : ErrorPage} />
       <Route path="blog-add" component={(is_logged_in.login == true)? BlogEdit : ErrorPage} />
       <Route path="login" component={(is_logged_in.login == false)? Login : ErrorPage} />
       <Route path="aboutme-update" component={(is_logged_in.login == true)? AboutmeUpdate : ErrorPage} />
       
       
    
    </Route>
);