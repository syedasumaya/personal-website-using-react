import React from 'react';
import {is_logged_in} from '../config';
import { Link } from 'react-router';


const BlogList = ({ keyindex,blog,onDisplayAlert }) => {
    var alertdisplay = true;
    var confAccess = '';
    if(is_logged_in.login == true){
        var confAccess = <div className="info"><span className="left-btn"><Link to={`/blog-edit/${blog.blog_id}`}>Edit</Link></span><span className="right-btn"><a className="dltbtn" onClick={()=>onDisplayAlert({alertdisplay,keyindex})}>Delete</a></span></div>
    } 

    return (
    <div className="col-md-4"> 
        <div className="post-single">
            
            <div className="post-img">
                <Link to="#">
                    <img src={blog.blog_img}/>
                </Link>    
                    {confAccess}
                
            </div>
            <div className="post-desk">
                <h4 className="text-uppercase">
                    <Link to={"/blog-single/"+blog.blog_id}>{blog.blog_title}</Link>
                </h4>
                <div className="date">
                    <a href="#" className="author">author: {blog.username}</a> 
                    &nbsp;
                    <a href="#" className="author">category: {blog.blog_category_title}</a>
                    &nbsp; {blog.blog_update_date}
                </div>
                <p>
                {blog.blog_excerpt}
                </p>
                <Link to={"/blog-single/"+blog.blog_id} className="p-read-more">Read More</Link>
            </div>
       </div>
    </div>
    );

}

export default BlogList;