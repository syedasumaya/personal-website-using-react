import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { userLogin } from '../actions/index';
import FormField from './form_field';


class Login extends Component {

  constructor(props){
    super(props);
    this.state = { userloggedin: false, userloggedinMsg: '', formSubmit: false };
    this.onSubmit = this.onSubmit.bind(this);
    this.loginMsg = this.loginMsg.bind(this);
  }  
 
  static contextTypes = {
  router: PropTypes.object
}  


getFormField(props) {

        const fields = [
          {label:"UserName", id:"username", type:"text", placeholder:"UserName", fieldtype:"input"},
          {label:"Password", id:"password", type:"password", placeholder:"Password", fieldtype:"input"},
          
       ];
         return fields.map((field) => { 
            return <FormField key={field.id} field={field} props={props}  />
        });
}   

onSubmit(props) {
  this.props.userLogin(props).then((event)=>{
      //console.log('AfterSubmit',event);
      this.setState({ userloggedin: event.payload.data.login });
      if(this.state.userloggedin){
        this.context.router.push('/');
      } else {
        this.setState({ userloggedinMsg: 'Please Type correct username and password!', formSubmit: true });
      }
  })
  
}

loginMsg(){
  
       return(
         <div className="alert alert-danger">
             <strong>Warning!</strong> {this.state.userloggedinMsg}
         </div>
       );
  
     }

 render() {   
  
   var warning = '';
   if(this.state.userloggedin==false && this.state.formSubmit==true){
    warning = this.loginMsg();
   }
   const {fields:{username,password},handleSubmit} = this.props;
    return (
        <section id="login">
          <div className="container">
            <h2 className="text-center">Login to Your Website</h2>
            <hr className="star-primary"/>
            <div className="row">
              <div className="col-lg-8 mx-auto">
                  <form name="sentMessage" id="loginForm" onSubmit={handleSubmit(this.onSubmit)}>
                   {this.getFormField(this.props)}
                  <br/>
                  {warning}
                  <div className="form-group">
                    <button type="submit" className="btn btn-success btn-lg" id="loginButton">Login</button>
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

    if(!values.username){
      errors.username = 'Enter your username';
     }
     if(!values.password){
       errors.password = 'Enter valid password';
     }

    return errors;
 }

export default reduxForm({
    form: 'LoginForm',
    fields: ['username','password'],
    validate
 },null,{userLogin})(Login);

