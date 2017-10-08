import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { sendEmail } from '../actions/index';
import FormField from './form_field';

class Contact extends Component {

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
      {label:"Name", id:"name", type:"text", placeholder:"Name", fieldtype:"input"},
      {label:"Email Address", id:"email", type:"email", placeholder:"Email", fieldtype:"input"},
      {label:"Phone Number", id:"phone", type:"tel", placeholder:"Phone Number", fieldtype:"input"},
      {label:"Message", id:"message", type:"", placeholder:"Message", fieldtype:"textarea"}
   ];

     return fields.map((field) => { 
        return <FormField key={field.id} field={field} props={props}  />
    });
    
  }     

   render(){

     const {fields:{name,email,phone,message},handleSubmit} = this.props;
     var emailMessage = '';
     if(this.props.emailsend.success){
      emailMessage = this.emailSuccess(this.props.emailsend);
     } 
    return (
    <section id="contact">
      <div className="container">
        <h2 className="text-center">Contact Me</h2>
        <hr className="star-primary"/>
        <div className="row">
          <div className="col-lg-8 mx-auto">
            
            <form name="sentMessage" id="contactForm" onSubmit={handleSubmit(this.props.sendEmail)}>
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
   form: 'ContactForm',
   fields: ['name','email','phone','message'],
   validate
},mapStateToProps,{sendEmail})(Contact);