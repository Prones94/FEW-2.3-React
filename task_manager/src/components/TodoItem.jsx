import React from 'react'
import { useDispatch } from 'react-redux';

function TodoItem({todo}) {
    let dispatch = useDispatch()
    return (
        <div>
            <h3>Todo Item</h3>
            <div className="row">
                <div>{todo.id}</div>
                <div>{todo.name}</div>
                <button>Edit</button>
                <button onClick={()=>dispatch(deleteTodo(todo.id))}>Delete</button>
            </div>
        </div>
    )
}

export default TodoItem
