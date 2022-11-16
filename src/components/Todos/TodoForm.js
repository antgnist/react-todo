import { useState } from 'react';
import style from './TodoForm.module.css';

function TodoForm({ addTodo }) {
  const [text, setText] = useState('');

  function onSubmitHandler(event) {
    event.preventDefault();
    console.log(text);
    addTodo(text);
    setText('');
  }

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <input
          placeholder="Enter new todo"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default TodoForm;
