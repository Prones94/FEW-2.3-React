import React, { Component } from 'react'


class Todo extends Component {
    constructor(props){
        super(props);
        this.state = {
            isEditing: false,
            task: this.props.task
        }
        this.handleRemove = this.handleRemove.bind(this)
        this.toggleForm = this.toggleForm.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
    }
    handleRemove(){
        this.props.removeTodo(this.props.id)
    }
    toggleForm(){
        this.setState({ isEditing: !this.state.isEditing })
    }
    handleUpdate(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        let result;
        if (this.state.isEditing){
            result = (
                <div>
                    <form onSubmit={this.handleUpdate}>
                        <input 
                            type="text"
                            name="task"
                            value={this.state.task}
                            onChange={this.handleChange}
                            />
                        <button>Submit</button>
                    </form>
                </div>
            )
        } else {
            result = (
                <div>
                    <button onClick={this.toggleForm}>Edit</button>
                    <button onClick={this.handleRemove}>Delete</button>
                    <li>{this.props.task}</li>
                </div>
            )
        }
        return result
    }
}


export default Todo