import React, {useState, useCallback, useEffect } from 'react';
import './App.css';

const App = () => {
  const [newTodo, setTodo] = useState('');
  const [todos, setTodos] = useState([])

  const onTodoChange = useCallback((evt) => {
    console.log(evt.target.value);
    setTodo(evt.target.value)
  }, [])

  const formSubmitted = useCallback((evt) => {
    evt.preventDefault();
    if(!newTodo.trim()) return;
    setTodos([{
      content: newTodo,
      done: false,
      id: todos.length ? [todos.length - 1].id + 1 : 1
    }, ...todos])
    setTodo('')
  }, [newTodo, todos]);


  useEffect(() => {
    console.log('todos', todos);
    
  }, [todos])

  const addTodo = useCallback((todo, index) => (evt) => {
    const newTodos = [...todos]
    newTodos.splice(index, 1, {
      ...todo,
      done: !todo.done
    });
    setTodos(newTodos)
  }, [todos]);

  const removeTodo = useCallback((todo) => (evt) => {
    setTodos(todos.filter(otherTodo => otherTodo != todo));
  }, [todos])

  const markAllDone = useCallback(() => {
    const updatedTodos = todos.map((todo) => {
      return {
        ...todo,
        done: true,
      }
    })
    setTodos(updatedTodos)
  }, [todos])

  return (
    <div>
    <form onSubmit={formSubmitted} action="">
    <label htmlFor="newTodo">Enter A Todo:</label>
      <input
          id="newTodo" 
          name="newTodo"
          type="text"
          value={newTodo} 
          onChange={onTodoChange}
      />
      <button>Add Todo</button>
      <button onClick={markAllDone}>Mark All Done</button>
    </form>
    <ul>
      {todos.map((todo,index)=> (
        <li key={todo.id} >
          <input 
            checked={todo.done}
            type="checkbox"
            onChange={addTodo(todo, index)}
          />
          <span className={todo.done ? 'done': ''}>{todo.content}</span>
          <button onClick={removeTodo(index)}>Remove Todo</button>
          </li>
      ))}
    </ul>
    </div>
  )
}


export default App;
