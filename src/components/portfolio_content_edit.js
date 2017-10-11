import React, { Component } from "react";
import { connect } from 'react-redux';
import { reduxForm } from "redux-form";
import { change } from "redux-form";
import { updatePortfolio } from "../actions/load_more_portfolio";
import { Link } from "react-router";
import { fetchSinglePortfolio } from "../actions/load_more_portfolio";
import { is_logged_in } from "../config";
import { ROOT_URL } from "../config";
import { BASE_URL } from "../config";
import SiteMessage from "./site_message";

class PortfolioContentEdit extends Component {
 
  constructor(props) {
    super(props);
    
    var conProp = props.project.project;
    
    this.state = {
        ptitle : conProp.project_title,
        pclient : conProp.project_client,
        pdate : conProp.project_completed_date,
        pdescription: conProp.project_description,
        pid : conProp.project_id,
        pimage: conProp.project_img,
        pservice: conProp.project_service,
        file: "",
        imagePreviewUrl: conProp.project_img,
        btnStatus: ""
      };
    this.handleChange = this.handleChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
   
  }
  componentDidMount(){
    //console.log("componentDidMount ", this.props);
  
  
  }
  handleChange(event){
   
    this.setState({pid: this.props.project.project.project_id});
    switch(event.target.name) {
        case "ptitle":
        this.setState({ptitle: event.target.value});
        break;
        case "pclient":
        this.setState({pclient: event.target.value});
        break;
        case "pdate":
        this.setState({pdate: event.target.value});
        break;
        case "pdescription":
        this.setState({pdescription: event.target.value});
        break;
        case "pservice":
        this.setState({pservice: event.target.value});
        break;
    }
    
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
      request.open("POST", `${ROOT_URL}/uploadfile/`, /* async = */ false);

      var formData = new FormData();
      formData.append("file", file);

      request.send(formData);
      var imgUrl = JSON.parse(request.response);
      console.log(imgUrl.url);
      //this.props.dispatch(change("portfolioUpdateForm", "pimage", imgUrl.url));
      this.setState({btnStatus:"",pimage: imgUrl.url});
    }, 1000);
  }
  handleSubmit(event){
    event.preventDefault();
    this.props.updatePortfolio(this.state)
  }

  displayMessage(props) {
    if (typeof props.portfolioUpdate.success !== "undefined") {
      if (props.portfolioUpdate.success == true) {
        var cls = "alert-success";
        var txt = "Success!";
        var msg = props.portfolioUpdate.msg;
      } else {
        var cls = "alert-warning";
        var txt = "Warning!";
        var msg = "Portfolio Updated failed";
      }
      window.scrollTo(0, 0);
      return <SiteMessage cls={cls} txt={txt} msg={msg} />;
    }
  }

  render() {
    const cont = this.props.project.project;
    const {
      handleSubmit
    } = this.props;

    let imagePreviewUrl = this.state.imagePreviewUrl;
    let $imagePreview = null;
    if (imagePreviewUrl) { 
      $imagePreview = (
        <img className="blogCoverImgPreview" src={imagePreviewUrl} />
      );
    }

    return (
      <form
        name="portfolioUpdateForm"
        id="portfolioUpdateForm"
        onSubmit={this.handleSubmit}
      >
        <h2>Update Portfolio</h2>
        {this.displayMessage(this.props)}
        <input className="form-control" id="" type="hidden" name="pid"  value={this.state.pid} onChange={this.handleChange}/>

        <div className="control-group">
          <div className={`form-group`}>
            <label>Project Title</label>
            <input
              className="form-control"
              id=""
              type="text"
              name="ptitle"
              
              value={this.state.ptitle}
              onChange={this.handleChange}
              placeholder="Project Title...."
            />
            <p className="help-block text-danger" />
          </div>
        </div>

        <div className="control-group">
          <div className={`form-group`}>
            <label>Upload Project Image</label>
            <input
              className="form-control"
              id=""
              type="file"
              placeholder="Project Image...."
              onChange={this.handleImageChange}
             
            />
            <br />
            
            {$imagePreview}
            <p className="help-block text-danger" />
          </div>
        </div>

        <div className="control-group">
          <div className={`form-group`}>
            <label>Project Description</label>
            <textarea
              className="form-control"
              id=""
              type="text"
              name="pdescription"
              value={this.state.pdescription}
              
              onChange={this.handleChange}
              placeholder="Project Description...."
            />
            <p className="help-block text-danger" />
          </div>
        </div>

        <div className="control-group">
          <div className={`form-group`}>
            <label>Project Client</label>
            <input
              className="form-control"
              id=""
              type="text"
              name="pclient"
              value={this.state.pclient}
              
              onChange={this.handleChange}
              placeholder="Project Client...."
            />
            <p className="help-block text-danger" />
          </div>
        </div>

        <div className="control-group">
          <div className={`form-group`}>
            <label>Project Completed Date</label>
            <input
              className="form-control"
              id=""
              type="date"
              name="pdate"
              value={this.state.pdate}
              
              onChange={this.handleChange}
              placeholder="Project completed date...."
            />
            <p className="help-block text-danger" />
          </div>
        </div>

        <div className="control-group">
          <div className={`form-group`}>
            <label>Project Service</label>
            <input
              className="form-control"
              id=""
              type="text"
              name="pservice"
              value={this.state.pservice}
             
              onChange={this.handleChange}
              placeholder="Project service...."
            />
            <p className="help-block text-danger" />
          </div>
        </div>

        <div className="form-group">
          <button
            type="submit"
            className="btn btn-success btn-lg"
            id="updatePortfolioButton"
          >
            Update
          </button>
        </div>
      </form>
    );
  }
}

function mapStateToProps(state) {   
    return {
      portfolioUpdate: state.blogUpdate
    };
  }

export default connect(mapStateToProps,{ updatePortfolio, fetchSinglePortfolio })(PortfolioContentEdit);
