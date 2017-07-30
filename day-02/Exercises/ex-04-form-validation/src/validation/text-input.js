import React from "react";
import PropTypes from "prop-types";

const TextFieldGroup = ({ name, label, error, type, pattern, value, onChange }) => {
  console.log('value',value);
  return (
      <div className = "form-group">
        <label className = "control-label">{label}</label>
        <input type={type} className="form-control"  name={name} pattern={pattern} value={value} onChange={onChange}/>
        { error && <span className="error-block">{ error }</span>}
      </div>
  )
}
TextFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}
TextFieldGroup.defaultProps = {
  type: "text"
}
export default TextFieldGroup