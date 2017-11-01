import React from 'react';
import PropTypes from 'prop-types';
import TableHeader from '../atoms/TableHeader';
import { userHeadersPrimary } from '../../config/tables.js';

const UserRepos = (props) => {
    const {
        errorMsg,
        errorState,
        searchString,
        userRepos
    } = props;
    const reposLength = userRepos.length;
    let list;

    if (reposLength === 0) {
        if (!errorState && searchString) {
            list = '';
            return <p>{list}</p>; 
        }
        
        if (errorState) {
            list = errorMsg;
            return <p>{list}</p>;
        }

        list = 'Enter a search term above to list user repos';
        return <p>{list}</p>;
    } else {
        return (
            <table>
                <TableHeader primaryHeader={userHeadersPrimary} />
            </table>
        );
    }
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