import React from 'react';
import Searchbox from '../molecules/Searchbox';
import UserRepos from './UserRepos';
import PropTypes from 'prop-types';

const UserSearch = (props) => {
    return (
        <div>
            <Searchbox {...props} />
            <UserRepos {...props} />
        </div>
    );
};

UserSearch.propTypes = {
    Searchbox: PropTypes.element,
    RepoList: PropTypes.element
}

export default UserSearch;