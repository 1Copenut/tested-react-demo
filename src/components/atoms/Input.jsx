import React from 'react';
import PropTypes from 'prop-types';
import noop from 'nooop';
import styles from '../../styles/Input.module.css';

const Input = (props) => {
  const { ariaLabel, inputVal, labelId, name, updateVal, } = props;

  return (
    <input
      aria-label={ariaLabel}
      className={styles.input}
      id={labelId}
      name={name}
      onChange={updateVal}
      value={inputVal}
    />
  );
};

Input.propTypes = {
  ariaLabel: PropTypes.string,
  inputVal: PropTypes.string,
  labelId: PropTypes.string,
  updateVal: PropTypes.func.isRequired,
};

Input.defaultProps = {
  ariaLabel: undefined,
  labelId: '',
  updateVal: noop
};

export default Input;
