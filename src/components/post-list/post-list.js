import React from 'react';
import PostListItem from '../post-list-item/post-list-item';
import './post-list.css';

const PostList = ({posts, onDelete, onToggleImportant, onToggleLike}) => {

    const elements = posts.map((item) => {
        let {id, label, important, like} = item;
        important = important || false;
        like = like || false;
        return (
            <li key = {id} className='list-group-item'>
                <PostListItem
                label = {label}
                important = {important}
                like ={like}
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