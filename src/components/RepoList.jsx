import React from 'react';

const RepoList = (props) => {
    const { errorMsg } = props;
    let list;

    if (errorMsg !== '') {
        list = errorMsg;
    } else {
        list = 'User repos:';
    }

    return (
        <p>{ list }</p>
    );
}

export default RepoList;