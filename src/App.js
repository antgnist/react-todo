import './App.css';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);

  function addTodoHandler(text) {
    setTodos([...todos, text]);
  }
  function deleteTodoHandler(index) {
    todos.splice(index, 1);
    setTodos([...todos]);
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
