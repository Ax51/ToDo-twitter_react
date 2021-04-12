import React, {Component} from 'react';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import PostStatusFilter from '../post-status-filter/post-status-filter';
import PostList from '../post-list/post-list';
import PostAddForm from '../post-add-form/post-add-form';
import './app.css';
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {label: "Going to learn react", important: true, like: false, id:54},
                {label: "Keep trying", important: false, like: false, id:45},
                {label: "Going on", important: false, like: false, id:67},
                {label: "true", important: true, like: false, id:87}
            ]
        }
    }

    deletePost = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const newArr = [...data.slice(0, index), ...data.slice(index + 1)];
            return {
                data: newArr
            }
        })
    }

    addPost = (inp) => {
        const newPost = {
            label: inp,
            important: false,
            id: Date.now()
        };
        this.setState(({data}) => {    
            const newArr = [...data, newPost];
            return {
                data: newArr
            }
        })
    }

    toggleImportant = (id) => {
        console.log(id);
    }

    toggleLike = (id) => {
        console.log(id);
    }

    render() {
        return (
            <div className = "app">
                <AppHeader totalPosts = {this.state.data.length}/>
                <div className = "search-panel d-flex">
                    <SearchPanel/>
                    <PostStatusFilter/>
                </div>
                <PostList 
                    posts = {this.state.data}
                    onDelete = {this.deletePost}
                    onToggleImportant = {this.toggleImportant}
                    onToggleLike = {this.toggleLike}/>
                <PostAddForm
                    onAdd = {this.addPost}/>
            </div>
        )
    }
}