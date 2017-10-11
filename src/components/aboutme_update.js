import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { updateAboutme } from '../actions/index';
import FormField from './form_field';

class AboutmeUpdate extends Component {

   emailSuccess(message){

    var bClas = '';
    var txt = '';
     if(message.success == 'success'){
      bClas = 'alert-success';
      txt = 'Success!';
     }
     else{
      bClas = 'alert-danger';
      txt = 'Warning!';
     }
     return(
       <div className={`alert  ${bClas}`} >
           <strong>{txt}</strong> {message.msg}
       </div>
     );

   }

  getFormField(props) {

    const fields = [
      {label:"Description", id:"description", type:"text", placeholder:"About me...", fieldtype:"textarea"},
      {label:"Excerpt", id:"excerpt", type:"text", placeholder:"Excerpt", fieldtype:"textarea"},
      
   ];

     return fields.map((field) => { 
        return <FormField key={field.id} field={field} props={props}  />
    });
    
  }     

   render(){

     const {fields:{description,excerpt},handleSubmit} = this.props;
     var emailMessage = '';
     if(this.props.emailsend.success){
      emailMessage = this.emailSuccess(this.props.emailsend);
     } 
    return (
    <section id="contact">
      <div className="container">
        <h2 className="text-center">About Me (Update)</h2>
        <hr className="star-primary"/>
        <div className="row">
          <div className="col-lg-8 mx-auto">
            
            <form name="AboutMeUpdateForm" id="AboutMeUpdateForm" onSubmit={handleSubmit(this.props.updateAboutme)}>
              {this.getFormField(this.props)}
              <br/>

              <div id="success">{emailMessage}</div>
              <div className="form-group">
                <button type="submit" className="btn btn-success btn-lg" id="sendMessageButton">Send</button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </section>
    );
  }

}

function validate(values){
  
   const errors = {};
   if(!values.name){
    errors.name = 'Enter your name';
   }
   if(!values.email){
     errors.email = 'Enter your email';
   }
   
  if(!values.message){
    errors.message = 'Enter your message';
   }
   return errors;
}

function mapStateToProps(state) {
  return {
    emailsend: state.emailsend,
  }
}

export default reduxForm({
   form: 'AboutMeUpdateForm',
   fields: ['description','excerpt'],
   validate
},mapStateToProps,{updateAboutme})(AboutmeUpdate);