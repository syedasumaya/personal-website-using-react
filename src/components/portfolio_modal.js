import React, { Component } from 'react';
import { Link } from 'react-router';
import {is_logged_in} from '../config';
import PortfolioContentView from './portfolio_content_view';
import PortfolioContentEdit from './portfolio_content_edit';
var content = '';
class PortfolioModal extends Component {
//const PortfolioModal = ({ project,props }) => {
  //console.log('modal ',is_logged_in);
  constructor(props) {
    super(props);
    //console.log('modal ',props);
  }
  render() {
    //console.log('modal render ',this.props.project);
    if(is_logged_in) {
      var content = <PortfolioContentEdit  project={this.props} />
    } else {
     
      var content = <PortfolioContentView project={this.props.project} />
    }
    return (
      <div className="portfolio-modal modal fade " id={"portfolioModal"+this.props.project.project_id} role="dialog" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="close-modal" data-dismiss="modal">
            <div className="lr">
              <div className="rl"></div>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <div className="modal-body">
                  {content} 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }

}

export default PortfolioModal;