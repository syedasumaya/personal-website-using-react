import React from 'react';
var fieldtype = '';

const FormField = ({ field, props }) => {

   const fname = props.fields[field.id];
   
   if(field.fieldtype == "input"){
     var fieldtype = <input className="form-control" id={field.id} type={field.type} {...fname}  placeholder={field.placeholder}/>;
   } 
   if(field.fieldtype == "textarea"){
    var fieldtype = <textarea className={`form-control ${fname.touched && fname.invalid ? 'has-danger':''}`} id={field.id} {...fname} rows="5" placeholder={field.placeholder}></textarea>;
  } 
    
    return (
       
        <div className="control-group">
                <div className={`form-group ${fname.touched && fname.invalid ? 'has-danger':''}`}>
                  <label>{field.label}</label>
                  {fieldtype}
                  <p className="help-block text-danger">{fname.touched ? fname.error:''}</p>
                </div>
        </div>
    );

}

export default FormField;