import React from 'react';
import Searchbox from './Searchbox';
import RepoList from './RepoList';

const UserSearch = (props) => {
    const {
        inputVal,
        errorMsg,
        errorState,
        repoLen,
        searchToggle,
        submitVal,
        updateVal
    } = props;
    
    return (
        <div>
            <Searchbox
                inputVal={inputVal}
                labelId="username-search"
                searchToggle={searchToggle}
                submitVal={submitVal}
                updateVal={updateVal}
            />
            <RepoList
                errorMsg={errorMsg}
                errorState={errorState}
                repoLen={repoLen}
                searchToggle={searchToggle}
            />
        </div>
    );
}

export default UserSearch;