import React from 'react';
import Searchbox from './Searchbox';
import RepoList from './RepoList';
import PropTypes from 'prop-types';

const UserSearch = (props) => {
    return (
        <div>
            <Searchbox {...props} />
            <RepoList {...props} />
        </div>
    );
};

UserSearch.propTypes = {
    Searchbox: PropTypes.element,
    RepoList: PropTypes.element
}

export default UserSearch;