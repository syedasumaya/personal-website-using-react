import React, { Component } from 'react';

const SiteMessage = (props) =>{
   
   return (
    <div className={"alert "+props.cls}>
       <strong>{props.txt}</strong> {props.msg}
     </div>
   );
    
}
export default SiteMessage;