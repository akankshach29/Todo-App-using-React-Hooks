import React, { useState } from 'react';
import './App.css';

function Todo({ todo, index, completeTodo, removeTodo }){
  return (
    <div 
      style={{ textDecoration: todo.isCompleted ? 'line-through' : ''}} 
      className="todo"
    >
      {todo.text}
      <div>
        <button onClick = { () => completeTodo(index)}>Complete</button>
        <button onClick = { () => removeTodo(index)}>x</button>
      </div>
    </div>)
}

function TodoForm({addTodo}) {
  const [value, setValue] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue('');
  }
  return(
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        className="input" 
        value={value} 
        placeholder="Add todos"
        onChange={e => setValue(e.target.value)} />
    </form>
  )
}

function App(){
  const [todos, setTodos] = useState([
    {
      text: 'Learn Hooks',
      isCompleted: false
    },
    {
      text: 'Meet a friend',
      isCompleted: false
    },
    {
      text: 'Build an app',
      isCompleted: false
    }
  ]);

  const completeTodo = index => {
    const NewTodos = [...todos];
    NewTodos[index].isCompleted = true;
    setTodos(NewTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const addTodo = text => {
    const NewTodos = [...todos, {text}];
    setTodos(NewTodos);
  };

  return(
    <div className="app">
      <div className="todo-list">
        {
          todos.map((todo, index)=>(
            <Todo 
              key={index} 
              todo={todo} 
              index={index} 
              completeTodo={completeTodo} 
              removeTodo={removeTodo}
            />
          ))
        }
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  )
} 
export default App;
