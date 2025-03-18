import React from "react";
import PropTypes from "prop-types";

function Display({ text }) {
  return <div>{text}</div>;
}

Display.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Display;
