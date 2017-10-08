import React, { Component } from 'react';
import axios from 'axios';


class Banner extends Component {
    
      constructor(props){
          super(props);
          this.state = { banner: '' };

          axios.get('http://portfolio.dev/api/example/banner/')
          .then(function (response) {
            this.setState({banner: response.data})
          }.bind(this));
         
      }
    
      render() { 
      return (
    <header className="masthead">
        <div className="container">
        <div className="intro-text">
          <span className="name">{this.state.banner.banner_title}</span>
          <hr className="star-light" />
          <span className="skills">{this.state.banner.banner_description}</span>
        </div>
       </div>
    </header>

      );
      }
    
    
    }

    export default Banner;