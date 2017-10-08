import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { userLogin } from '../actions/index';
import { userLogout } from '../actions/index';


class Navigation extends Component {

  constructor(props){
    super(props);
    console.log('constructor header',this.props);
    this.getActivateMenu = this.getActivateMenu.bind(this);
    this.logout = this.logout.bind(this);
    this.state = { menu:'/'};
    
   }
   static contextTypes = {
    router: PropTypes.object
  } 


  componentDidMount() {
    console.log('componentDidMount header',this.props);
  }

   getActivateMenu(activemenu){
       //console.log(activemenu);
       this.setState({menu:activemenu});
   }

  logout(event){
   
    event.preventDefault();
    this.props.userLogout();
    //this.context.router.push('/login')
    window.location.reload(this.context.router.push('/login'));
  } 

  
  render (){
    console.log('render header',this.props.props.location.pathname);

    if(this.props.userloggedin.login == true){
    var logg= <Link className={"nav-link "+this.state.loginactive}  to="#" onClick={this.logout}>Logout</Link>
    var account = <li className="dropdown">
    <Link className={(this.state.menu =='/blog-add')?' active dropdown-toggle profile-nav':' dropdown-toggle profile-nav'} data-toggle="dropdown" to="/">My Profile
    <span className="caret"></span></Link>
    <ul className="dropdown-menu">
        <li><Link to="/aboutme-update" onClick={() => this.getActivateMenu('/blog-add')}>About Me</Link></li>
        <li><Link to="#">Portfolio</Link></li>
        <li><Link to="/blog-add" onClick={() => this.getActivateMenu('/blog-add')}>Add Blog</Link></li>
    </ul>
   </li>;
    } else {
    var logg= <Link className={"nav-link "+this.state.loginactive} to="/login/" onClick={() => this.getActivateMenu('login')}>Login</Link>
    var account = '';  
   }
    return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top navbar-shrink" id="mainNav">
      <div className="container">
        <Link className="navbar-brand" to="/" onClick={() => this.getActivateMenu('home')}><img className="logo" src="../../img/logo.png" /></Link>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i className="fa fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
          <li className="nav-item">
              <Link className={(this.props.props.location.pathname =='/')?'nav-link active':'nav-link'} to="/" onClick={() => this.getActivateMenu('/')}>Home</Link>
          </li>
          <li className="nav-item">
              <Link className={(this.props.props.location.pathname =='/portfolio')?'nav-link active':'nav-link'} to="/portfolio" onClick={() => this.getActivateMenu('/portfolio')}>Portfolio</Link>
          </li>
          <li className="nav-item">
              <Link className={(this.props.props.location.pathname =='/about')?'nav-link active':'nav-link'} to="/about" onClick={() => this.getActivateMenu('/about')}>About</Link>
          </li>
          <li className="nav-item">
              <Link className={(this.props.props.location.pathname =='/blog')?'nav-link active':'nav-link'} to="/blog" onClick={() => this.getActivateMenu('/blog')}>Blog</Link>
          </li>
          <li className="nav-item">
              <Link className={(this.props.props.location.pathname =='/contact')?'nav-link active':'nav-link'} to="/contact" onClick={() => this.getActivateMenu('/contact')}>Contact</Link>
          </li>
            {account}
           
            <li className="nav-item">
                {logg}
            </li>
          </ul>
        </div>
      </div>
    </nav>
    );
    }

}
function mapStateToProps(state){
 
  return { userloggedin: state.userloggedin }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({userLogout},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Navigation);

//export default Navigation;
