import React from 'react';
import './post-status-filter.css';

const PostStatusFilter = () => {
    return (
        <div className="btn-group">
            <button className="btn btn-show-all">Все</button>
            <button className="btn btn-show-liked">Понравилось</button>
        </div>
    )
}

export default PostStatusFilter;