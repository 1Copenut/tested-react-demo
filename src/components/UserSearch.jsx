import React from 'react';
import Searchbox from './Searchbox';
import RepoList from './RepoList';

const UserSearch = (props) => {
    const { inputVal, errorMsg, repoLen, submitVal, updateVal } = props;

    return (
        <div>
            <Searchbox
                inputVal={inputVal}
                labelId="username-search"
                submitVal={submitVal}
                updateVal={updateVal}
            />
            <RepoList
                errorMsg={errorMsg}
                repoLen={repoLen}
            />
        </div>
    );
}

export default UserSearch;