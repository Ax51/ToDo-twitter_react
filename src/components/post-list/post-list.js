import React from 'react';
import PostListItem from '../post-list-item/post-list-item';
import './post-list.css';

const PostList = ({posts, onDelete, onToggleImportant, onToggleLike}) => {

    const elements = posts.map((item) => {
        item.important = item.important || false;
        const {id, label, important} = item;
        return (
            <li key = {id} className='list-group-item'>
                <PostListItem
                label = {label}
                important = {important}
                onDelete = {(() => onDelete(id))}
                onToggleImportant = {(() => onToggleImportant(id))}
                onToggleLike = {(() => onToggleLike(id))}/>
            </li>
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}
export default PostList;