import React, { Component } from 'react';

//import custom components
import Navigation from './navigation';
import Footer from './footer';


export default class App extends Component {

  render() {
    console.log('app ',this.props);
    return (
      <div>
          <Navigation props={this.props}/>
          {this.props.children}
          <Footer />
      </div>
    );
  }
}