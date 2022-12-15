import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

import './App.css';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';
import TodosActions from './components/Todos/TodosActions';

function App() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('todoState') || '[]')
  );

  const addTodoHandler = (text) => {
    const newTodo = {
      text: text,
      isComplited: false,
      id: uuidv4(),
    };
    const newState = [...todos, newTodo];
    localStorage.setItem('todoState', JSON.stringify(newState));
    setTodos(newState);
  };

  const deleteTodoHandler = (id) => {
    const newState = todos.filter((todo) => todo.id !== id);
    localStorage.setItem('todoState', JSON.stringify(newState));
    setTodos(newState);
  };

  const toggleTodoHandler = (id) => {
    const newState = todos.map((todo) =>
      todo.id === id ? { ...todo, isComplited: !todo.isComplited } : { ...todo }
    );
    localStorage.setItem('todoState', JSON.stringify(newState));
    setTodos(newState);
  };

  const resetTodosHandler = () => {
    localStorage.setItem('todoState', JSON.stringify([]));
    setTodos([]);
  };

  const deleteCompletedTodosHandler = () => {
    const newState = todos.filter((todo) => !todo.isComplited);
    localStorage.setItem('todoState', JSON.stringify(newState));
    setTodos(newState);
  };

  const completedTodosCount = todos.filter((todo) => todo.isComplited).length;

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />

      {!!todos.length && (
        <TodosActions
          resetTodos={resetTodosHandler}
          deleteCompletedTodos={deleteCompletedTodosHandler}
          completedTodosExist={!!completedTodosCount}
        />
      )}

      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHandler}
        toggleTodo={toggleTodoHandler}
      />

      {completedTodosCount > 0 && (
        <h2>{`You have completed ${completedTodosCount} ${
          completedTodosCount > 1 ? 'todos' : 'todo'
        }`}</h2>
      )}
    </div>
  );
}

export default App;
