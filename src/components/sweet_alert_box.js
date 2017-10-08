import React, { Component } from 'react';
import SweetAlert from 'sweetalert-react';

var display = false;
const Sweetalertbox = (props) =>{
   
    return (<SweetAlert
        show= {props.state.show}
        title="Are you sure?"
        text="Once deleted, you will not be able to recover this imaginary file!"
        showCancelButton
            onConfirm={() => {
                
                props.onStateChangeForAlert(display);
                props.onDeleteBlog(props.state.deleteId);
            }}
            onCancel={() => { props.onStateChangeForAlert(display);}}
            onClose={() => console.log('close')}

       />);
}
export default Sweetalertbox;