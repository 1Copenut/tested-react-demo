import React from 'react';
import PropTypes from 'prop-types';

import styles from '../styles/Button.module.css';

const click = () => console.log('Clicked accessible button! :)');

const ButtonGood = (props) => {
  const { text, ...rest } = props;

  return (
    <button
      className={styles.buttonGood}
      onClick={click}
      {...rest}
    >{ text }</button>
  );
};

ButtonGood.propTypes = {
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
};

ButtonGood.defaultProps = {
  disabled: false,
  onClick: click,
};

export default ButtonGood;
