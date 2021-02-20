import React from "react";
import PropTypes from "prop-types";

function Button({ title, path, chidlren }) {
  return <button className="button">{title}</button>;
}

Button.propTypes = {
  title: PropTypes.string,
};

export default Button;
