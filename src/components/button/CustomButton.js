import React from "react";
import "./customButton.scss";

const CustomButton = ({ children, googleSignIn, ...otherProps }) => {
  return (
    <button
      className={`${googleSignIn ? "googleSignin" : ""} button-container`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
