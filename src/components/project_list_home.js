import React from 'react';

const ProjectListHome = ({ keyindex,project }) => {
   
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
          </div>
    );

}

export default ProjectListHome;