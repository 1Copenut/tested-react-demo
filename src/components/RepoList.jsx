import React from 'react';

const RepoList = (props) => {
    const { errorMsg, errorState, searchToggle } = props;
    let list;

    if (errorState) {
        list = errorMsg;
    } else if (!errorState && !searchToggle) {
        list = 'Enter a search term above to list user repos';
    } else {
        list = ''
    }

    return (
        <p>{ list }</p>
    );
}

export default RepoList;