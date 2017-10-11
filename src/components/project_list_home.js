import React from 'react';
import { Link } from 'react-router';

const ProjectListHome = ({ keyindex,project,onDisplayAlert }) => {
  var alertdisplay = true;
  var pid = project.project_id;
    return (
       
        <div className="col-sm-4 portfolio-item">
            <a className="portfolio-link" href={"#portfolioModal"+project.project_id} data-toggle="modal">
              <div className="caption">
                <div className="caption-content">
                  <i className="fa fa-search-plus fa-3x"></i>
                </div>
              </div>
              <img className="img-fluid" src={project.project_img} alt=""/>
            </a>
            <div className="info pinfo"><span className="left-btn"><Link to={`/blog-edit/`}></Link></span>
            <span className="right-btn"><a className="dltbtn" onClick={()=>onDisplayAlert({alertdisplay,pid})}>Delete</a></span></div>
          </div>
    );

}

export default ProjectListHome;