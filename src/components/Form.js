import React from 'react';

const Form = (props) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(e)
  }
  return ( 
    <form className={`form ${props.className}`} onSubmit={handleSubmit} >
      {props.children}
    </form>
   );
}

Form.defaultProps = {
  children: [],
  className: ""
}
 
export default Form;