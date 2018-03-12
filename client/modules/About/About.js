import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// Import Style
import styles from './About.css';

class About extends Component {
  render() {
    return (
      <div className={styles.about}>
        <h2>Hello worldzzzzzzzzzz!</h2>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

About.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(About);
