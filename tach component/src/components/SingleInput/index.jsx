import React from 'react';
import PropTypes from 'prop-types';

const SingleInput = (props) => (
  <div className="form-group">
    <label className="form-title">{props.title}</label>
    <input
      className="form-input"
      name={props.name}
      type={props.inputType}
      value={props.content}
      onChange={props.controlFunc}
      placeholder={props.placeholder}
    />
  </div>
);

SingleInput.propTypes = {
  inputType: PropTypes.oneOf(['text', 'number', 'email', 'password']).isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  controlFunc: PropTypes.func,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  placeholder: PropTypes.string,
};

SingleInput.defaultProps = {
  type: 'text',
}

export default SingleInput;
