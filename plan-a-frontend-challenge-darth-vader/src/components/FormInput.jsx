import React from "react";
import PropTypes from "prop-types";

const FormInput = ({ type, name, value, onChange, label, required, minLength }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        required={required}
        minLength={minLength}
        className="form-input"
      />
    </div>
  );
};

FormInput.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  required: PropTypes.bool,
  minLength: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

FormInput.defaultProps = {
  label: '',
  required: false,
  minLength: 0,
};

export default FormInput;
