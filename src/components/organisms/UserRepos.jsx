import React from 'react';
import PropTypes from 'prop-types';

const UserRepos = (props) => {
    const { errorMsg, errorState, searchString } = props;
    let list;

    if (errorState) {
        list = errorMsg;
    } else if (!errorState && !searchString) {
        list = 'Enter a search term above to list user repos';
    } else {
        list = ''
    }

    return (
        <p>{ list }</p>
    );
};

UserRepos.propTypes = {
    errorMsg: PropTypes.string,
    errorState: PropTypes.bool.isRequired,
    searchString: PropTypes.string
};

UserRepos.defaultProps = {
    errorState: false
};

export default UserRepos;