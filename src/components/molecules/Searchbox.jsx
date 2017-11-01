import React from 'react';
import PropTypes from 'prop-types';
import Input from '../atoms/Input';
import Label from '../atoms/Label';
import Button from '../atoms/Button';
import noop from 'nooop';

const Searchbox = (props) => {
  const {
    searchString,
    submitVal
  } = props;
  const labelId = 'username-search';  
  const labelText = 'Enter a Github username';

  return (
    <form onSubmit={submitVal}>
      <div>
        <h6>Search Input</h6>
        <Label
          labelId={labelId}
          text={labelText}
        />
        <div>
          <Input
            ariaLabel={labelText}
            labelId={labelId}
            {...props}
          />
          <Button
            disabled={!searchString ? true : false}
            text="Search for user"
            type="submit"
          />
        </div>
      </div>
    </form>
  );
};

Searchbox.propTypes = {
  Button: PropTypes.element,
  Input: PropTypes.element,
  submitVal: PropTypes.func.isRequired
};

Searchbox.defaultProps = {
  submitVal: noop
}

export default Searchbox;
