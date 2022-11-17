import { v4 as uuidv4 } from 'uuid';

import './App.css';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);

  function addTodoHandler(text) {
    const newTodo = {
      text: text,
      isComplited: false,
      id: uuidv4(),
    };
    setTodos([...todos, newTodo]);
  }
  function deleteTodoHandler(id) {
    // todos.splice(id, 1);
    //  let newArr = todos.filter((elem) => elem.id !== id);

    setTodos([...todos.filter((elem) => elem.id !== id)]);
  }

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      <TodoList todos={todos} deleteTodo={deleteTodoHandler} />
    </div>
  );
}

export default App;
