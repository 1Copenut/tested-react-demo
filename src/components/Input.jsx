import React from 'react';
import PropTypes from 'prop-types';
import noop from 'nooop';
import '../styles/Input.css';

const Input = (props) => {
  const { inputVal, labelId, text, updateVal, } = props;

  return (
    <input
      aria-label={text}
      id={labelId}
      className="input"
      name="searchInput"
      onChange={updateVal}
      value={inputVal}
    />
  );
};

Input.propTypes = {
  inputVal: PropTypes.string,
  labelId: PropTypes.string,
  text: PropTypes.string,
  update: PropTypes.func.isRequired,
};

Input.defaultProps = {
  labelId: '',
  text: '',
  update: noop,
};

export default Input;
