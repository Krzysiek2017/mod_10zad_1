import React, { PropTypes } from "react";
import { Link } from "react-router";

const Navigation = (props, context) => {
  return (
    <div>
      <Link to="/home">Home</Link>
      <Link to="/">Posts</Link>
      <Link to="/about">About</Link>
    </div>
  );
};

Navigation.propTypes = {};

export default Navigation;
