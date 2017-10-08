import React, { Component } from "react";
import { reduxForm } from "redux-form";
import { change } from "redux-form";
import { updateBlog } from "../actions/load_more_blog";
import { Link } from "react-router";
import { is_logged_in } from "../config";
import { fetchSingleBlog } from "../actions/load_more_blog";
import { fetchBlogCategories } from "../actions/load_more_blog";
import SiteMessage from "./site_message";

import { ROOT_URL } from "../config";
import { BASE_URL } from "../config";
import { CURRENT_DATE } from "../config";

import FroalaEditor from "react-froala-wysiwyg";
import DateTimeField from "react-bootstrap-datetimepicker";

class BlogEdit extends Component {
  constructor(props) {
   
    super(props);
    
    this.state = {
      content: "",
      file: "",
      imagePreviewUrl: "",
      date: CURRENT_DATE,
      format: "YYYY-MM-DD",
      inputFormat: "DD/MM/YYYY",
      mode: "date",
      category: "",
      btnStatus: ""
      
    };
    //this.props.dispatch(change("blogUpdateForm", "bdate", curdateformat));

    this.handleModelChange = this.handleModelChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    
  }
  
  componentWillMount() {
    //console.log('componentWillMount blog edit ',this.props);
    this.props.fetchSingleBlog(this.props.params.id);
    this.props.fetchBlogCategories();
  }

  componentDidMount() {
    
    setTimeout(() => {
    
      this.setState({
        content: this.props.singleblog.blog_content,
        imagePreviewUrl: this.props.values.bimage,
        category: this.props.singleblog.blog_category_id,
        date: this.props.singleblog.blog_update_date
      });
      
    }, 1000);
  }

  handleModelChange(model) {
    this.setState({
      content: model
    });
    this.props.dispatch(change("blogUpdateForm", "bcontent", model));
  }

  handleImageChange(e) {
    e.preventDefault();
    
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result,
        btnStatus:"disabled"
      });
    };
    reader.readAsDataURL(file);

    setTimeout(() => {
      var request = new XMLHttpRequest();
      // POST to httpbin which returns the POST data as JSON
      request.open("POST", `${ROOT_URL}/uploadfile`, /* async = */ false);

      var formData = new FormData();
      formData.append("file", file);

      request.send(formData);
      var imgUrl = JSON.parse(request.response);
      //console.log(imgUrl.url);
      this.props.dispatch(change("blogUpdateForm", "bimage", imgUrl.url));
      this.setState({btnStatus:""});
    }, 1000);
  }

  handleDateChange(e) {   
    this.props.dispatch(change("blogUpdateForm", "bdate", e));
  }

  displayMessage(props) {
    if (typeof props.blogUpdate.success !== "undefined") {
      if (props.blogUpdate.success == true) {
        var cls = "alert-success";
        var txt = "Success!";
        var msg = props.blogUpdate.msg;
      } else {
        var cls = "alert-warning";
        var txt = "Warning!";
        var msg = "Blog Updated failed";
      }
      window.scrollTo(0, 0);
      return <SiteMessage cls={cls} txt={txt} msg={msg} />;
    }
  }

  render() {
     
   
    const {
      fields: { btitle, bcontent, bdate, bimage, bexcerpt, bid, bcategory },
      handleSubmit,
      handleModelChange,
      feditor
    } = this.props;

    const { date, format, mode, inputFormat } = this.state;

    let imagePreviewUrl = this.state.imagePreviewUrl;
    let $imagePreview = null;
    if (imagePreviewUrl) { 
      $imagePreview = (
        <img className="blogCoverImgPreview" src={imagePreviewUrl} />
      );
    }
    
    return (
      <div className="container">
        <div className="row">
          <div className="blog-classic">
            <form
              name="blogUpdateForm"
              id="blogUpdateForm"
              onSubmit={handleSubmit(this.props.updateBlog)}
            >
            <h2 className="form-heading">Update Blog</h2>
            <hr/>
              <div className="col-md-8 left-side">
               
                {this.displayMessage(this.props)}
                <input
                  className="form-control"
                  id=""
                  type="hidden"
                  name="bid"
                  {...bid}
                />

                <div className="control-group">
                  <div className={`form-group`}>
                    <label>Title</label>
                    <input
                      className="form-control"
                      id=""
                      type="text"
                      name="btitle"
                      placeholder=""
                      {...btitle}
                    />
                    <p className="help-block text-danger">
                      {btitle.touched ? btitle.error : ""}
                    </p>
                  </div>
                </div>

                <div className="control-group">
                  <div className={`form-group`}>
                    <label>Content</label>
                    <input type="hidden" name="bcontent" {...bcontent} />
                    <div className="sample">
                      <FroalaEditor
                        tag="textarea"
                        config={{ placeholderText: "Edit Your Content Here!" }}
                        model={this.state.content}
                        onModelChange={this.handleModelChange}
                      />
                    </div>
                    <p className="help-block text-danger">
                      {bcontent.touched ? bcontent.error : ""}
                    </p>
                  </div>
                </div>

                <div className="control-group">
                  <div className={`form-group`}>
                    <label>Excerpt</label>
                    <textarea
                      className="form-control"
                      id=""
                      type="text"
                      name="bexcerpt"
                      placeholder=""
                      {...bexcerpt}
                    />
                    <p className="help-block text-danger">
                      {bexcerpt.touched ? bexcerpt.error : ""}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 right-side">

                <div className="control-group">
                  <div className={`form-group`}>
                    <label>Category</label>
                      <select name="bcategory" className={`form-control`} {...bcategory} >
                        <option value="">Select</option>
                        {this.props.categories.map((category) => {
                           return <option key={category.blog_category_id} value={category.blog_category_id}>{category.blog_category_title}</option>
                        })}
                      </select>
                      <p className="help-block text-danger">
                      {bcategory.touched ? bcategory.error : ""}
                    </p>
                  </div>
                </div>

                <div className="control-group">
                  <div className={`form-group`}>
                    <label>Cover Image</label>

                    <input type="file" onChange={this.handleImageChange} />

                    <br />
                    {$imagePreview}
                    <p className="help-block text-danger" />
                  </div>
                </div>

                <div className="control-group">
                  <div className={`form-group datefieldcls`}>
                    <label>Date</label>
                    <DateTimeField
                      dateTime={date}
                      format={format}
                      inputFormat={inputFormat}
                      onChange={this.handleDateChange}
                      viewMode={mode}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <button
                    type="submit"
                    className="btn btn-success btn-lg"
                    id="updateBlogButton"
                    disabled={this.state.btnStatus}
                  >
                    Update
                  </button>
                </div>

              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  if (!values.btitle) {
    errors.btitle = "Enter blog title";
  }
  if (!values.bcontent) {
    errors.bcontent = "Enter blog content";
  }

  if (!values.bexcerpt) {
    errors.bexcerpt = "Enter blog excerpt";
  }
  if (!values.bcategory) {
    errors.bcategory = "Select Category!";
  }

  return errors;
}

function mapStateToProps(state) {
  //console.log('mapStateToProps ',state.categories);
  return {
    singleblog: state.singleblog,
    initialValues: {
      btitle: state.singleblog.blog_title,
      bcontent: state.singleblog.blog_content,
      bdate: state.singleblog.blog_update_date,
      bimage: state.singleblog.blog_img,
      bexcerpt: state.singleblog.blog_excerpt,
      bid: state.singleblog.blog_id,
      bcategory: state.singleblog.blog_category_id
    },
    blogUpdate: state.blogUpdate,
    categories: state.categories
  };
}

export default reduxForm(
  {
    form: "blogUpdateForm",
    fields: ["btitle", "bcontent", "bdate", "bimage", "bexcerpt", "bid", "bcategory"],
    validate
  },
  mapStateToProps,
  { updateBlog, fetchSingleBlog, fetchBlogCategories }
)(BlogEdit);
