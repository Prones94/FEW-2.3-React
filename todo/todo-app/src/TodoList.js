import React, { Component } from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm.js'

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = { todos: []}
        this.create = this.create.bind(this);
        this.remove = this.remove.bind(this)
        this.update = this.update.bind(this)

    }
    create(newTodo){
        this.setState({
            todos:[...this.state.todos, newTodo]
        })
    };
    remove(id){
        this.setState({
            todos:this.state.todos.filter(todo => todo.id !== id)
        })
    }
    update(id, updatedTask){
        const updateTodo = this.state.todos.map(todo => {
            if(todo.id === id) {
                return {...todo, task:updatedTask}
            }
            return todo
        });
        this.setState({todos:updateTodo})
    }
    render(){
        const todos = this.state.todos.map(todo => {
            return <Todo
                        key={todo.id}
                        id={todo.id}
                        task={todo.task}
                        completed={todo.completed}
                        removeTodo={this.remove}
                        updateTodo={this.update}
                    />
        })
        return(
            <div>
                <h1>What To Do?</h1>
                <p>Create, edit, and delete tasks</p>
                <TodoForm createTodo={this.create} />
                <ul>{todos}</ul>
            </div>
        )
    }
}

export default TodoList