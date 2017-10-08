import React, { Component } from 'react';

//import custom components
import Navigation from './navigation';
import Banner from './banner';
import Portfolio from './portfolio';
import About from './about';
import Blog from './blog';
import Contact from './contact';
import Footer from './footer';


const HomePage = () => { 
    
        return (
                  
          <div>
          <Banner />
          <Portfolio />
          <About readmoreaboutbtn="true"/>
          <Blog start="0" limit="3"/>
          <Contact />
          </div>
       
        );
    
    }
    
export default  HomePage;