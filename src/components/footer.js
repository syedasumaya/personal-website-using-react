import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Footer extends Component {
  constructor(props){
    super(props);
   }

   componentWillMount() {
   // console.log('componentWillMount Footer',this.props);
    
  }
  render(){
    return (
        <footer className="text-center">
      <div className="footer-above">
        <div className="container">
          <div className="row">
            <div className="footer-col col-md-4">
              <h3>Location</h3>
              <p>3481 Melrose Place
                <br/>Beverly Hills, CA 90210</p>
            </div>
            <div className="footer-col col-md-4">
              <h3>Around the Web</h3>
              <ul className="list-inline">
                <li className="list-inline-item">
                  <a className="btn-social btn-outline" href="#">
                    <i className="fa fa-fw fa-facebook"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn-social btn-outline" href="#">
                    <i className="fa fa-fw fa-google-plus"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn-social btn-outline" href="#">
                    <i className="fa fa-fw fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn-social btn-outline" href="#">
                    <i className="fa fa-fw fa-linkedin"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn-social btn-outline" href="#">
                    <i className="fa fa-fw fa-dribbble"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-col col-md-4">
              <h3><Link className="" to="/about">About Freelancer</Link></h3>
              <p>Freelance is a free to use, open source Bootstrap theme created by
                <a href="http://startbootstrap.com">Start Bootstrap</a>.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-below">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              Copyright &copy; Your Website 2017
            </div>
          </div>
        </div>
      </div>
    </footer>
    );
  }

}
function mapStateToProps(state){
  return state;
}
//export default Footer;
export default connect(mapStateToProps,null)(Footer);