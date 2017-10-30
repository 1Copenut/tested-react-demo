import React from 'react';
import PropTypes from 'prop-types';
import noop from 'nooop';

import styles from '../styles/Button.module.css';

const ButtonGood = (props) => {
  const { 
    submitVal,
    text
  } = props;

  return (
    <button
      className={styles.buttonGood}
      onClick={submitVal}
      {...props}
    >{ text }</button>
  );
};

ButtonGood.propTypes = {
  submitVal: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};

ButtonGood.defaultProps = {
  disabled: false,
  submitVal: noop
};

export default ButtonGood;
