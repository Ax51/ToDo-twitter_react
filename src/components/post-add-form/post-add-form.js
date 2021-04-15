import React, {Component} from 'react';
import './post-add-form.css';

export default class PostAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
        
    }
    
    onValueChange = (e) => {
        console.log(e.target.value);
        this.setState({
            text: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.text)
        this.setState({
            text: ''
        });
    }

    render() {
        return (
            <form 
            className = "post-add-form"
            onSubmit = {this.onSubmit}>
                <input 
                    type = "text"
                    placeholder = "О чем вы думаете сейчас?"
                    className = "form-control new-post-label"
                    onChange = {this.onValueChange}
                    value = {this.state.text}
                />
                <button
                    type = "submit"
                    className = "btn btn-outline-secondary">
                Добавить</button>
            </form>
        )
    }
}