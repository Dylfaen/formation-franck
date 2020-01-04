import React from 'react';

const PresentationalCompoenent = (props) => {
  return ( 
  <div>
    {props.text}
    <button onClick={props.onClick}>effacer</button>
  </div>
   );
}
 
export default PresentationalCompoenent;