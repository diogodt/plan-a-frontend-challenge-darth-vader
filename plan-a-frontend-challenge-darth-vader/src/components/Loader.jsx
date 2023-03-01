import React from "react";
import PropTypes from "prop-types";
import "./Loader.css";

const Loader = ({ message }) => {
  return (
    <div className="loader-container">
      <div className="loader">
        <span className="sr-only">Loading...</span>
      </div>
      {message && <p className="loader-message">{message}</p>}
    </div>
  );
};

Loader.propTypes = {
  message: PropTypes.string,
};

export default Loader;
