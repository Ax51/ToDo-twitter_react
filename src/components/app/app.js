import React from 'react';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import PostStatusFilter from '../post-status-filter/post-status-filter';
import PostList from '../post-list/post-list';
import PostListItem from '../post-list-item/post-list-item';
import PostAddForm from '../post-add-form/post-add-form';

const App = () => {
    return (
        <div className="app">
            <AppHeader/>
            <div className="search-panel d-flex">
                <SearchPanel/>
            </div>
            <div className="post-status-filter">
                <PostStatusFilter/>
            </div>
            <div>
                <PostList/>
            </div>
            <div>
                <PostListItem/>
            </div>
            <div>
                <PostAddForm/>
            </div>
        </div>
    )
}

export default App;