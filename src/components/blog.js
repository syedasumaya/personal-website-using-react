import React, { Component } from 'react';
import BlogList from './blog_list';
import { connect } from 'react-redux';
import { fetchBlog } from '../actions/load_more_blog';
import { deleteBlog } from '../actions/load_more_blog';
import SweetAlert from 'sweetalert-react';
import Sweetalertbox from './sweet_alert_box';


class Blog extends Component {

    constructor(props) {
        super(props);
       
        this.state = { start: 0, limit: 12, load: 'Load More', show: false, deleteId:null };
        this.blogList = this.blogList.bind(this);
        this.displayAlert = this.displayAlert.bind(this);
        this.onDeleteBlog = this.onDeleteBlog.bind(this);
        this.onStateChangeForAlert = this.onStateChangeForAlert.bind(this);

        
    }

    componentWillMount() {
        
        var limit = 6;
        if(this.props.limit !== undefined){
         limit = this.props.limit;
        } 
        //console.log(limit);
        this.props.fetchBlog(0,limit);
        
    }


    blogList() {
        
        return this.props.blogs.map((blog) => {
            return <BlogList key={blog.blog_id} blog={blog} keyindex={blog.blog_id} onDisplayAlert={this.displayAlert} />
        });
    }

    displayAlert(e) {
        
        this.setState({
            show: e.alertdisplay,
            deleteId: e.keyindex
        });

    }

    onStateChangeForAlert(display){
        this.setState({ show: display });
    }

    onDeleteBlog(id){
      this.props.deleteBlog(id); 
      this.props.fetchBlog();
    }

    loadMore() {
        return <button type="button" className="btn btn-success" onClick={()=>this.props.fetchBlog(this.state.start,this.state.limit).then(() => {
          var newstart = this.state.start;
          var newlimit = this.state.limit + 6;
          this.setState({start: newstart, limit: newlimit});
        })}>{this.state.load}</button>;
      }

    render() {

        var loadMore = '';
        if(this.props.route) {
           var loadMore = this.loadMore(this.props);
        }
        return (
            <div>
                <section id="blog">
                    <div className="container">
                        <h2 className="text-center">Blog</h2>
                        <hr className="star-primary" />
                        <div className="row">
                            {this.blogList()}
                        </div>
                        <div className="row">
                            <div className="col-md-12 col-sm-12 col-xs-12 load-more-center">
                               {loadMore}
                            </div>
                        </div>
                    </div>
                    <Sweetalertbox state={this.state} onDeleteBlog={this.onDeleteBlog} onStateChangeForAlert={this.onStateChangeForAlert}/>
                </section>

            </div>
        );
    }
}

function mapStateToProps(state) {
 
    return {
        blogs: state.blogs,
    }
}

export default connect(mapStateToProps, { fetchBlog,deleteBlog })(Blog);