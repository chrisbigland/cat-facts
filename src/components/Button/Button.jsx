import React from "react";
import "./Button.scss"

const Button = (props) => {
  const {buttonText, handleClick, buttonClassName} = props;
  return (
    <button className={buttonClassName} onClick={handleClick}>
      {buttonText}
    </button>
  );
};

export default Button;
