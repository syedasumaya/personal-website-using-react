import React from 'react';
import { Link } from 'react-router';
import {is_logged_in} from '../config';

const PortfolioContentView = ({ project }) => {
    return (
        <div>
        <h2>{project.project_title}</h2>
        <hr className="star-primary"/>
                  <img className="img-fluid img-centered" src={project.project_img} alt=""/>
                  <p>{project.project_description}</p>
                  <ul className="list-inline item-details">
                    <li>Client:
                      <strong>
                        <a href="http://startbootstrap.com">{project.project_client}</a>
                      </strong>
                    </li>
                    <li>Date:
                      <strong>
                        <a href="http://startbootstrap.com">{project.project_completed_date}</a>
                      </strong>
                    </li>
                    <li>Service:
                      <strong>
                        <a href="http://startbootstrap.com">{project.project_service}</a>
                      </strong>
                    </li>
                  </ul>
                  <button className="btn btn-success" type="button" data-dismiss="modal">
                    <i className="fa fa-times"></i>
                    Close
                  </button>
        </div>
    );
}

export default PortfolioContentView;