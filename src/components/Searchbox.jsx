import React from 'react';
import PropTypes from 'prop-types';
import Input from '../components/Input';
import Label from '../components/Label';
import Button from '../components/Button';

const Searchbox = (props) => {
  const {
    inputVal,
    labelId,
    searchToggle,
    submitVal,
    updateVal
  } = props;
  const text = 'Enter a Github username';

  return (
    <form onSubmit={submitVal}>
      <div>
        <h6>Search Input</h6>
        <Label labelId={labelId} text={text} />
        <div>
          <Input
            inputVal={inputVal}
            labelId={labelId}
            text={text}
            updateVal={updateVal}
          />
          <Button
            disabled={!searchToggle ? true : false}
            text="Search for user"
            type="submit"
          />
        </div>
      </div>
    </form>
  );
};

Searchbox.propTypes = {
  inputVal: PropTypes.string,
  labelId: PropTypes.string,
  submitVal: PropTypes.func,
  updateVal: PropTypes.func.isRequired,
};

Searchbox.defaultProps = {
  labelId: '',
};

export default Searchbox;
