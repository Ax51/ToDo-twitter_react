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
                {label: "Going to learn react", important: true, like: false, id: 54},
                {label: "Keep trying", important: false, like: false, id: 45},
                {label: "Going on", important: false, like: false, id: 67},
                {label: "true", important: true, like: false, id: 87}
            ],
            term: '',
            filter: 'all'
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
            like: false,
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
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const old = data[index];
            const importanted = {...old, important: !old.important};
            const newArr = [...data.slice(0, index), importanted, ...data.slice(index + 1)];
            return {
                data: newArr
            }
        })
    }

    toggleLike = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const old = data[index];
            const liked = {...old, like: !old.like};
            const newArr = [...data.slice(0, index), liked, ...data.slice(index + 1)];
            return {
                data: newArr
            }
        })
    }

    searchPost = (items, term) => {
        if (term.length === 0) {
            return items
        }

        return items.filter((item) => {
            return item.label.indexOf(term) > -1
        })

        // const elements = posts.map((item) => {
        //     let {label, like} = item;

        //     return()
        // })
        // this.setState(({data}) => {    
        //     const newArr = [...data, newPost];
        //     return {
        //         data: newArr
        //     }
        // })
    }

    filterPost = (items, filter) => {
        if (filter === 'like') {
            return items.filter(item => item.like)
        } else {
            return items
        }
    }

    onUpdateSearch = (term) => {
        this.setState({term})
    }

    onFilterSelect = (filter) => {
        this.setState({filter})
    }

    render() {
        const {data, term, filter} = this.state;
        
        const liked = data.filter(item => item.like).length;
        const important = data.filter(item => item.important).length;
        const allPosts = data.length;

        const visiblePosts = this.filterPost(this.searchPost(data, term), filter)

        return (
            <div className = "app">
                <AppHeader 
                liked = {liked}
                important = {important}
                totalPosts = {allPosts}/>
                <div className = "search-panel d-flex">
                    <SearchPanel
                    onUpdateSearch = {this.onUpdateSearch}/>
                    <PostStatusFilter
                    filter = {filter}
                    onFilterSelect = {this.onFilterSelect}/>
                </div>
                <PostList 
                    posts = {visiblePosts}
                    onDelete = {this.deletePost}
                    onToggleImportant = {this.toggleImportant}
                    onToggleLike = {this.toggleLike}/>
                <PostAddForm
                    onAdd = {this.addPost}/>
            </div>
        )
    }
}