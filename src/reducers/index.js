import { combineReducers } from 'redux';
import PortfolioReducer from './reducer_portfolio';
import emailsendReducer from './reducer_email';
import userLoginReducer from './reducer_login';
import BlogReducer from './reducer_blog';
import SingleBlogReducer from './reducer_singleblog';
import BlogUpdateReducer from './reducer_blogupdate';
import CategoryReducer from './reducer_categories';

import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
    portfolio: PortfolioReducer,
    emailsend : emailsendReducer,
    userloggedin: userLoginReducer,
    form: formReducer,
    blogs: BlogReducer,
    singleblog: SingleBlogReducer,
    blogUpdate: BlogUpdateReducer,
    categories: CategoryReducer
});

export default rootReducer;
