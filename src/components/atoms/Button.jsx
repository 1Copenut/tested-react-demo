import React from 'react';
import PropTypes from 'prop-types';

import styles from '../../styles/Button.module.css';

const ButtonGood = (props) => {
  const { text } = props;

  return (
    <button
      className={styles.buttonGood}
      {...props}
    >{ text }</button>
  );
};

ButtonGood.propTypes = {
  text: PropTypes.string.isRequired
};

ButtonGood.defaultProps = {
  disabled: false,
};

export default ButtonGood;
