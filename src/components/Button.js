import React from 'react';

const Button = (props) => {

  const handleEnter = (e) => {
    if(e.keyCode === 13) {
      props.onEnter(e)
    }
  }

  return (
    <button {...props} onClick={props.onClick} onKeyDown={handleEnter}>{props.children}</button>
  );
}

Button.defaultProps = {
  onEnter: () => {},
  onClick: () => {},
  children: []
}

export default Button;