import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { updatePortfolio } from '../actions/index';
import { Link } from 'react-router';
import {is_logged_in} from '../config';

class PortfolioContentEdit extends Component {
//const PortfolioContentEdit = ({ project, props }) => {
   constructor(props) {
    super(props);
   // console.log('edit ',props);
  }
  handleSubmit(values){
    console.log('handleSubmit ',values);
  }

    render() {
        const cont = this.props.project;
        const {fields:{ptitle,pimage,pclient,pdate,pservice},handleSubmit} = this.props;
        return (
        <form name="portfolioUpdate" id="portfolioUpdateForm" onSubmit={handleSubmit(this.props.updatePortfolio)}>
            <h2>Update Portfolio</h2>
        <input className="form-control" id="" type="hidden" />
        
        <div className="control-group">
            <div className={`form-group`}>
                 <label>Project Title</label>
                 <input className="form-control" id="" type="text" name="ptitle" value={cont.project.project_title} {...ptitle}  placeholder="Project Title...."/>
                 <p className="help-block text-danger"></p>
           </div>
        </div>

        <div className="control-group">
            <div className={`form-group`}>
                 <label>Upload Project Image</label>
                 <input className="form-control" id="" type="file"   placeholder="Project Image...."/>
                 <br/>
                 <img className="img-fluid img-centered" src={cont.project.project_img} alt=""/>
                 <p className="help-block text-danger"></p>
           </div>
        </div>

        <div className="control-group">
            <div className={`form-group`}>
                 <label>Project Client</label>
                 <input className="form-control" id="" type="text"   placeholder="Project Client...."/>
                 <p className="help-block text-danger"></p>
           </div>
        </div>

        <div className="control-group">
            <div className={`form-group`}>
                 <label>Project Completed Date</label>
                 <input className="form-control" id="" type="date"   placeholder="Project completed date...."/>
                 <p className="help-block text-danger"></p>
           </div>
        </div>

        <div className="control-group">
            <div className={`form-group`}>
                 <label>Project Service</label>
                 <input className="form-control" id="" type="text"   placeholder="Project service...."/>
                 <p className="help-block text-danger"></p>
           </div>
        </div>

        <div className="form-group">
                <button type="submit" className="btn btn-success btn-lg" id="updatePortfolioButton">Update</button>
        </div>

  </form>
    );
   }
}

//export default PortfolioContentEdit;
export default reduxForm({
    form: 'portfolioUpdateForm',
    fields: ['ptitle','pimage','pclient','pdate','pservice']
 },null,{updatePortfolio})(PortfolioContentEdit);