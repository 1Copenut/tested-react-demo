import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Label.css';

const Label = (props) => {
  const { labelId, text } = props;

  return (
    <label
      className="label label--block"
      htmlFor={labelId}
    >
      { text }
    </label>
  );
};

Label.propTypes = {
  labelId: PropTypes.string,
  text: PropTypes.string,
};

Label.defaultProps = {
  labelId: '',
  text: 'Default label',
};

export default Label;
