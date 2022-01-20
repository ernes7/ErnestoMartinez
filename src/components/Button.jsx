import React from "react";
import PropTypes from "prop-types";
import "./Button.scss";

function Button({ title, children }) {
  return (
    <button className={"button"}>
      {title}
      {children}
    </button>
  );
}

Button.propTypes = {
  title: PropTypes.string,
};

export default Button;
