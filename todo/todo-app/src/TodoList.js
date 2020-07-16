import React, { Component } from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm.js'
import './TodoList.css'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = { todos: [] }
        this.create = this.create.bind(this);
        this.remove = this.remove.bind(this)
        this.update = this.update.bind(this)
        this.toggleCompletion = this.toggleCompletion.bind(this)

    }
    create(newTodo) {
        this.setState({
            todos: [...this.state.todos, newTodo]
        })
    };
    remove(id) {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        })
    }
    update(id, updatedTask) {
        const updateTodo = this.state.todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, task: updatedTask }
            }
            return todo
        });
        this.setState({ todos: updateTodo })
    }
    toggleCompletion(id) {
        const updatedTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, complete: !todo.completed };
            }
            return todo;
        });
        this.setState({ todos: updatedTodos });
    }
    render() {
        const todos = this.state.todos.map(todo => {
            return (
                <CSSTransition key={todo.id} timeout={500} classNames='todo'>
                    <Todo
                        key={todo.id}
                        id={todo.id}
                        task={todo.task}
                        completed={todo.completed}
                        removeTodo={this.remove}
                        updateTodo={this.update}
                        toggleTodo={this.toggleCompletion}
                    />
                </CSSTransition>
            )
        })
        return (
            <div className='TodoList'>
                <h1>What To Do?</h1>
                <p>Create, edit, and delete tasks <span>using React Hooks!</span></p>
                <TodoForm createTodo={this.create} />
                <ul>
                    <TransitionGroup className='todo-list'>{todos}</TransitionGroup>
                </ul>
            </div>
        )
    }
}

export default TodoList