import React, { PropTypes } from "react";
import { Link } from "react-router";
import styles from './Navigation.css';

const Navigation = (props, context) => {
  return (
    <div className={styles.navigation}>
      <Link to="/home">Home</Link>
      <Link to="/">Posts</Link>
      <Link to="/about">About</Link>
    </div>
  );
};

Navigation.propTypes = {};

export default Navigation;
