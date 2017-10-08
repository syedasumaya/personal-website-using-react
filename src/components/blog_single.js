import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSingleBlog } from "../actions/load_more_blog";

class BlogSingle extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    console.log('componentWillMount blog single ',this.props);
    this.props.fetchSingleBlog(this.props.params.id);
  }

  render() {
    
    //console.log(this.props);
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="blog-classic">
              <div className="blog-post">
                <div className="full-width">
                  <img src={this.props.singleblog.blog_img} alt="" />
                </div>
                <h4 className="text-uppercase">
                  <a href="blog-single.html">
                    {this.props.singleblog.blog_title}
                  </a>
                </h4>
                <ul className="post-meta">
                  <li>
                    <i className="fa fa-user" />posted by <a href="#">admin</a>
                  </li>
                  <li>
                    <i className="fa fa-folder-open" />{" "}
                    <a href="#">lifestyle</a>, <a href="#">travel</a>,{" "}
                    <a href="#">fashion</a>
                  </li>
                  <li>
                    <i className="fa fa-comments" /> <a href="#">4 comments</a>
                  </li>
                </ul>

                <div className="blog-content">
                  {this.props.singleblog.blog_content}
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <h2>Sidebar</h2>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
 console.log(JSON.stringify(state.singleblog.blog_content));
  return {
    singleblog: state.singleblog
  };
}

export default connect(mapStateToProps, { fetchSingleBlog })(BlogSingle);
//export default BlogSingle;
